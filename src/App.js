import react, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './index.css';
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      // console.log(data.data);
      setWeather(data.data);
      // setQuery('');
    }
  }

  // console.log(weather);
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather && (
        <div className="city">
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.floor(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <p>{weather.weather[0].description}</p>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
