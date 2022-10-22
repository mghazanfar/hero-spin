import { Box, CircularProgress, Paper } from "@material-ui/core";
import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { heroes } from "../../api/movies/heroes";
import { useMovieDetailsQuery } from "../../api/movies/query";
import { Content, PaperRoot, Root, TextContent } from "./styled.components";

export const MovieDetail = () => {
  const { id } = useParams();
  const randomMovie = useMemo(
    () => id || heroes[Math.floor(Math.random() * 10)],
    []
  );
  const { isLoading, data: movieDetails } = useMovieDetailsQuery(randomMovie);
  debugger;

  return (
    <Root>
      <PaperRoot elevation={16}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <h2>Movie Details</h2>
            <Content>
              <img
                src={movieDetails.data.Poster}
                alt={movieDetails.data.Title}
                height="100%"
              />
              <TextContent>
                {Object.keys(movieDetails.data).map((key) =>
                  key === "Poster" || key === "Ratings" ? null : (
                    <Box>
                      <b>{key}</b>
                      <p>{movieDetails.data[key]}</p>
                    </Box>
                  )
                )}
              </TextContent>
            </Content>
          </>
        )}
      </PaperRoot>
    </Root>
  );
};
