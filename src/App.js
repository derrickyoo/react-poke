import { createRoot } from "react-dom";
import GlobalStyles from "./GlobalStyles";
import PokeLayout from "./PokeLayout";

const App = () => {
  return (
    <>
      <PokeLayout />
      <GlobalStyles />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
