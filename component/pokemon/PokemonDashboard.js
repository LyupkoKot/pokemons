import React from "react";
import Link from "next/link";
import Sprite from "./Sprite";
import {
  PokemonBottomHeader,
  PokemonBox,
  PokemonImage,
  PokemonList,
  PokemonName,
  PokemonStyled,
} from "../../styles/pokemons/pokemonsView";

function PokemonDashboard({ filterPokemon, setPokemon }) {
  return (
    <PokemonList>
      {filterPokemon.map(function(item) {
        return (
          <Link href="/pokemon/[id]" as={`/pokemon/${item.key}`} key={item.key}>
            <PokemonBox onClick={() => setPokemon(item)}>
              <PokemonStyled>
                <PokemonImage>
                  <Sprite src={item.sprite} alt={item.species} />
                </PokemonImage>
                <PokemonBottomHeader>
                  <PokemonName>
                    <p>{item.species.toUpperCase()}</p>
                  </PokemonName>
                </PokemonBottomHeader>
              </PokemonStyled>
            </PokemonBox>
          </Link>
        );
      })}
    </PokemonList>
  );
}

export default PokemonDashboard;
