import React from "react";

import {
  PokemonBottomHeader,
  PokemonDashboardStyled,
  PokemonImage,
  PokemonName
} from "../../styles/pokemons/pokemonsView";
import Link from "next/link";
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
//next update
/*import { setPokemonValue } from "../../actions/setPokemonValue";
import { connect } from "react-redux";*/

const Pokemon = ({ pokemon, loading }) => {
  return (
    !loading && <PokemonDashboardStyled>
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
            <Link href="/pokemons/[id]" as={`/pokemons/${item.id}`}>
              <PokemonEvolutionBox key={key}>
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

// next update
/*const mapDispatchToProps = dispatch => ({
  setPokemon: val => dispatch(setPokemonValue(val))
});

export default connect(null, mapDispatchToProps)(Pokemon);
*/
export default Pokemon;
