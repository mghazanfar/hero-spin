import axios from "axios";
import { apiKeyForIMDB, baseUrlForIMDB } from "../../env";

export const getMovies = (search: string) => {
  return axios.get(
    `${baseUrlForIMDB}?s=${search}&apikey=${apiKeyForIMDB}&plot=full`
  );
};
