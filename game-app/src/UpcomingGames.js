import React from "react";
import GameList from "./GameList";

const UpcomingGames = ({ upcomingGames }) => {
  return (
    <div>
      <h2>Upcoming Games</h2>
      <GameList games={upcomingGames} />
    </div>
  );
};

