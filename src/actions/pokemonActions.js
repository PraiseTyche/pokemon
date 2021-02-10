import axios from "axios";

export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
    let _pokeURLS = res.data.results.map((item) => item.url);
    const detailedPokemon = _pokeURLS.map(async (url) => {
      const _pokemon = await axios.get(url);
      return _pokemon.data;
    });

    const results = await Promise.all(detailedPokemon);

    dispatch({
      type: "POKEMON_LIST_DETAILS",
      payload: results,
    });
  } catch (err) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
      payload: err,
    });
  }
};
