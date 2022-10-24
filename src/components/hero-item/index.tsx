import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MovieListItemInterface } from "./interface";
import { ListItemAvatar, ListItemLink } from "./styled.components";

export const HeroItem = ({ name }: MovieListItemInterface) => {
  return (
    <ListItemLink to={`/movie/${name}`} fullWidth>
      <ListItem divider>
        <ListItemIcon>
          <ListItemAvatar>{name[0]}</ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </ListItemLink>
  );
};
