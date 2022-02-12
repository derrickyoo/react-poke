import styled from "styled-components/macro";

const PokeType = ({ type }) => {
  return <ListItem>{type}</ListItem>;
};

const ListItem = styled.li`
  list-style-type: none;
  padding: 4px 8px;
  text-transform: capitalize;
  border: 1px solid var(--black);
  border-radius: 8px;
`;

export default PokeType;
