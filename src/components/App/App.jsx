import "./App.css";

import { Routes, Route } from "react-router-dom";

import Main from "../../pages/Main/Main.jsx";
import StarshipsList from "../../pages/StarShipsList/StarShipsList.jsx";
import Starship from "../../pages/Starship/Starship.jsx";

function App() {
  // The Routes component is a wrapper for all of the Route components
  // which allows us to create individual routes for each page by using the Route component
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
