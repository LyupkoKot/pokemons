import React, { useEffect } from "react";
import Sprite from "./Sprite";
// next
import Link from "next/link";
// styles
import {
  PokemonBottomHeader,
  PokemonDashboardStyled,
  PokemonImage,
  PokemonName,
} from "../../styles/pokemons/pokemonsView";
import {
  PokemonNameTopView,
  PokemonTopView,
  PokemonPropertyBox,
  PokemonProperty,
  PokemonPropertiesView,
  PokemonTypeTopView,
  PokemonEvolutionsView,
  PokemonEvolutionTitle,
  PokemonEvolutionBox,
  PokemonEvolutionImgTxt,
  PokemonEvolutionImage,
} from "../../styles/pokemons/pokemonView";

const Pokemon = ({ pokemon, setPokemon, pokemonId }) => {
  useEffect(() => {
    setPokemon(pokemonId);
  }, [pokemonId, setPokemon]);
  return (
    <>
      {pokemon && (
        <PokemonDashboardStyled>
          <PokemonTopView>
            <PokemonImage>
              <Sprite src={pokemon.sprite} alt={pokemon.species} />
            </PokemonImage>
            <PokemonBottomHeader>
              <PokemonName>
                <PokemonNameTopView>{pokemon.species}</PokemonNameTopView>
                <PokemonTypeTopView>
                  {pokemon.types &&
                    pokemon.types
                      .map((typeObject) => typeObject.name)
                      .join(", ")}
                </PokemonTypeTopView>
              </PokemonName>
            </PokemonBottomHeader>
          </PokemonTopView>
          <PokemonPropertiesView>
            {pokemon.types &&
              pokemon.types.map((item, key) => (
                <PokemonPropertyBox key={key}>
                  <PokemonProperty>{item.name}</PokemonProperty>
                </PokemonPropertyBox>
              ))}
          </PokemonPropertiesView>
          <PokemonEvolutionsView>
            <PokemonEvolutionTitle>
              {pokemon.evolutions
                ? "Next evolution"
                : "This is the last evolution"}
            </PokemonEvolutionTitle>

            {pokemon.evolutions &&
              pokemon.evolutions.map((item, key) => (
                <Link
                  href="/pokemon/[id]"
                  as={`/pokemon/${item.key}`}
                  key={key}
                >
                  <PokemonEvolutionBox onClick={() => setPokemon(item)}>
                    <PokemonEvolutionImgTxt>
                      <PokemonEvolutionImage
                        src={item.sprite}
                        alt={item.species}
                      />
                      {item.species}
                    </PokemonEvolutionImgTxt>
                  </PokemonEvolutionBox>
                </Link>
              ))}
          </PokemonEvolutionsView>
        </PokemonDashboardStyled>
      )}
    </>
  );
};

export default Pokemon;
