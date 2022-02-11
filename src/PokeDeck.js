import styled from "styled-components/macro";
import PokeCard from "./PokeCard";

const PokeDeck = ({ pokemon }) => {
  return (
    <Section>
      <h2>{`Gotta Catch 'Em All`}</h2>
      <Description>{`You teach me and I'll teach you Pokémon!`}</Description>
      <Box>
        {pokemon.map((pokemon) => (
          <PokeCard
            name={pokemon.name}
            number={pokemon.number}
            avatar={pokemon.ThumbnailImage}
            avatarAlt={pokemon.ThumbnailAltText}
            types={pokemon.type}
            key={pokemon.number}
          />
        ))}
      </Box>
    </Section>
  );
};

const Section = styled.section`
  padding: 24px;
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 24px;
`;

const Box = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 32px;
`;

export default PokeDeck;
