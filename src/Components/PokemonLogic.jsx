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
    error: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const pattern = /^([a-zA-Z ]+|[0-9]+)$/;
    const setId = parseInt(event.target.value, 10);
    const setName = value.toLowerCase().replace(/\s/g, "");

    let errorMessage = "";

    if (!value) {
      errorMessage = "";
    } else if (/[^a-zA-Z0-9 ]/.test(value)) {
      errorMessage = "Special characters and symbols are not allowed.";
    } else if (!pattern.test(value)) {
      errorMessage = "Input should only be letters and numbers, not both.";
    }

    setState((prevState) => ({
      ...prevState,
      inputValue: value,
      isInvalid: value !== "" && !pattern.test(value),
      pokeId: setId,
      pokeName: setName,
      error: errorMessage,
    }));

    // setState({
    //   inputValue: value,
    //   isInvalid: value !== "" && !pattern.test(value),
    //   pokeId: setId,
    //   pokeName: setName,
    // });
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
