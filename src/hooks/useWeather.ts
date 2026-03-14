import { useState } from "react";
import { fetchWeather } from "../api/weatherApi";
import type { weatherData } from "../types/weather";

export function useWeather() {
  const [weather, setWeather] = useState<weatherData | null>(null);

  const searchWeather = async (city: string) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };
  return { weather, searchWeather };
}
