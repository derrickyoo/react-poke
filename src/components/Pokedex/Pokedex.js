import Search from "../Search";
import Deck from "../Deck";
import { usePokemonList } from "../../lib/hooks";

const Pokedex = () => {
  const [pokemon] = usePokemonList();

  return (
    <main>
      {/* Section: Search */}
      <Search />

      {/* Section: Deck */}
      <Deck pokemon={pokemon}></Deck>
    </main>
  );
};

export default Pokedex;
