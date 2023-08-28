import React, { useCallback, useContext, useEffect } from "react";
// context
import { PokemonContext } from "../contextProviders/PokemonContextProvider";
// redux hooks
import { useDispatch } from "react-redux";
// actions
import { setPokemonValue } from "../actions/setPokemonValue";

const Layout = (props) => {
  const { filterPokemon, pokemonData } = useContext(PokemonContext);
  const dispatch = useDispatch();
  const setPokemon = useCallback((val) => dispatch(setPokemonValue(val)), [
    dispatch,
  ]);

  return props.children({ filterPokemon, setPokemon, pokemonData });
};

export default Layout;
