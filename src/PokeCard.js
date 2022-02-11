import styled from "styled-components/macro";

const PokeCard = ({ pokemon }) => {
  return (
    <Wrapper>
      <Avatar src={pokemon.ThumbnailImage} alt={pokemon.ThumbnailAltText} />
      <Number>{pokemon.number}</Number>
      <Name>{pokemon.name}</Name>
      <Type>{pokemon.type.join(" ")}</Type>
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

const Name = styled.h2`
  margin-bottom: 8px;
`;

const Number = styled.p`
  margin-bottom: 8px;
  &::before {
    content: "#";
  }
`;

const Type = styled.p``;

export default PokeCard;
