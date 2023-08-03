import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { fetchGames } from "./api";

const App = () => {
  const [games, setGames] = useState({ currentGames: [], upcomingGames: [] });

  useEffect(() => {
    fetchGames().then((data) => setGames(data));
  }, []);
}