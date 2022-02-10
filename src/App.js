import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components/macro";

const App = () => {
  return (
    <Wrapper>
      <Title>React Poke</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: darkcyan;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
