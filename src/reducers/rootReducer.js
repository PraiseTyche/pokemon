import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonList";
const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
});

export default rootReducer;
