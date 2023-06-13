import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Starships } from "./Starships";

export const Episode = () => {
  const [movie, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      const result = await fetch(`https://swapi.py4e.com/api/films/${id}`);
      const data = await result.json();
      console.log(data);
      setMovie(data);
    };

    getMovieById();
  }, []);

  return (
    <div>
      <h1>{movie?.title}</h1>
      <h2>Directed by: {movie?.director}</h2>
      <h2>Produced by: {movie?.producer}</h2>
      <Starships id={id} />
    </div>
  );
};
