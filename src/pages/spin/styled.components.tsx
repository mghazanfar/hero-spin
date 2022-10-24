import { List } from "@material-ui/core";
import styled from "styled-components";

export const HeroesList = styled(List)`
  margin-top: 2rem !important;
  background-color: white;
  max-height: 65vh;
  overflow-y: auto;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;
