import { Box, Paper } from "@material-ui/core";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

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
  height: 75vh;
  width: 75vw;
`;

export const Content = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const PosterSkeleton = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  .react-loading-skeleton {
    @media (max-width: 768px) {
      line-height: 13 !important;
    }
    line-height: 25 !important;
  }
`;

export const TextContent = styled.div`
  height: 60vh;
  @media (max-width: 768px and min-width: 520px) {
    overflow-y: visible;
  }
  overflow-y: auto;
`;

export const Poster = styled.img`
  max-height: 90%;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const PaperHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #e4e4e4;
`;

export const CardHeader = styled.h2`
  flex: 1;
`;

export const ContentSkeleton = styled(Box)`
  width: 100%;
`;
