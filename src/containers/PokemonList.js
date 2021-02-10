import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import { GetPokemonList } from "../actions/pokemonActions";

import Card from "../components/card/Card";
import Container from "../components/container/Container";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
  const showData = () => {
    if (pokemonList.loading) {
      return <h1>Loading</h1>;
    }

    // if (Object.keys(pokemonList.data).length !== 0) {
    //   return pokemonList.data.map((pokemon, idx) => {
    //     return <Card pokemon={pokemon} idx={idx} />;
    //   });
    // }

    if (Object.keys(pokemonList.data).length !== 0) {
      return <h1>Have Data!</h1>;
    }

    if (pokemonList.errorMsg !== "") {
      return <h1>{pokemonList.errorMsg}</h1>;
    }
    return <h1>No data to show</h1>;
  };
  return (
    <>
      <Container>{showData()}</Container>
      {/* <ReactPaginate
        pageCount={Math.ceil(pokemonList.count / 15)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => fetchData(data.selected + 1)}
      ></ReactPaginate> */}
    </>
  );
};

export default PokemonList;
