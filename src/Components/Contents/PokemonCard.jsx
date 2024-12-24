import React from "react";
import PokeCard from "./PokemonCard.module.css";

const PokemonCard = () => {
  return (
    <>
      <div className={PokeCard.container}>
        <div className={PokeCard.card}>
          <div className={PokeCard.imgContain}>
            <img src="" alt="" className={PokeCard.img} />
          </div>

          <div className={PokeCard.content}>
            <p>ID</p>
            <p>Pokemon Name</p>
            <div className={PokeCard.type}>
              <p>type 1</p>
              <p>type 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
