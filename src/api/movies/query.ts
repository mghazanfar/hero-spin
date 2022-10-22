import { useQuery } from "react-query";
import { getMovies } from "./getMovies";

export const useMovieDetailsQuery = (search?: any) => {
  return useQuery<any, any>(search, () => getMovies(search), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
