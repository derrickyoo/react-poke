import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Type from "./Type";

const Card = ({ avatar, avatarAlt, number, name, types }) => {
  return (
    <RouterLink to={`/details/${+number}`}>
      <Wrapper>
        <Avatar src={avatar} alt={avatarAlt} />
        <Number>{number}</Number>
        <Name>{name}</Name>
        <Types>
          {types.map((type, idx) => (
            <Type key={`${idx}-${type}`} type={type} />
          ))}
        </Types>
      </Wrapper>
    </RouterLink>
  );
};

const RouterLink = styled(Link)`
  text-decoration: none;
  color: var(--black);

  &:focus {
    outline: 3px auto var(--blue);
    outline-offset: 8px;
    border-radius: 24px;
    border-color: transparent;
  }
`;

const Wrapper = styled.article`
  min-width: 250px;
  border-radius: 24px;
  padding: 24px;
  background: var(--white);
  box-shadow: var(--shadow-elevation-medium);
  text-align: center;
  transition: transform 250ms, box-shadow 400ms;

  &:hover {
    transform: scale(1);
    box-shadow: var(--shadow-elevation-high);
  }

  ${RouterLink}:focus & {
    transform: scale(1);
    box-shadow: var(--shadow-elevation-high);
  }
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

const Types = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  justify-content: center;
`;

export default Card;
