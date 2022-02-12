import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import Pokedex from "./Pokedex";
import Details from "./Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <StyledLink to="/">React Pokédex</StyledLink>
        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

const StyledLink = styled(Link)`
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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
