import React from "react";
import { SearchButtonStyled } from "../../styles/searchbar/SearchBarStyled";

const SearchButton = ({ onClick }) => {
  return (
    <SearchButtonStyled onClick={onClick}>
      <i className="fa fa-search"></i>
    </SearchButtonStyled>
  );
};

export default SearchButton;
