import React, { useState, useEffect } from "react";

const PokemonList = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemonNames = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      let nextUrl = url;
      const names = [];

      try {
        while (nextUrl) {
          const response = await fetch(nextUrl);
          const data = await response.json();

          // Extract names from the data
          data.results.forEach((pokemon) => {
            names.push(pokemon.name);
          });

          // Set the next URL for pagination
          nextUrl = data.next;
        }

        // Update state with all Pokémon names
        setPokemonNames(names);
        setLoading(false);
      } catch (error) {
        setError("Error fetching Pokémon data");
        setLoading(false);
      }
    };

    getPokemonNames();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
