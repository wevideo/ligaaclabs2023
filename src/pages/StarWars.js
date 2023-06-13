import { useEffect, useState } from "react";
import "./StarWars.css";

export const StarWars = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const response = await fetch("https://swapi.py4e.com/api/films/");
      const { results: films } = await response.json();
      setMovies(films);
      console.log(films);
    };

    getFilms();
  }, []);

  return (
    <div className="Wrapper">
      {movies.map((movie) => (
        <a
          href={`/episode/${movie.episode_id}`}
          className="Card"
          key={movie.episode_id}
        >
          {movie.title}
        </a>
      ))}
    </div>
  );
};
