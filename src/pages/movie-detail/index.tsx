/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, CircularProgress } from "@material-ui/core";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { heroes } from "../../api/movies/heroes";
import { useMovieDetailsQuery } from "../../api/movies/query";
import {
  Content,
  PaperHeader,
  PaperRoot,
  Root,
  TextContent,
} from "./styled.components";

export const MovieDetail = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const randomMovie = useMemo(
    () => id || heroes[Math.floor(Math.random() * 10)],
    []
  );
  const [spin, setSpin] = useState(randomMovie);
  const { isLoading, data: movieDetails } = useMovieDetailsQuery(spin);

  return (
    <Root>
      <PaperRoot elevation={16}>
        <>
          <PaperHeader>
            <h2>Movie Details</h2>
            <Button
              onClick={() =>
                id
                  ? navigate("/spin")
                  : setSpin(heroes[Math.floor(Math.random() * 10)])
              }
              color="primary"
              variant="contained"
              disabled={isLoading}
            >
              {id ? "Go back" : "Spin again"}{" "}
              {isLoading && <CircularProgress />}
            </Button>
          </PaperHeader>
          {!isLoading && (
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
          )}
        </>
      </PaperRoot>
    </Root>
  );
};
