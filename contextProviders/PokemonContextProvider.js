import React, { createContext, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { POKEMON_LIST, POKEMON_SEARCH } from "../context/PokemonContext";
import { connect } from "react-redux";
import { setPokemonValue } from "../actions/setPokemonValue";

export const PokemonContext = createContext({});

const PokemonContextProvider = ({ children, pokemon, setPokemon }) => {
  const [input, setInput] = useState("");
  const pokemonList = useQuery(POKEMON_LIST, { variables: { first: 151 } });
  const pokemons = pokemonList.loading ? [] : pokemonList.data.pokemons;

  const handleChange = event => {
    setInput(event.target.value);
  };

  const filterPokemon =
    input === ""
      ? pokemons
      : pokemons.filter(pokemon => pokemon.name.includes(input));
/*  const pokemonData =
    pokemon === null ? {} : pokemons.find(item => item.id.includes(pokemon.id));*/
  return (
    <PokemonContext.Provider
      value={{ filterPokemon, handleChange }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

export default connect(mapStateToProps, null)(PokemonContextProvider);
/*export {  PokemonContextProvider as default, PokemonContext; }*/
