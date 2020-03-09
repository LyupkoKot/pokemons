import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { POKEMON_SEARCH } from "../context/PokemonContext";
import { PokemonContext } from "../contextProviders/PokemonContextProvider";

const Layout = props => {
  const { filterPokemon } = useContext(PokemonContext);


  return props.children({ filterPokemon});
};

export default Layout;
