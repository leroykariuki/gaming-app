import React from 'react';

const GameList = ({ games, onAddGame }) => {
  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <img
              src={game.url}
              alt={game.title}
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <button onClick={() => onAddGame(game)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
