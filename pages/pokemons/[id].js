import React, { useContext } from "react";
import { PokemonContext } from "../../contextProviders/PokemonContextProvider";
import PokemonContextProvider from "../../contextProviders/PokemonContextProvider";
import Pokemon from "./pokemon";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";

import { POKEMON_SEARCH } from "../../context/PokemonContext";
import { PokemonView } from "../../styles/pokemons/pokemonView";

const PokemonLayout = props => {
  // next update
  /*const { pokemonData } = useContext(PokemonContext);*/

  const pokemonQuery = useQuery(POKEMON_SEARCH, {
    variables: { id: props.id }
  });
  const pokemon = pokemonQuery.loading ? {} : pokemonQuery.data.pokemon;
  const loading = pokemonQuery.loading;
  return (
    <PokemonView>
      <Pokemon pokemon={pokemon} loading={loading} />
    </PokemonView>
  );
};



PokemonLayout.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default PokemonLayout;
