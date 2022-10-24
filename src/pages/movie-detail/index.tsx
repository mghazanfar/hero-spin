/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, IconButton, Slide } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { heroes } from "../../api/movies/heroes";
import { useMovieDetailsQuery } from "../../api/movies/query";
import { generateRandomNumberWithLimit } from "../../utils/generateRandomNumberWithLimit";
import {
  CardHeader,
  Content,
  ContentSkeleton,
  PaperHeader,
  PaperRoot,
  Poster,
  PosterSkeleton,
  Root,
  TextContent,
} from "./styled.components";

export const MovieDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const randomMovie = useMemo(
    () => id || heroes[generateRandomNumberWithLimit(11)],
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
      generateRandomNumberWithLimit(
        movieDetails.data.totalResults < 10
          ? movieDetails.data.totalResults
          : 10
      )
    ];

  const showSkeleton = isLoading || isRefetching;

  const handleSpin = () => {
    if (id) {
      navigate("/spin");
    } else {
      setSpin(heroes[Math.floor(Math.random() * 11)]);
    }
  };

  return (
    <Root>
      <PaperRoot elevation={16}>
        <>
          <PaperHeader>
            {!id && (
              <Link to={"/"}>
                <IconButton size="small">
                  <ChevronLeft />
                </IconButton>
              </Link>
            )}

            <CardHeader>Movie Details</CardHeader>

            <Button
              onClick={handleSpin}
              color="primary"
              variant="contained"
              disabled={showSkeleton}
              size="small"
            >
              {id ? "Back" : "Spin"}
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
              <ContentSkeleton>
                <Skeleton count={8} />
              </ContentSkeleton>
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
