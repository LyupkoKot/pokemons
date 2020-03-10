import * as React from "react";
import Link from "next/link";
import {
  PokemonBottomHeader,
  PokemonBox,
  PokemonImage,
  PokemonList,
  PokemonName,
  PokemonStyled
} from "../../styles/pokemons/pokemonsView";

function PokemonDashboard({ filterPokemon, setPokemon}) {

  return (
    <PokemonList>
      {filterPokemon.map(function(item, key) {
        return (
          <Link href="/pokemon/[id]" as={`/pokemon/${item.id}`}>
            <PokemonBox onClick={()=>setPokemon(item)} >
              <PokemonStyled key={key}>
                <PokemonImage>
                  <img src={item.image} alt={item.name} />
                </PokemonImage>
                <PokemonBottomHeader>
                  <PokemonName>
                    <p>
                      {item.number}: {item.name}
                    </p>
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
