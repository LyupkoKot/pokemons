// react hooks
import React, { useContext, useCallback } from "react";
// layout
import Layout from "../../layouts/Layout";
// components
import Pokemon from "../../component/pokemon/Pokemon";
// styles
import { PokemonView } from "../../styles/pokemons/pokemonView";

const PokemonPage = (props) => {
  return (
    <PokemonView>
      <Layout>
        {({ setPokemon, pokemonData }) => (
          <Pokemon
            pokemonId={props.pokemon}
            pokemon={pokemonData}
            setPokemon={setPokemon}
          />
        )}
      </Layout>
    </PokemonView>
  );
};
PokemonPage.getInitialProps = ({ query }) => {
  return {
    pokemon: {
      key: query.id,
    },
  };
};

export default PokemonPage;
