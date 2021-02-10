import {
  FETCH_REQUESTED,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions/fetchActions";

const initialState = {
  data: [],
  errorMsg: "",
  perPage: 0,
  loading: false,
  generation: 1,
  numberOfPages: 0,
};

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
        perPage: action.payload.perPage,
        generation: action.payload.generation,
        numberOfPages: action.payload.numberOfPages,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
