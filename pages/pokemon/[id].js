// react hooks
import React, { useContext, useCallback } from "react";
// layout
import Layout from "../../layouts/Layout";
// components
import Pokemon from "../../component/pokemon/Pokemon";
// styles
import { PokemonView } from "../../styles/pokemons/pokemonView";


const PokemonPage = () => {

  return (
    <PokemonView>

      <Layout>
        {({ setPokemon, pokemonData }) => (
            <Pokemon pokemon={pokemonData} setPokemon={setPokemon} />
        )}
      </Layout>

    </PokemonView>
  );
};


export default PokemonPage;
