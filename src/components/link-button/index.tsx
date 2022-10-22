import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LinkButtonInterface } from "./interface";

export const LinkButton = ({ children, to, ...props }: LinkButtonInterface) => {
  return (
    <Link to={to}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};
