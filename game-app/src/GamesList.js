import React from "react";

const GameList = ({ games }) => {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>{game.title}</div>
      ))}
    </div>
  );
};

export default GameList;
 