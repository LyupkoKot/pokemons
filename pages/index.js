import * as React from "react";
import Pokemons from "../component/pokemons/Pokemons";
import { PokemonDashboardStyled } from "../styles/pokemons/pokemonsView";
import { Wrapper } from "../styles/app/AppStyled";
import SearchBar from "../component/searchbar/SearchBar";
import Layout from "../layouts/Layout";
// next update
/*import { connect } from "react-redux";
import { setPokemonValue } from "../actions/setPokemonValue";*/

const Home = ({ setPokemon }) => {
  return (
    <Wrapper>
      <Layout>
        {({ filterPokemon, handleClick }) => (
          <>
            <SearchBar />
            <PokemonDashboardStyled>
              <Pokemons
                filterPokemon={filterPokemon}
                /*setPokemon = {setPokemon}*/
              />
            </PokemonDashboardStyled>
          </>
        )}
      </Layout>
    </Wrapper>
  );
}

// next update
/*const mapDispatchToProps = dispatch => {
  return { setPokemon: val => dispatch(setPokemonValue(val)) };
};

export default connect(null, mapDispatchToProps)(Home);*/
export default Home;
