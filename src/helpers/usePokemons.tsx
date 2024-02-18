import  { useEffect, useState } from "react";

const usePokemons = (peticion: string | number) => {
  const [pokemons, setpokemons] = useState([]);

  const url =
    peticion == "pokemon?limit=100000&offset=0"
      ? "pokemon?limit=100000&offset=0"
      : `${peticion}`;
  useEffect(() => {
    if (peticion != "pokemon?limit=100000&offset=0") {
      fetch(`https://pokeapi.co/api/v2/${url}`)
        .then((data) => data.json())
        .then((data) => setpokemons(data.pokemon_species));
    } else {
      fetch(`https://pokeapi.co/api/v2/${url}`)
        .then((data) => data.json())
        .then((data) => setpokemons(data.results));
    }
  }, []);
  return pokemons;
};

export default usePokemons;
