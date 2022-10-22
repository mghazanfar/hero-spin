import axios from "axios";
import { apiKeyForIMDB, baseUrlForIMDB } from "../../env";

export const getMovies = (search: string) => {
  return axios.get(
    `${baseUrlForIMDB}?t=${search}&apikey=${apiKeyForIMDB}&plot=full`
  );
};
