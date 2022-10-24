import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "033d00d94f23b76cf4c59ad7bbba4602";

function MovieList() {
  const [movies, setMovies] = useState([]);
  // aaa
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        console.log('respuesta:', response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h4 >{movie.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
