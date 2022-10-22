import { Typography } from "@material-ui/core";
import { MovieListItem } from "../../components/movie-list-item";
import { TitleDescription } from "../home/styled.components";

export const Spin = () => {
  return (
    <TitleDescription>
      <Typography color="secondary" variant="h3">
        Select Movie
      </Typography>
      <MovieListItem />
    </TitleDescription>
  );
};
