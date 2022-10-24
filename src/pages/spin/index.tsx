import { Grow, IconButton, Typography } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { heroes } from "../../api/movies/heroes";
import { HeroItem } from "../../components/hero-item";
import { TitleDescription } from "../home/styled.components";
import { HeroesList } from "./styled.components";

export const Spin = () => {
  return (
    <TitleDescription>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <IconButton color="secondary">
            <ChevronLeft />
          </IconButton>
        </Link>
        <Typography color="secondary" variant="h5">
          Select Hero
        </Typography>
      </div>
      <Grow in={true} mountOnEnter unmountOnExit>
        <HeroesList>
          {heroes.map((hero: any) => (
            <HeroItem name={hero} />
          ))}
        </HeroesList>
      </Grow>
    </TitleDescription>
  );
};
