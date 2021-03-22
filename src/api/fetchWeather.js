import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd7ae7838bc0e27b7a7afeb345d8e12f0';

export const fetchWeather = async (query) => {
    const response = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    // console.log(response);
    return response;
}