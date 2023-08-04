import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CurrentGames from "./CurrentGames";
import UpcomingGames from "./UpcomingGames";
import MyGames from "./MyGames";
import SearchBar from "./SearchBar";
import Home from "./Home";
import './App.css';

const App = () => {
  const [currentGames, setCurrentGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCurrentGames, setFilteredCurrentGames] = useState([]);
  const [filteredUpcomingGames, setFilteredUpcomingGames] = useState([]);
  const [myGames, setMyGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/currentgames")
      .then((resp) => resp.json())
      .then((data) => {
        setCurrentGames(data);
        setFilteredCurrentGames(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/upcominggames")
      .then((resp) => resp.json())
      .then((data) => {
        setUpcomingGames(data);
        setFilteredUpcomingGames(data);
      });
  }, []);

  const handleSearchButtonClick = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filteredCurrent = currentGames.filter((game) =>
      game.title.toLowerCase().includes(searchTermLowerCase)
    );
    const filteredUpcoming = upcomingGames.filter((game) =>
      game.title.toLowerCase().includes(searchTermLowerCase)
    );

    setFilteredCurrentGames(filteredCurrent);
    setFilteredUpcomingGames(filteredUpcoming);
  };

  const handleAddGame = (game) => {
    setMyGames([...myGames, game.id]);
  };

  return (
    <Router>
      <div>
        <header>
          <h1>Gaming App</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/current">Current Games</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming Games</Link>
            </li>
            <li>
              <Link to="/my-games">My Games</Link>
            </li>
          </ul>
          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            onSearchButtonClick={handleSearchButtonClick}
          />
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/current" element={<CurrentGames currentGames={filteredCurrentGames} onAddGame={handleAddGame} />} />
            <Route path="/upcoming" element={<UpcomingGames upcomingGames={filteredUpcomingGames} onAddGame={handleAddGame} />} />
            <Route
              path="/my-games"
              element={<MyGames currentGames={currentGames} upcomingGames={upcomingGames} myGames={myGames} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
