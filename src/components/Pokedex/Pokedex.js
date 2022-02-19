import styled from "styled-components/macro";
import Search from "../Search";
import Deck from "../Deck";
import usePokemonList from "../../usePokemonList";

const Pokedex = () => {
  const [pokemon] = usePokemonList();

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
