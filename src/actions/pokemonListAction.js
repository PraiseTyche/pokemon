import axios from "axios";
import { FETCH_REQUESTED, FETCH_SUCCESS, FETCH_ERROR } from "./fetchActions";
import { pokeGenerations } from "../helper/pokeGenerations";

function range(start, end) {
  return new Array(end - start + 1).fill(undefined).map((_, i) => i + start);
}

export const fetchPokemonData = (
  page = 1,
  perPage = 15,
  generation = 1
) => async (dispatch) => {
  const pokemonGeneration = pokeGenerations.find(
    (gen) => gen.generation === generation
  );
  const numberOfPokemon = pokemonGeneration.numberOfPokemon;
  const startingIndex = perPage * page - perPage;
  const lastIndex = startingIndex + perPage;
  const numberOfPages = Math.ceil(numberOfPokemon / perPage);

  const pokemonIdArray = range(pokemonGeneration.start, pokemonGeneration.end);
  const pokemonIdArraySlice = pokemonIdArray.slice(startingIndex, lastIndex);
  try {
    dispatch({
      type: FETCH_REQUESTED,
      payload: {
        perPage,
        generation,
        numberOfPages,
      },
    });

    const multiFetch = pokemonIdArraySlice.map(async (id) => {
      const _pokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      return _pokemon.data;
    });

    const results = await Promise.all(multiFetch);

    dispatch({
      type: FETCH_SUCCESS,
      payload: {
        data: results,
        perPage,
        numberOfPages,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
      payload: err,
    });
  }
};
