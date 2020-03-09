import styled from "styled-components";
import { SearchAlt } from "styled-icons/boxicons-regular/SearchAlt";
const SearchBarStyled = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  margin: 0 24px;
  padding: 5px;
`;
const SearchFormStyled = styled.form`
  display: flex;
  height: 4vh;
  width: 100%;
  background: white;
`;
const SearchInputStyled = styled.input`
  width: 85%;
  font-size: 17px;
  font-family: sans-serif;
`;
const SearchButtonStyled = styled.button`
  width: 15%;
  font-size: 17px;
  font-family: sans-serif;
  background: rgba(0, 0, 0, 0.4);
`;
const IconBox = styled.div`
  svg {
    height: 4vh;
  }
`;
const SearchIcon = styled(SearchAlt)`
  color: white;
`;

export {
  SearchFormStyled,
  SearchBarStyled,
  SearchInputStyled,
  SearchButtonStyled,
  SearchIcon,
  IconBox
};
