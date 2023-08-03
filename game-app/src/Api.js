import axios from "axios";

export const fetchGames = () => {
  return axios.get("/db.json").then((response) => response.data);
};
