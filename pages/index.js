import * as React from "react";
import PokemonDashboard from "../component/pokemon/PokemonDashboard";
import { PokemonDashboardStyled } from "../styles/pokemons/pokemonsView";
import { Wrapper } from "../styles/app/AppStyled";
import SearchBar from "../component/searchbar/SearchBar";
import Layout from "../layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      {({ filterPokemon, setPokemon }) => (
        <Wrapper>
          <SearchBar />
          <PokemonDashboardStyled>
            <PokemonDashboard
              filterPokemon={filterPokemon}
              setPokemon={setPokemon}
            />
          </PokemonDashboardStyled>
        </Wrapper>
      )}
    </Layout>
  );
};

export default HomePage;
