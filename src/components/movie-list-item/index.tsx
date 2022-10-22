import { Avatar, Card, CardHeader, CardMedia } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { LinkButton } from "../link-button";
import { MovieListItemInterface } from "./interface";

export const MovieListItem = ({
  img,
  name,
  year,
  id,
}: MovieListItemInterface) => {
  return (
    <LinkButton to={`/movie/${id}`} style={{ padding: 0 }}>
      <Card
        elevation={11}
        style={{ border: "1px solid white", borderRadius: 8 }}
      >
        <CardHeader
          avatar={
            <Avatar style={{ backgroundColor: red[500] }}>{name[0]}</Avatar>
          }
          title={name}
          subheader={year}
          titleTypographyProps={{ align: "left" }}
          subheaderTypographyProps={{ align: "left" }}
        />
        <CardMedia component="img" height="194" image={img} alt={name} />
      </Card>
    </LinkButton>
  );
};
