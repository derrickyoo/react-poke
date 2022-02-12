import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import PokeSearch from "./PokeSearch";
import PokeDeck from "./PokeDeck";
import data from "./data.json";

const Layout = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setPokemon(data), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      {/* Section: PokeSearch */}
      <PokeSearch />

      {!pokemon.length ? (
        <LoadingText>No Pokémon Found</LoadingText>
      ) : (
        <PokeDeck pokemon={pokemon}></PokeDeck>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LoadingText = styled.h2`
  text-align: center;
`;

export default Layout;
