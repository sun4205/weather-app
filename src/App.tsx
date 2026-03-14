import { useState } from "react";
import WeatherCard from "./components/weathercard";
import { useWeather } from "./hooks/useWeather";
import "./App.css";
import "./components/WeatherCard.css";

function App() {
  const [city, setCity] = useState("");
  const { weather, searchWeather } = useWeather();

  const handleSearch = () => {
    searchWeather(city);
  };

  return (
    <div id="app">
      <h1>Weather App</h1>

      <div className="search-container">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
