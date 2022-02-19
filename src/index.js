import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from "./components/App";
import GlobalStyles from "./GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
);
