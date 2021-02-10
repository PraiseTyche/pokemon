import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import { fetchPokemonData } from "../actions/pokemonListAction";

import Card from "../components/card/Card";

const Homepage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (page = 1) => {
    dispatch(fetchPokemonData(page));
  };

  const showData = () => {
    if (pokemonList.loading) {
      return <h1>Loading</h1>;
    }

    if (pokemonList.data.length > 0) {
      return pokemonList.data.map((pokemon, idx) => {
        return <Card pokemon={pokemon} key={idx} />;
      });
    }

    if (pokemonList.errorMsg !== "") {
      return <h1>I have encountered an error!</h1>;
    }
  };

  return (
    <div className={"hero-section"}>
      <div className={"hero-top"}>
        <h1>Generation 1</h1>
      </div>
      <div className={"card-section"}>{showData()}</div>
      <div className={"hero-footer"}>
        <ReactPaginate
          containerClassName={"pagination-container"}
          pageClassName={"pagination-links"}
          pageCount={pokemonList.numberOfPages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          activeClassName={"current-page"}
          onPageChange={(data) => fetchData(data.selected + 1)}
        ></ReactPaginate>
      </div>
    </div>
  );
};

export default Homepage;

// onPageChange={(data) => fetchData(data.selected + 1)}
