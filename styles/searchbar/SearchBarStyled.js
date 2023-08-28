import styled from 'styled-components';


const SearchBarStyled = styled.div`
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;

  &.scrolled {
    position: fixed;
    right: 10vh;
    top: 85vh;
    border-radius: 50%;
    padding: 20px;  
    background: rgba(255, 255, 255, 0.2); 
  }
`;

const SearchInputStyled = styled.input`
  padding: 10px 16px; 
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);  
  color: white;
  font-size: 18px;  
  outline: none;
  width: 30vw; 

  &:focus {
    box-shadow: 0 0 15px #FFB6C1;
  }

`;
const SearchButtonStyled = styled.button`
  display: block; 
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px; 
`;

export {
  SearchBarStyled,
  SearchInputStyled,
  SearchButtonStyled,
};
