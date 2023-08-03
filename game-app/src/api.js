import axios from "axios";

export const fetchGames = () => {
  return axios.get(" https://free-epic-games.p.rapidapi.com/free ").then((response) => response.data);
};

//