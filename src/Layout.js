import styled from "styled-components/macro";
import PokeSearch from "./PokeSearch";
import PokeDeck from "./PokeDeck";

const POKE_DATA = [
  {
    abilities: ["Overgrow"],
    weight: 15.2,
    weakness: ["Fire", "Psychic", "Flying", "Ice"],
    number: "001",
    height: 28.0,
    collectibles_slug: "bulbasaur",
    featured: "true",
    slug: "bulbasaur",
    name: "Bulbasaur",
    ThumbnailAltText: "Bulbasaur",
    ThumbnailImage:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    id: 1,
    type: ["grass", "poison"],
  },
  {
    abilities: ["Overgrow"],
    weight: 28.7,
    weakness: ["Fire", "Psychic", "Flying", "Ice"],
    number: "002",
    height: 39.0,
    collectibles_slug: "ivysaur",
    featured: "true",
    slug: "ivysaur",
    name: "Ivysaur",
    ThumbnailAltText: "Ivysaur",
    ThumbnailImage:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
    id: 2,
    type: ["grass", "poison"],
  },
  {
    abilities: ["Overgrow"],
    weight: 9999.0,
    weakness: ["Fire", "Psychic", "Flying", "Ice"],
    number: "003",
    height: 945.0,
    collectibles_slug: "venusaur",
    featured: "true",
    slug: "venusaur",
    name: "Venusaur",
    ThumbnailAltText: "Venusaur",
    ThumbnailImage:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
    id: 3,
    type: ["grass", "poison"],
  },
];

const Layout = () => {
  return (
    <Wrapper>
      {/* Section: PokeSearch */}
      <PokeSearch />

      {/* Section: PokeDeck */}
      <PokeDeck pokemon={POKE_DATA}></PokeDeck>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Layout;
