import styled from "styled-components";
const PokemonDashboardStyled = styled.div`
  color: rgba(0, 0, 0, 0.87);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  font-family: sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 2px;
  flex: 0 0 33.33%;
  min-height: 200px;
  margin: 24px;
`;
const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -2px;
`;

const PokemonBox = styled.div`
  box-sizing: border-box;
  padding: 2px;
  width: 33.33%;
  height: 184px;
  @media only screen and (max-width: 600px) {
    width: 100%;
 
  }
`;
const PokemonStyled = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;

  
`;
const PokemonImage = styled.div`
  position: relative;
  img {
    vertical-align: top;
    max-width: 100%;
    min-width: 100%;
    width: initial;
    height: 170px;
  }
`;

const PokemonBottomHeader = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 68px;
  background: rgb(49 21 21 / 40%);
  display: flex;
  align-items: center;
`;

const PokemonHoverStyled = styled.div``;
const PokemonName = styled.div`
  flex-grow: 1;
  margin-left: 16px;
  margin-right: 0px;
  color: rgb(255, 255, 255);
  overflow: hidden;
  p {
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export {
  PokemonStyled,
  PokemonDashboardStyled,
  PokemonHoverStyled,
  PokemonImage,
  PokemonBottomHeader,
  PokemonBox,
  PokemonName,
  PokemonList
};
