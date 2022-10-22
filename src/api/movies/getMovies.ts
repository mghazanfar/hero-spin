import axios from "axios";

const baseUrl = "http://www.omdbapi.com/";

export const getMovies = (search: string) => {
  return axios.get(`${baseUrl}?t=${search}&apikey=fe38722f`);
};
