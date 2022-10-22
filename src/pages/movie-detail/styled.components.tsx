import { Box, Paper } from "@material-ui/core";
import styled from "styled-components";

export const Root = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaperRoot = styled(Paper)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  max-width: 75%;
`;

export const Content = styled.div`
  display: flex;
  gap: 24px;
`;

export const TextContent = styled.div`
  max-height: 60vh;
  overflow-y: auto;
`;

export const PaperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #e4e4e4;
`;
