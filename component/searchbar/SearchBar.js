import React from 'react';
import {SearchBarStyled, SearchFormStyled} from "../../styles/searchbar/SearchBarStyled";
import SearchForm from "./SearchForm";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchBar = () => {
    return (
        <SearchBarStyled>
            <SearchForm />
        </SearchBarStyled>
    );
};

export default SearchBar;
