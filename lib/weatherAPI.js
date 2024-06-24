// lib/weatherAPI.js

const API_BASE_URL = 'https://api.weatherapi.com/v1/current.json';

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${API_BASE_URL}?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no&alerts=no`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

export { fetchWeatherData };

