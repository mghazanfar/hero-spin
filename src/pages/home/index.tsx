import { Typography } from "@material-ui/core";
import { LinkButton } from "../../components/link-button";
import { Buttons, Description, TitleDescription } from "./styled.components";

export const Home = () => {
  return (
    <TitleDescription>
      <Typography variant="h3">Hero Spin</Typography>
      <Description>
        {`Sometimes, having too many options can be overwhelming. We’ve all been
        there. Restaurants with long menus, a piece of clothing in many
        different colors, and of course, a quiet evening in front of the TV, not
        knowing what to watch. Especially with the last one, sometimes it would
        be great if someone could make that call for us. And since most of us,
        are also playing with our phone, while in front of the TV (if not also
        controlling the TV), what could be better than an app, that randomly
        picks a show for you.`}
      </Description>
      <Buttons>
        <LinkButton to="/movie" variant="contained" fullWidth color="primary">
          Pick a movie
        </LinkButton>
        <LinkButton to="/spin" variant="contained" fullWidth color="primary">
          Select hero
        </LinkButton>
      </Buttons>
    </TitleDescription>
  );
};
