import React from "react";
import PokeCard from "./PokemonCard.module.css";

const PokemonCard = ({ state }) => {
  const { pokeDataId, pokeDataName, image, type } = state;

  return (
    <>
      <div className={PokeCard.container}>
        <div className={PokeCard.card}>
          <div className={PokeCard.imgContain}>
            <img
              src={image}
              alt={`${pokeDataName} logo`}
              className={PokeCard.img}
            />
          </div>

          <div className={PokeCard.content}>
            <p>{`#${String(pokeDataId || "").padStart(4, "0")}`}</p>
            <p>{pokeDataName}</p>
            <div className={PokeCard.type}>
              <p>{type}</p>
              <p>type 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
