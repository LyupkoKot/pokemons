import { gql } from "apollo-boost";

const POKEMON_LIST = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
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
