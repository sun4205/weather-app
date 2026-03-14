import type { weatherData } from "../types/weather";

interface Props {
  weather: weatherData;
}

function WeatherCard({ weather }: Props) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>temperature:{weather.main.temp}°F</p>
      <p>weather:{weather.weather[0].main}</p>
      <p>humidity:{weather.main.humidity}%</p>
    </div>
  );
}
export default WeatherCard;
