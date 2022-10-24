import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const getPosterPath = (posterPath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
}

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={getPosterPath(movie.poster_path)}
        alt={movie.original_title || movie.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.original_title || movie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.id}345
        </Typography>
        <p>First air date: {movie.first_air_date} </p>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
