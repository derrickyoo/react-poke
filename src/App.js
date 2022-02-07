import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";
import PokeLayout from "./PokeLayout";

const App = () => {
  return (
    <Fragment>
      <PokeLayout />
      <GlobalStyles />
    </Fragment>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
