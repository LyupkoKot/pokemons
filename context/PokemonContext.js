import { gql } from "apollo-boost";

const POKEMON_LIST = gql`
  query GetAllPokemon($offset: Int, $take: Int) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      species
      sprite
      types {
        name
      }
      evolutions {
        key
        species
        sprite
      }
    }
  }
`;

const POKEMON_SEARCH = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      number
      name
      image
      classification
      types
      weaknesses
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;

export { POKEMON_LIST, POKEMON_SEARCH };
