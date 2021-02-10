import React from "react";
import { Link } from "react-router-dom";
import { pokemonTypes } from "../../pokemonIcons";

const Card = ({ pokemon, idx }) => {
  let formatId = pokemon.id.toString().padStart(3, "0");
  const nameCapitalized =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const type = pokemon.types.map((item) => {
    return item.type.name;
  });

  const icon = (array) => {
    return array.map((type) => {
      return (
        <div className={"icon-container"}>
          <img src={pokemonTypes[type]} width="20px" />
        </div>
      );
    });
  };

  return (
    <Link to={`/pokemon/${pokemon.name}`} className={"card"}>
      <div className={"card-header"}>
        <div className={"pokemon-id"}>#{formatId}</div>
        <div className={"type"}>{icon(type)}</div>
      </div>
      <div className={"card-body"}>
        <div className={"card-image-container"}>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemon"
          />
        </div>
      </div>
      <div className={"card-footer"}>
        <h3>{nameCapitalized}</h3>
      </div>
    </Link>
  );
};

export default Card;
