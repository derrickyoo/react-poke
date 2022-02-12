import styled from "styled-components/macro";
import Card from "./Card";

const PokeDeck = ({ pokemon }) => {
  return (
    <Wrapper>
      {!pokemon.length ? (
        <Heading>Scouting for Pokémon</Heading>
      ) : (
        <>
          <Heading>{`Gotta Catch 'Em All`}</Heading>
          <Description>{`You teach me and I'll teach you Pokémon!`}</Description>
          <Cards>
            {pokemon.map((pokemon) => (
              <Card
                id={pokemon.id}
                name={pokemon.name}
                number={pokemon.number}
                avatar={pokemon.ThumbnailImage}
                avatarAlt={pokemon.ThumbnailAltText}
                types={pokemon.type}
                key={pokemon.number}
              />
            ))}
          </Cards>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
