import React, { useState } from "react";
import GameList from "./GameList";

const MyGames = () => {
  const [myGames, setMyGames] = useState([]);

  const handleAddGame = (game) => {
    setMyGames([...myGames, game]);
  };

  const handleRemoveGame = (gameId) => {
    setMyGames(myGames.filter((game) => game.id !== gameId));
  };

  return (
    <div>
      <h2>My Games</h2>
      <GameList games={myGames} />
    </div>
  );
};

export default MyGames;