import React from "react";
import Header from "./Contents/Header";
import SearchBox from "./Contents/SearchBox";
import PokemonCard from "./Contents/PokemonCard";

const PokemonLogic = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <PokemonCard />
    </>
  );
};

export default PokemonLogic;
