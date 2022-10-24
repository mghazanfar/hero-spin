import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

export const Root = styled(Box)`
  width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-image: url(https://cdn.mos.cms.futurecdn.net/57ePHqdr6naXcn8zk8qf7g.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Gradient = styled(Box)`
  background-image: linear-gradient(
    rgb(252 6 179 / 74%),
    rgb(255 7 0 / 72%),
    rgb(0 0 0 / 92%)
  );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
`;

export const TitleDescription = styled(Box)`
  padding: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 80%;
`;

export const Description = styled(Typography)`
  margin-top: 1rem !important;
`;

export const Buttons = styled(Box)`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  height: 12vh;
  justify-content: space-between;
`;
