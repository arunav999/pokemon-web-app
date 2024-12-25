import React from "react";
import PokeCard from "./PokemonCard.module.css";

const PokemonCard = ({ state }) => {
  const {
    pokeDataId,
    pokeDataName,
    image,
    type,
    species,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  } = state;

  return (
    <>
      <div className={PokeCard.mainContainer}>
        <div className={PokeCard.cardContainer}>
          <div className={PokeCard.card}>
            {/* CARD-FRONT */}
            <div className={PokeCard.cardFront}>
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
                  {/* <p>type 2</p> */}
                </div>
              </div>
            </div>

            {/* CARD-BACK */}
            <div className={PokeCard.cardBack}>
              <p>name: {pokeDataName}</p>
              <p>species: {species}</p>
              <p>hp: {hp}</p>
              <p>attack: {attack}</p>
              <p>defense: {defense}</p>
              <p>special attack: {specialAttack}</p>
              <p>special defense: {specialDefense}</p>
              <p>speed: {speed}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
