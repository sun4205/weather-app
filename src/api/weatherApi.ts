import type { weatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export async function fetchWeather(city: string): Promise<weatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
  );
  const data = await res.json();
  return data;
}
