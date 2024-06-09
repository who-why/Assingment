import React, { useEffect, useState } from 'react';
import './App.css';
import { CiSearch } from "react-icons/ci";
import Weather from './components/Weather/Weather';
import axios from 'axios';

const App = () => {
  const [item, setItem] = useState(null);
  const [city, setCity] = useState('mumbai');
  const [query, setQuery] = useState('');

  const fetchWeather = (city) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d7e97a559dd20dba2772391af3b61b3&units=metric`;
    axios.get(API_URL)
      .then(res => setItem(res.data))
      .catch(err => {
        console.log(err);
        alert('City not found');
      });
  };
   console.log(item)
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = () => {
    setCity(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='main'>
      <div className="card">
        
        <div className="head">
          <h1>Weather App</h1>
          <img src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-25.png" alt="Weather icon" />
        </div>

        <div className="search">
          <h4>Find Weather Of Your City</h4>
          <div className="search-input">
            <input 
              type="text" 
              placeholder='Enter city here...' 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="icon" onClick={handleSearch}>
              <CiSearch />
            </div>
          </div>
           
        </div>

      </div>

      {item && (
        <Weather
          name={item.name}
          feel_like={item.main.feels_like}
          humidity={item.main.humidity}
          pressure={item.main.pressure}
          speed={item.wind.speed}
          celcius={item.main.temp}
          item={item}
        />
      )}
    </div>
  );
};

export default App;
