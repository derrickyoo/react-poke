import { useState } from "react";
import styled from "styled-components/macro";

const searchDesciption =
  "Search for a Pokémon by name or using its National Pokédex number.";

const PokeSearch = () => {
  const [pokemon, setPokemon] = useState("");

  return (
    <Wrapper>
      <Heading>Search</Heading>

      <Text>{searchDesciption}</Text>

      <SearchForm>
        <Label htmlFor="Pokémon">
          <TextInput
            type="text"
            value={pokemon}
            placeholder="Search by name or number"
            onChange={(e) => setPokemon(e.target.value)}
            onBlur={(e) => setPokemon(e.target.value)}
          />
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </SearchForm>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 24px;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

const SearchForm = styled.form`
  width: max-content;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 16px auto;
`;

const Label = styled.label``;

const TextInput = styled.input`
  width: 250px;
  border: 1px solid var(--black);
  padding: 4px 8px;
  border-radius: 2px;

  &:focus {
    outline: 3px auto var(--blue);
    outline-offset: 2px;
    border-color: transparent;
  }
`;

const SubmitButton = styled.button`
  display: block;
  border: none;
  border-radius: 2px;

  &:focus {
    background: var(--blue);
    outline: 3px auto var(--blue);
    outline-offset: 2px;
    color: var(--white);
  }
`;

export default PokeSearch;
