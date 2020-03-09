import { applyMiddleware, createStore } from 'redux';
import { pokemonValueReducer } from "../reducers/pokemonValue"
import logger from 'redux-logger'


export const store = createStore(pokemonValueReducer, applyMiddleware(logger));
