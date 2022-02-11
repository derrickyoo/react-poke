import { createRoot } from "react-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
