import React, { useState } from "react";
import Header from "./Contents/Header";
import SearchBox from "./Contents/SearchBox";
import PokemonCard from "./Contents/PokemonCard";

const PokemonLogic = () => {
  const [state, setState] = useState({
    inputValue: "",
    isInvalid: false,
    pokeId: "",
    pokeName: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const pattern = /^[A-Za-z0-9 ]+$/;
    const setId = parseInt(event.target.value);
    const setName = event.target.value.toLowerCase().replace(/\s/g, "");

    setState({
      inputValue: value,
      isInvalid: value !== "" && !pattern.test(value),
      pokeId: setId,
      pokeName: setName,
    });

    console.log(typeof setId);
  };

  const handleKeyDownEscape = (event) => {
    if (event.key === "Escape") {
      setState({
        inputValue: "",
        isInvalid: false,
      });
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
      />
      <PokemonCard state={state} />
    </>
  );
};

export default PokemonLogic;
