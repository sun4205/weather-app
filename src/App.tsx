import { useState } from "react";
import WeatherCard from "./components/weathercard";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");
  const { weather, searchWeather } = useWeather();

  const handleSearch = () => {
    searchWeather(city);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <button onClick={handleSearch}>Search</button>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
