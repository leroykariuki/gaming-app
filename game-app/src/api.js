import axios from 'axios';

const API_KEY = '6cc1915044msh6218209cddf5742p12d9abjsn82be4449be94'; 
const API_URL = 'https://free-epic-games.p.rapidapi.com/free'; 

export const fetchGames = async () => {
  try {
    const response = await axios.get(`${API_URL}/games`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    const { current, upcoming } = response.data;
    return { current, upcoming };
  } catch (error) {
    console.error('Error fetching games:', error);
    return { current: [], upcoming: [] };
  }
};
