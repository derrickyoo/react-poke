import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Brand>React Pokédex</Brand>
        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

const Brand = styled.h1`
  text-align: center;
`;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
