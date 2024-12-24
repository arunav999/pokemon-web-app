import React from "react";
import "./App.css";
import Header from "./Components/Header";
import PokemonList from "./Components/temp";
import SearchBox from "./Components/SearchBox";
import PokemonCard from "./Components/PokemonCard";

function App() {
  return (
    <>
      <Header />
      <SearchBox />
      <PokemonCard />
      {/* <PokemonList /> */}
    </>
  );
}

export default App;
