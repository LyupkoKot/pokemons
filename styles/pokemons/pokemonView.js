import styled from "styled-components";
const PokemonView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PokemonTopView = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const PokemonNameTopView = styled.div`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.87);
  display: block;
  line-height: 36px;
`;
const PokemonTypeTopView = styled.div`
  display: flex;

  font-size: 14px;
  color: rgba(255, 255, 255, 0.54);
  display: block;
`;

const PokemonPropertiesView = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PokemonPropertyBox = styled.div`
  border: 10px;
  box-sizing: border-box;
  display: flex;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: default;
  text-decoration: none;
  margin: 5px;
  padding: 0px;
  outline: none;
  font-size: inherit;
  font-weight: inherit;
  position: relative;
  background-color: rgb(224, 224, 224);
  border-radius: 16px;
  white-space: nowrap;
  width: fit-content;
`;

const PokemonProperty = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  user-select: none;
  white-space: nowrap;
`;
const PokemonEvolutionsView = styled.div`
  padding: 0 0 8px;
`;
const PokemonEvolutionTitle = styled.div`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  font-weight: 500;
  line-height: 48px;
  padding-left: 16px;
  width: 100%;
`;
const PokemonEvolutionBox = styled.div`
  border: 10px;
  box-sizing: border-box;
  display: block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  outline: none;
  font-size: 16px;
  font-weight: inherit;
  position: relative;
  color: rgba(0, 0, 0, 0.87);
  line-height: 16px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  background: none;
  
  
  &:hover{
    background-color: rgba(0,0,0,0.1);
    
  }
`;
const PokemonEvolutionImgTxt = styled.div`
  margin-left: 0px;
  padding: 20px 16px 20px 72px;
  position: relative;
`;
const PokemonEvolutionImage = styled.img`
  color: rgb(255, 255, 255);
  background-color: rgb(188, 188, 188);
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 8px;
  left: 16px;
`;
const PokemonNoSpriteIcon = styled.div`
height: 180px;
font-size: 100px;
color: rgb(49 21 21 / 40%); 
`;
export {
  PokemonView,
  PokemonTopView,
  PokemonTypeTopView,
  PokemonNameTopView,
  PokemonPropertiesView,
  PokemonPropertyBox,
  PokemonProperty,
  PokemonEvolutionsView,
  PokemonEvolutionTitle,
  PokemonEvolutionBox,
  PokemonEvolutionImgTxt,
  PokemonEvolutionImage,
  PokemonNoSpriteIcon
};
