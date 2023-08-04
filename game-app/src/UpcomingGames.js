import React from 'react';
import GameList from './GameList';

const UpcomingGames = ({ upcomingGames, onAddGame }) => {
  return (
    <div>
      <h2>Upcoming Games</h2>
      <GameList games={upcomingGames} onAddGame={onAddGame} />
    </div>
  );
};

export default UpcomingGames;
