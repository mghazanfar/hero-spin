import { Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import styled from "styled-components";
import { LinkButton } from "../link-button";

export const ListItemLink = styled(LinkButton)`
  width: 100% !important;
  padding: 0px !important;
`;

export const ListItemAvatar = styled(Avatar)`
  background-color: ${red[500]} !important;
`;
