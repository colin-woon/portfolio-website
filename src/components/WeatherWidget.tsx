import { useState, useEffect } from 'react';

interface Forecast {
  date: string;
  summary_forecast: string;
  min_temp: number;
  max_temp: number;
}

interface CachedData {
  timestamp: number;
  data: Forecast[];
}

const translations: { [key: string]: string } = {
  "Tiada hujan": "No rain",
  "Ribut petir": "Thunderstorm",
  "Hujan": "Rain",
  "Hujan lebat": "Heavy rain",
  "Ribut petir di beberapa tempat": "Thunderstorms",
};

const WeatherWidget = () => {
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const cacheKey = 'weatherCache';
      const cacheDuration = 10 * 60 * 1000; // 10 minutes

      try {
        const cachedItem = localStorage.getItem(cacheKey);
        if (cachedItem) {
          const { timestamp, data }: CachedData = JSON.parse(cachedItem);
          if (Date.now() - timestamp < cacheDuration) {
            const todayISO = new Date().toISOString().split('T')[0];
            const todayForecast = data.find((f: any) => f.date === todayISO);
            setForecast(todayForecast || null);
            setLoading(false);
            return;
          }
        }

        const response = await fetch('https://api.data.gov.my/weather/forecast?contains=St009@location__location_id');
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        
        const newCache: CachedData = {
          timestamp: Date.now(),
          data: data,
        };
        localStorage.setItem(cacheKey, JSON.stringify(newCache));

        const todayISO = new Date().toISOString().split('T')[0];
        const todayForecast = data.find((f: any) => f.date === todayISO);
        setForecast(todayForecast || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const translate = (text: string) => {
    return translations[text] || text;
  };

  if (loading) {
    return <div className="text-sm">Loading weather...</div>;
  }

  if (error) {
    return <div className="text-sm text-red-500">Error</div>;
  }

  if (!forecast) {
    return <div className="text-sm">No forecast</div>;
  }

  const forecastIcons: { [key: string]: string } = {
    "Tiada hujan": "☀️",
    "Ribut petir": "⛈️",
    "Hujan": "🌧️",
    "Hujan lebat": "🌧️",
    "Ribut petir di beberapa tempat": "⛈️",
  };

  const icon = forecastIcons[forecast.summary_forecast] || "❓";

  return (
    <div className="flex justify-between items-center pt-5 -mb-18 text-xs sm:text-base">
      <span className=''>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <span>{translate(forecast.summary_forecast)}</span>
        <span>{forecast.min_temp}°C / {forecast.max_temp}°C</span>
      </div>
    </div>
  );
};

export default WeatherWidget;