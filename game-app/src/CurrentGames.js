import React from 'react';
import GameList from './GameList';

const CurrentGames = ({ currentGames, onAddGame }) => {
  return (
    <div>
      <h2>Current Games</h2>
      <GameList games={currentGames} onAddGame={onAddGame} />
    </div>
  );
};

export default CurrentGames;
