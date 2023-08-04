import React from 'react';
import './App.css'; // Import the App.css to apply the styles

const MyGames = ({ currentGames, upcomingGames, myGames }) => {
  const getGameById = (id) => {
    const allGames = [...currentGames, ...upcomingGames];
    return allGames.find((game) => game.id === id);
  };

  return (
    <div className="my-games-container">
      <h2 className="my-games-title">My Games</h2>
      <ul className="my-games-list"> {/* Update class name here */}
        {myGames.map((gameId) => {
          const game = getGameById(gameId);
          return (
            <li key={gameId}>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <img
                src={game.url}
                alt={game.title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyGames;
