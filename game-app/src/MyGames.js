import React, { useState } from "react";
import GameList from "./GameList";

const MyGames = () => {
  const [myGames, setMyGames] = useState([]);

  const handleAddGame = (game) => {
    setMyGames([...myGames, game]);
  };
}