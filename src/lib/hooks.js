import { useState, useEffect } from "react";
import pokemonData from "../data.json";

let localCache = [];

export function usePokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [status, setStatus] = useState("no pokémon found");

  useEffect(() => {
    if (localCache.length) {
      setPokemonList(localCache);
    } else {
      requestPokemonList();
    }

    function requestPokemonList() {
      setPokemonList([]);
      setStatus("scouting for pokémon");
      localCache = new Array(...pokemonData) || [];
      setPokemonList(localCache);
      setStatus("pokémon found");
    }
  }, []);

  return [pokemonList, status];
}
