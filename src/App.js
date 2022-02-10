import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Title>React Poke</Title>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: darkcyan;
`;

const Title = styled.h1`
  text-align: center;
`;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
