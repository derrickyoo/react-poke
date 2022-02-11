import styled from "styled-components/macro";
import PokeType from "./PokeType";

const PokeCard = ({ pokemon }) => {
  return (
    <Wrapper>
      <Avatar src={pokemon.ThumbnailImage} alt={pokemon.ThumbnailAltText} />
      <Number>{pokemon.number}</Number>
      <Name>{pokemon.name}</Name>
      <TypeList>
        {pokemon.type.map((type, idx) => (
          <PokeType key={`${idx}-${type}`} type={type} />
        ))}
      </TypeList>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  min-width: 250px;
  border-radius: 24px;
  padding: 24px;
  background: var(--white);
  box-shadow: var(--shadow-elevation-medium);
  text-align: center;
`;

const Avatar = styled.img`
  background: var(--white);
  width: 128px;
  height: 128px;
  border: 1px solid var(--black);
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  margin-top: -64px;
`;

const Number = styled.p`
  margin-bottom: 8px;
  &::before {
    content: "#";
  }
`;

const Name = styled.h2`
  margin-bottom: 8px;
`;

const TypeList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  justify-content: center;
`;

export default PokeCard;
