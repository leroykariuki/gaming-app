import React from "react";
import GameList from "./GameList";

const CurrentGames = ({ currentGames }) => {
  return (
    <div>
      <h2>Current Games</h2>
      <GameList games={currentGames} />
    </div>
  );
};

export default CurrentGames;