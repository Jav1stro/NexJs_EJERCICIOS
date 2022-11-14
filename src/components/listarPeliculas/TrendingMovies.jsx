import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const API_KEY = "033d00d94f23b76cf4c59ad7bbba4602";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  // aaa
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((response) => {
        console.log("trending:", response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box
      sx={{
        marginTop:'30px',
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        justifyContent: "center",
        flexWrap:'wrap'
      }}
    >
      {movies.map((movie, index) => {
        return <MovieCard movie={movie} key={index} />;
      })}
    </Box>
  );
}

export default TrendingMovies;
