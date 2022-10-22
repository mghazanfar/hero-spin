import { Typography } from "@material-ui/core";
import { MovieListItem } from "../../components/movie-list-item";
import { TitleDescription } from "../home/styled.components";
import { MoviesList } from "./styled.components";

export const Spin = () => {
  return (
    <TitleDescription>
      <Typography color="secondary" variant="h3">
        Select Movie
      </Typography>
      <MoviesList>
        <MovieListItem
          img={
            "https://www.koimoi.com/wp-content/new-galleries/2022/02/the-batmans-early-reviews-released-early-the-robert-pattinson-starre-receives-nothing-but-praise-001.jpg"
          }
          name="Batman"
          year="2017"
          id={"5"}
        />
      </MoviesList>
    </TitleDescription>
  );
};
