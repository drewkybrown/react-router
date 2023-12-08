import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StarshipsList = (props) => {
  const [ships, setShips] = useState([]);

  // Function to fetch starship data from the API
  const fetchShips = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/starships/");
      const shipData = await response.json();
      setShips(shipData.results); // Update state with fetched data
    } catch (err) {
      console.log(err); // Log errors, consider displaying them to users
    }
  };

  // Fetch starship data on component mount
  useEffect(() => {
    fetchShips();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="starships-list">
      {ships.map((ship) => {
        const { name, url } = ship;
        const path = url.split("/");
        const id = path[path.length - 2]; // Extract ID from URL

        // Render a list of links to individual starship pages
        return (
          <Link to={`/ships/${id}`} key={id}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default StarshipsList;
