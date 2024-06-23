// lib/nadaPrograms.js

import { fetchWeatherData } from './weatherAPI';
import { Nillion } from './nillionClient';
import { getBytes } from './httpbinAPI';

async function handleWeatherComparison(city, temperatureGuess) {
  try {
    const weatherData = await fetchWeatherData(city);
    const actualTemperature = weatherData.current.temp_c;
    const nillion = new Nillion();
    const secretInput = await nillion.createSecret(temperatureGuess);
    const result = await nillion.compare(secretInput, actualTemperature);
    return { actualTemperature, result: result ? 'Correct input!' : 'Incorrect input!' };
  } catch (error) {
    console.error('Error in handleWeatherComparison:', error);
    throw error;
  }
}

async function handlePostDataComparison(temperatureGuess) {
  try {
    const postData = await getBytes(temperatureGuess);
    const nillion = new Nillion();
    const secretInput = await nillion.createSecret(temperatureGuess);
    const result = await nillion.compare(secretInput, postData);
    return { postData, result: result ? 'Correct input!' : 'Incorrect input!' };
  } catch (error) {
    console.error('Error in handlePostDataComparison:', error);
    throw error;
  }
}

export { handleWeatherComparison, handlePostDataComparison };
