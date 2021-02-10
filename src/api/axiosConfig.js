import axios from "axios";

export const pokemonFetch = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 3000,
  url: "/pokemon",
});
