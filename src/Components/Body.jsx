import React, { useState } from "react";
import Axios from "axios";
import BodyCss from "./Body.module.css";

const Body = () => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <>
      <div>
        <div className={BodyCss.input}>
          <input
            type="text"
            placeholder="Enter the Pokemon Name"
            onChange={handleChange}
          />

          <button>Search Pokemon</button>
        </div>

        <div className={BodyCss.content}>
          <p>{pokemonName}</p>
        </div>
      </div>
    </>
  );
};

export default Body;