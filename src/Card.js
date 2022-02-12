import styled from "styled-components/macro";
import Type from "./Type";

const Card = ({ avatar, avatarAlt, number, name, types }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt={avatarAlt} />
      <Number>{number}</Number>
      <Name>{name}</Name>
      <TypeList>
        {types.map((type, idx) => (
          <Type key={`${idx}-${type}`} type={type} />
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

export default Card;
