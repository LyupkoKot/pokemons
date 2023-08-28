import React, { createContext, useState } from "react";
// graphql query
import { useQuery } from "@apollo/react-hooks";
import { POKEMON_LIST } from "../context/PokemonContext";
// redux hooks
import { useSelector } from "react-redux";

const PokemonContext = createContext({});

const PokemonContextProvider = ({ children, setPokemon }) => {
  const [input, setInput] = useState("");
  const pokemonList = useQuery(POKEMON_LIST, {
    variables: { offset: 89, first: 151 },
  });
  const pokemons = pokemonList.loading ? [] : pokemonList.data.getAllPokemon;
  const pokemon = useSelector((state) => state.pokemon);
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const filterPokemon =
    input === ""
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.species.includes(input));
  const pokemonData =
    pokemon === null ? {} : pokemons.find((item) => item.key === pokemon.key);
  return (
    <PokemonContext.Provider
      value={{ filterPokemon, handleChange, pokemonData }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider as default, PokemonContext };
