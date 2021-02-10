import React from "react";
import { useSelector } from "react-redux";

const Pokemon = (props) => {
  console.log(props.match.params.pokemon);
  const pokemon = useSelector((state) => state.pokemonList.data);
  console.log(
    pokemon.find((item) => {
      return item.name === props.match.params.pokemon;
    })
  );
  return <div>Pokemon</div>;
};

export default Pokemon;
