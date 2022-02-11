import styled from "styled-components/macro";
import PokeCard from "./PokeCard";

const PokeDeck = ({ pokemon }) => {
  return (
    <Section>
      <Heading>{`Gotta Catch 'Em All`}</Heading>
      <Description>{`You teach me and I'll teach you Pokémon!`}</Description>
      <Cards>
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
      </Cards>
    </Section>
  );
};

const Section = styled.section`
  padding: 24px;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 24px;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 32px;
`;

export default PokeDeck;
