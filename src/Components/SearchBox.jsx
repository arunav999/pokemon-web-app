import React, { useState } from "react";
import Axios from "axios";
import BodyCss from "./Body.module.css";

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
  return(
    <>
    
    </>
  );
}

export default SearchBox;
