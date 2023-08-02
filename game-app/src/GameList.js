import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.post(
        'https://api.igdb.com/v4/games',
        'fields name, cover.url; limit 10;',
        {
          headers: {
            'Accept': 'application/json',
          },
        }
      );