import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components/macro";
import Pokedex from "../Pokedex";
import Details from "../Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouterLink to="/">React Pokédex</RouterLink>
        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const RouterLink = styled(Link)`
  display: block;
  color: var(--black);
  text-align: center;
  text-decoration: none;
  font-family: var(--heading-font);
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    color: currentColor;
    text-decoration: none;
  }
`;

export default App;
