import styled from "styled-components/macro";

const PokeCard = ({ pokemon }) => {
  return (
    <Wrapper>
      <Avatar src={pokemon.ThumbnailImage} alt={pokemon.ThumbnailAltText} />
      <Name>{pokemon.name}</Name>
      <Number>{pokemon.number}</Number>
      <Type>{pokemon.type.join(" ")}</Type>
    </Wrapper>
  );
};

const Wrapper = styled.article``;
const Avatar = styled.img``;
const Name = styled.h2``;
const Number = styled.p``;
const Type = styled.p``;

export default PokeCard;
