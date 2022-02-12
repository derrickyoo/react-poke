import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Search from "./Search";
import Deck from "./Deck";
import data from "./data.json";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setPokemon(data), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      {/* Section: Search */}
      <Search />

      {/* Section: Deck */}
      <Deck pokemon={pokemon}></Deck>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Pokedex;
