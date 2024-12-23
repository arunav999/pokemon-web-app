import React, { useState } from "react";
import Axios from "axios";
import SearchBoxCss from "./SearchBox.module.css";

// const Body = () => {
//   const [pokemonName, setPokemonName] = useState("");
//   const [choosePokemon, setChoosePokemon] = useState(false);
//   const [pokemonData, setPokemonData] = useState({
//     name: "",
//     species: "",
//     image: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     specailAttack: "",
//     specailDefense: "",
//     speed: "",
//     type: "",
//   });

//   const handleChange = (e) => {
//     const setValue = e.target.value.toLowerCase().replace(/\s/g, "");
//     setPokemonName(setValue);
//   };

//   const searchPokemon = async () => {
//     try {
//       const response = await Axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//       );
//       setPokemonData({
//         name: pokemonName,
//         species: response.data.species.name,
//         image: response.data.sprites.other.dream_world.front_default,
//         hp: response.data.stats[0].base_stat,
//         attack: response.data.stats[1].base_stat,
//         defense: response.data.stats[2].base_stat,
//         specailAttack: response.data.stats[3].base_stat,
//         specailDefense: response.data.stats[4].base_stat,
//         speed: response.data.stats[5].base_stat,
//         type: response.data.types[0].type.name,
//       });
//       setChoosePokemon(true);
//       console.log(response);
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         alert("Pokémon not found. Please check the name and try again.");
//       } else {
//         alert("An unexpected error occurred. Please try again later.");
//       }
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className={BodyCss.input}>
//           <input
//             type="text"
//             placeholder="Enter the Pokemon Name"
//             onChange={handleChange}
//           />

//           <button onClick={searchPokemon}>Search Pokemon</button>
//         </div>

//         <div className={BodyCss.content}>
//           {!choosePokemon ? (
//             <h2>Choose a Pokemon</h2>
//           ) : (
//             <>
//               <h2>{pokemonData.name}</h2>
//               <img src={pokemonData.image} alt={`${pokemonData.name} logo`} />
//               <p>HP: {pokemonData.hp}</p>
//               <p>Attack: {pokemonData.attack}</p>
//               <p>Defence: {pokemonData.defense}</p>
//               <p>Special Attack: {pokemonData.specailAttack}</p>
//               <p>Special Defence: {pokemonData.specailDefense}</p>
//               <p>Speed: {pokemonData.speed}</p>
//               <p>Type: {pokemonData.type}</p>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

const SearchBox = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value.trim();
    const pattern = /^[A-Za-z0-9 ]+$/;

    if (value === "") {
      setIsInvalid(false);
    } else if (!pattern.test(event.target.value)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }

    setInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsInvalid(false);
      setInputValue("");
      event.target.blur();
    }
  };

  return (
    <>
      <div className={SearchBoxCss.body}>
        <div
          className={`${SearchBoxCss.search} ${
            isInvalid ? SearchBoxCss.invalid : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={SearchBoxCss.icon}
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <div className={SearchBoxCss.inputGroup}>
            <input
              type="text"
              value={inputValue}
              className={SearchBoxCss.input}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <label className={SearchBoxCss.label}>Enter Pokemon Name</label>
          </div>

          <button className={SearchBoxCss}>Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
