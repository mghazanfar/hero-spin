import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { LinkButton } from "../link-button";
import { MovieListItemInterface } from "./interface";

export const HeroItem = ({ name }: MovieListItemInterface) => {
  return (
    <LinkButton
      to={`/movie/${name}`}
      style={{ padding: 0, width: "100%" }}
      fullWidth
    >
      <ListItem divider>
        <ListItemIcon>
          <Avatar style={{ backgroundColor: red[500] }}>{name[0]}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </LinkButton>
  );
};
