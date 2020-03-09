import React from 'react';
import {SearchFormStyled} from "../../styles/searchbar/SearchBarStyled";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchForm = () => {
    return (
        <SearchFormStyled>
            <SearchInput/>
            <SearchButton/>
        </SearchFormStyled>
    );
};

export default SearchForm;
