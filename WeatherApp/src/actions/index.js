// &APPID=043e4fb5c8659a36e4667ebcf25491b7
// &APPID=e71147246d1080f9a3704ce15bf99fb9
// &APPID=3dddc1a40ee4aa1c1ee3ee20d7c96d29
import Axios from 'axios';

const API_KEY = "3dddc1a40ee4aa1c1ee3ee20d7c96d29";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const REQUEST = Axios.get(URL);
  
  return {
    type: FETCH_WEATHER,
    payload: REQUEST
  };
}