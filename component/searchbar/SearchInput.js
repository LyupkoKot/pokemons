import React, {useContext} from 'react';
import {SearchInputStyled} from "../../styles/searchbar/SearchBarStyled";
import {PokemonContext} from "../../contextProviders/PokemonContextProvider";

const SearchInput = () => {
    const {handleChange} = useContext(PokemonContext);
    return (
        <SearchInputStyled  type="text" placeholder="Search..." onChange={handleChange} />
    );
};

export default SearchInput;
