import React, { useState } from "react";
import Header from "./Contents/Header";
import SearchBox from "./Contents/SearchBox";
import PokemonCard from "./Contents/PokemonCard";

const PokemonLogic = () => {
  const [state, setState] = useState({
    inputValue: "",
    isInvalid: false,
  });

  const handleChange = (event) => {
    const value = event.target.value.trim();
    const pattern = /^[A-Za-z0-9 ]+$/;

    setState({
      inputValue: value,
      isInvalid: value !== "" && !pattern.test(value),
    });
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
      <PokemonCard />
    </>
  );
};

export default PokemonLogic;
