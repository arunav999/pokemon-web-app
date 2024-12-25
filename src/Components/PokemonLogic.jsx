import React, { useState } from "react";
import Axios from "axios";
import Header from "./Contents/Header";
import SearchBox from "./Contents/SearchBox";
import PokemonCard from "./Contents/PokemonCard";

const PokemonLogic = () => {
  const [state, setState] = useState({
    inputValue: "",
    isInvalid: false,
    pokeId: "",
    pokeDataId: "",
    pokeName: "",
    pokeDataName: "",
    image: "",
    type: "",
    species: "",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
    error: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const pattern = /^([a-zA-Z ]+|[0-9]+)$/;
    const setId = parseInt(value, 10);
    const setName = value.toLowerCase().replace(/\s/g, "");

    let errorMessage = "";

    if (!value) {
      errorMessage = "";
    } else if (/[^a-zA-Z0-9 ]/.test(value)) {
      errorMessage = "Special characters and symbols are not allowed.";
    } else if (!pattern.test(value)) {
      errorMessage = "Input should only be letters and numbers, not both.";
    } else if (setId > 1000) {
      errorMessage = "Number cannot be more than 1000";
    }

    setState((prevState) => ({
      ...prevState,
      inputValue: value,
      isInvalid: value !== "" && !pattern.test(value),
      pokeId: setId,
      pokeName: setName,
      error: errorMessage,
    }));
  };

  const handleKeyDownEscape = (event) => {
    if (event.key === "Escape") {
      setState((prevState) => ({
        ...prevState,
        inputValue: "",
        isInvalid: false,
      }));
      event.target.blur();
    }
  };

  const { pokeId, pokeName, isInvalid, error } = state;

  const searchPokemon = async () => {
    try {
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${
          (!isInvalid && pokeId) || pokeName
        }`
      );
      setState({
        inputValue: "",
        pokeDataId: response.data.id,
        pokeDataName: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        type: response.data.types[0].type.name,
        species: response.data.species.name,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        specialAttack: response.data.stats[3].base_stat,
        specialDefense: response.data.stats[4].base_stat,
        speed: response.data.stats[5].base_stat,
      });
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Pokemon not found. Please check the name and try again.");
      } else {
        alert("An unexpected error occured. Please try again later.");
      }
    }
  };

  const handleKeyDownEnter = (event) => {
    if (event.key === "Enter") {
      searchPokemon();
      event.target.blur();
    }
  };

  return (
    <>
      <Header />
      <SearchBox
        state={state}
        onChange={handleChange}
        onEscape={handleKeyDownEscape}
        onSearch={searchPokemon}
        disabled={isInvalid || error}
        onEnter={handleKeyDownEnter}
      />
      <PokemonCard state={state} />
    </>
  );
};

export default PokemonLogic;
