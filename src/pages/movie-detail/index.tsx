/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, IconButton, Slide } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { heroes } from "../../api/movies/heroes";
import { useMovieDetailsQuery } from "../../api/movies/query";
import { generateRandomNumberWithLimit } from "../../utils/generateRandomNumberWithLimit";
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

  const randomMovie = useMemo(
    () => id || heroes[generateRandomNumberWithLimit(11)],
    []
  );

  const [randomNumber, setRandomNumber] = useState(0);

  const [spin, setSpin] = useState(randomMovie);

  const {
    isLoading,
    data: movieDetails,
    isRefetching,
  } = useMovieDetailsQuery(spin);

  const movieToShow =
    movieDetails &&
    movieDetails.data.Search[
      generateRandomNumberWithLimit(
        movieDetails.data.totalResults < 10
          ? movieDetails.data.totalResults
          : 10
      )
    ];

  const [movie, setMovie] = useState(movieToShow);

  const showSkeleton = isLoading || isRefetching;

  useEffect(() => {
    setMovie(movieToShow);
  }, [movieDetails, movieToShow]);

  debugger;
  return (
    <Root>
      <PaperRoot elevation={16}>
        <>
          <PaperHeader>
            <Link to={id ? "/spin" : "/"}>
              <IconButton size="small">
                <ChevronLeft />
              </IconButton>
            </Link>

            <h2 style={{ flex: 1 }}>Movie Details</h2>

            <Button
              onClick={() => {
                if (id) {
                  let randomSelection = generateRandomNumberWithLimit(
                    movieDetails.data.totalResults < 10
                      ? movieDetails.data.totalResults
                      : 10
                  );
                  randomSelection =
                    randomNumber === randomSelection
                      ? randomSelection < 10
                        ? randomSelection + 1
                        : randomSelection === 0
                        ? 1
                        : randomSelection - 1
                      : randomSelection;
                  setRandomNumber(randomSelection);
                  setMovie(movieDetails.data.Search[randomSelection]);
                } else {
                  setSpin(heroes[generateRandomNumberWithLimit(11)]);
                }
              }}
              color="primary"
              variant="contained"
              disabled={showSkeleton}
              size="small"
            >
              {"Spin"}
            </Button>
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
                  {Object.keys(id ? movie || movieToShow : movieToShow).map(
                    (key) =>
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
