import { Button } from "@material-ui/core";
import { LinkButtonInterface } from "./interface";
import { StyledLink } from "./styled.component";

export const LinkButton = ({ children, to, ...props }: LinkButtonInterface) => {
  return (
    <StyledLink to={to}>
      <Button {...props}>{children}</Button>
    </StyledLink>
  );
};
