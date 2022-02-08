export const pokeData = [
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

const pokemon = pokeData[0];

const PokeLayout = () => {
  return (
    <div>
      <h1>Poke Layout!</h1>
      {/* Filter Field */}

      {/* Pokemon Card  */}
      <div>
        <img src={pokemon.ThumbnailImage} alt={pokemon.ThumbnailAltText} />
        <p>{`#${pokemon.id}`}</p>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.type.join(" ")}</p>
      </div>

      {/* Pokemon Cards */}
    </div>
  );
};

export default PokeLayout;
