import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>React Poke</h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
