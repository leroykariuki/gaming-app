import React, { useState } from "react";
import GameList from "./GameList";

const MyGames = ({ currentGames, upcomingGames }) => {
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

      <h3>Current Games</h3>
      <GameList games={currentGames} />

      <h3>Upcoming Games</h3>
      <GameList games={upcomingGames} />

      <button onClick={() => handleAddGame(currentGames[0])}>
        Add Current Game
      </button>
      <button onClick={() => handleAddGame(upcomingGames[0])}>
        Add Upcoming Game
      </button>
      {myGames.length > 0 && (
        <button onClick={() => handleRemoveGame(myGames[0].id)}>
          Remove First Game
        </button>
      )}
    </div>
  );
};

export default MyGames;
