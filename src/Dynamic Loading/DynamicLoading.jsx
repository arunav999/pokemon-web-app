import React, { useState } from "react";
import Axios from "axios";

const DynamicLoading = () => {
  // const [pokemonName, setPokemonName] = useState("");
  // const [choosePokemon, setChoosePokemon] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    getName: "",
    input: false,
    name: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    specailAttack: "",
    specailDefense: "",
    speed: "",
    type: "",
  });
};

export default DynamicLoading;
