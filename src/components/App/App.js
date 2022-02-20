import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Details from "../Details";
import Pokedex from "../Pokedex";
import Footer from "../Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
