import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/movies/getMovies";
import { heroes } from "../../api/movies/heroes";
import { MovieListItem } from "../../components/movie-list-item";
import { TitleDescription } from "../home/styled.components";
import { MoviesList } from "./styled.components";

export const Spin = () => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 10);
    getMovies(heroes[randomNumber].toLowerCase()).then((res) => {
      setMovies([res.data]);
    });
  }, []);
  return (
    <TitleDescription>
      <Typography color="secondary" variant="h3">
        Select Movie
      </Typography>
      <MoviesList>
        {movies.map(({ Title, Released, imdbID, imdbRating, Poster }: any) => (
          <MovieListItem
            img={Poster}
            name={Title}
            year={Released}
            id={imdbID}
            rating={imdbRating}
          />
        ))}
      </MoviesList>
    </TitleDescription>
  );
};
