import React from "react";

const GameList = ({ games }) => {
  if (!games || games.length === 0) {
    return <div>No games available.</div>;
  }

  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
          <img
            src={game.url}
            alt={game.title}
            style={{ maxWidth: "200px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default GameList;
