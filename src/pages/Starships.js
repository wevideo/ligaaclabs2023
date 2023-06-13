import { useEffect, useState } from "react";

export const Starships = ({ id }) => {
  const [allStarships, setAllStarships] = useState([]);
  const [filteredShips, setFitlteredShips] = useState([]);

  useEffect(() => {
    const filtered = allStarships.filter(
      (element) =>
        element.films.filter((film) => film.includes(`films/${id.toString()}`))
          .length > 0
    );
    setFitlteredShips(filtered);
  }, [allStarships]);

  const handleOnClick = () => {
    const getStarships = async () => {
      const result = await fetch(
        "https://swapi.py4e.com/api/starships/?page=2"
      );
      const { results } = await result.json();
      setAllStarships((prev) => [...prev, ...results]);
      console.log(results);
    };

    getStarships();
  };

  useEffect(() => {
    const getStarships = async () => {
      const result = await fetch("https://swapi.py4e.com/api/starships");
      const { results } = await result.json();
      setAllStarships(results);
      console.log(results);
    };

    getStarships();
  }, []);

  return (
    <ul>
      {filteredShips.map((ship) => (
        <li key={ship.name}>{ship.name}</li>
      ))}
      <button onClick={handleOnClick}>Go to page 2</button>
    </ul>
  );
};
