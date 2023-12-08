import "./App.css";

import { Routes, Route } from "react-router-dom";

import Main from "../../pages/Main/Main.jsx";
import StarshipsList from "../../pages/StarShipsList/StarShipsList.jsx";
import Starship from "../../pages/Starship/Starship.jsx";
import Nav from "../Nav/Nav.jsx";

function App() {
  // The Routes component is a wrapper for all of the Route components
  // which allows us to create individual routes for each page by using the Route component
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ships" element={<StarshipsList />} />
          <Route path="/ships/:id" element={<Starship />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
