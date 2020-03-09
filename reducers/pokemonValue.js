// constants
import { SET_POKEMON_VALUE } from "../constants/index";

const initialState = {
  pokemon: {}
};

export function pokemonValueReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMON_VALUE:
      return { ...state, pokemon: action.value };
    default:
      return state;
  }
}
