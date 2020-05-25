import React, {useEffect} from "react";
// next
import Link from "next/link";
// styles
import {
PokemonBottomHeader, PokemonBox,
PokemonDashboardStyled,
PokemonImage,
PokemonName
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
  PokemonEvolutionImage
} from "../../styles/pokemons/pokemonView";


const Pokemon = ({ pokemon, setPokemon, pokemonId }) => {
    useEffect(() => {
        setPokemon(pokemonId);
    });

  return (
     <PokemonDashboardStyled>
      <PokemonTopView>
        <PokemonImage>
          <img src={pokemon.image} alt={pokemon.name} />
        </PokemonImage>
        <PokemonBottomHeader>
          <PokemonName>
            <PokemonNameTopView>
              {pokemon.number}: {pokemon.name}
            </PokemonNameTopView>
            <PokemonTypeTopView>
              {pokemon.types && pokemon.types.join(", ")}
            </PokemonTypeTopView>
          </PokemonName>
        </PokemonBottomHeader>
      </PokemonTopView>
      <PokemonPropertiesView>
        {pokemon.types &&
          pokemon.types.map((item, key) => (
            <PokemonPropertyBox key={key}>
              <PokemonProperty>{item}</PokemonProperty>
            </PokemonPropertyBox>
          ))}
      </PokemonPropertiesView>
      <PokemonPropertiesView>
        {pokemon.weaknesses &&
          pokemon.weaknesses.map((item, key) => (
            <PokemonPropertyBox key={key}>
              <PokemonProperty>{item}</PokemonProperty>
            </PokemonPropertyBox>
          ))}
      </PokemonPropertiesView>
      <PokemonEvolutionsView>
        <PokemonEvolutionTitle>
          {pokemon.evolutions ? "Evolutions" : "This is the last evolution"}
        </PokemonEvolutionTitle>

        {pokemon.evolutions &&
          pokemon.evolutions.map((item, key) => (
            <Link href="/pokemon/[id]" as={`/pokemon/${item.id}`}>
              <PokemonEvolutionBox  onClick={()=>setPokemon(item)} key={key}>
                <PokemonEvolutionImgTxt>
                  <PokemonEvolutionImage src={item.image} alt={item.name} />
                  {item.number} - {item.name}
                </PokemonEvolutionImgTxt>
              </PokemonEvolutionBox>
            </Link>
          ))}
      </PokemonEvolutionsView>
    </PokemonDashboardStyled>
  );
};


export default Pokemon;
