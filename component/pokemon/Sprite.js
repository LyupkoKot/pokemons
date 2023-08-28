import React, { useState } from "react";
import { PokemonNoSpriteIcon } from "../../styles/pokemons/pokemonView";

const Sprite = ({ src, alt, ...rest }) => {
  const [spriteError, setSpriteError] = useState(false);
  const handleSpriteError = () => {
    setSpriteError(true);
  };
  return (
    <>
      {spriteError ? (
        <PokemonNoSpriteIcon>
          <i className="fa fa-question-circle"></i>
        </PokemonNoSpriteIcon>
      ) : (
        <img src={src} alt={alt} onError={handleSpriteError} {...rest} />
      )}
    </>
  );
};

export default Sprite;
