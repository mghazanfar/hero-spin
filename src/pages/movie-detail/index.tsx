/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, IconButton, Slide } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { heroes } from "../../api/movies/heroes";
import { useMovieDetailsQuery } from "../../api/movies/query";
import {
  Content,
  PaperHeader,
  PaperRoot,
  Poster,
  PosterSkeleton,
  Root,
  TextContent,
} from "./styled.components";

export const MovieDetail = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const randomMovie = useMemo(
    () => id || heroes[Math.floor(Math.random() * 13)],
    []
  );
  const [spin, setSpin] = useState(randomMovie);
  const {
    isLoading,
    data: movieDetails,
    isRefetching,
  } = useMovieDetailsQuery(spin);
  const movieToShow =
    movieDetails &&
    movieDetails.data.Search[
      Math.floor(
        Math.random() *
          (movieDetails.data.totalResults < 10
            ? movieDetails.data.totalResults
            : 10)
      )
    ];

  const showSkeleton = isLoading || isRefetching;
  debugger;
  return (
    <Root>
      <PaperRoot elevation={16}>
        <>
          <PaperHeader>
            {!id && (
              <Link to="/">
                <IconButton size="small">
                  <ChevronLeft />
                </IconButton>
              </Link>
            )}
            <h2 style={{ flex: 1 }}>Movie Details</h2>
            {
              <Button
                onClick={() =>
                  id
                    ? navigate("/spin")
                    : setSpin(heroes[Math.floor(Math.random() * 13)])
                }
                color="primary"
                variant="contained"
                disabled={showSkeleton}
                size="small"
              >
                {id ? "Go back" : "Spin"}
              </Button>
            }
          </PaperHeader>
          <Content>
            {showSkeleton ? (
              <PosterSkeleton>
                <Skeleton />
              </PosterSkeleton>
            ) : (
              <Slide
                direction="right"
                in={!showSkeleton}
                mountOnEnter
                unmountOnExit
              >
                <Poster src={movieToShow.Poster} alt={movieToShow.Title} />
              </Slide>
            )}
            {showSkeleton ? (
              <div style={{ width: "100%" }}>
                <Skeleton count={8} />
              </div>
            ) : (
              <Slide
                direction="up"
                in={!showSkeleton}
                mountOnEnter
                unmountOnExit
              >
                <TextContent>
                  {Object.keys(movieToShow).map((key) =>
                    key === "Poster" || key === "Ratings" ? null : (
                      <Box>
                        <b>{key}</b>
                        <p>{movieToShow[key]}</p>
                      </Box>
                    )
                  )}
                </TextContent>
              </Slide>
            )}
          </Content>
        </>
      </PaperRoot>
    </Root>
  );
};
