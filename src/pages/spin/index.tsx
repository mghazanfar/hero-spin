import { Typography } from "@material-ui/core";
import { heroes } from "../../api/movies/heroes";
import { HeroItem } from "../../components/hero-item";
import { TitleDescription } from "../home/styled.components";
import { HeroesList } from "./styled.components";

export const Spin = () => {
  return (
    <TitleDescription>
      <Typography color="secondary" variant="h3">
        Select Movie
      </Typography>
      <HeroesList>
        {heroes.map((hero: any) => (
          <HeroItem name={hero} />
        ))}
      </HeroesList>
    </TitleDescription>
  );
};
