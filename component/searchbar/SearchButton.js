import React from 'react';
import {SearchButtonStyled, SearchIcon, IconBox} from "../../styles/searchbar/SearchBarStyled";

const SearchButton = () => {
    return (
        <SearchButtonStyled>
            <IconBox>
            <SearchIcon/>
            </IconBox>
        </SearchButtonStyled>
    );
};

export default SearchButton;
