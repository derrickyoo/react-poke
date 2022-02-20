import Search from "../Search";
import Deck from "../Deck";
import { usePokemonList } from "../../lib/hooks";

const Pokedex = () => {
  const [pokemon] = usePokemonList();

  return (
    <>
      {/* Section: Search */}
      <Search />

      {/* Section: Deck */}
      <Deck pokemon={pokemon}></Deck>
    </>
  );
};

export default Pokedex;
