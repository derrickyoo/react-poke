import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";

import Layout from "./Layout";

const App = () => {
  return (
    <Fragment>
      <Layout />
      <GlobalStyles />
    </Fragment>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
