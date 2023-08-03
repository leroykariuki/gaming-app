import React from "react";
import GameList from "./GameList";

const CurrentGames = ({ currentgames }) => {
  return (
    <div>
      <h2>Current Games</h2>
      <GameList games={currentgames} />
    </div>
  );
};

export default CurrentGames;
