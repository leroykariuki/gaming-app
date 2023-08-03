import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CurrentGames from "./CurrentGames";
import UpcomingGames from "./UpcomingGames";
import MyGames from "./MyGames";
import SearchBar from "./SearchBar"

const App = () => {
  const [currentGames, setCurrentGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [searchTerm, setSearchTerm] =useState("")
  const [filteredCurrentGames, setFilteredCurrentGames] = useState([]);
  const [filteredUpcomingGames, setFilteredUpcomingGames] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/currentgames")
      .then((resp) => resp.json())
      .then((data) => setCurrentGames(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/upcominggames")
      .then((resp) => resp.json())
      .then((data) => setUpcomingGames(data));
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Current Games</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming Games</Link>
            </li>
            <li>
              <Link to="/my-games">My Games</Link>
            </li>
          </ul>
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<CurrentGames currentGames={currentGames} />} />
          <Route path="/upcoming" element={<UpcomingGames upcomingGames={upcomingGames} />} />
          <Route path="/my-games" element={<MyGames currentGames={currentGames} upcomingGames={upcomingGames} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
