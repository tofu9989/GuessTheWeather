import { useState } from 'react';
import { handleWeatherComparison, handlePostDataComparison } from '../lib/nadaPrograms';

export default function InputComparisonApp() {
  const [weatherTemperatureGuess, setWeatherTemperatureGuess] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherResult, setWeatherResult] = useState('');
  const [weatherError, setWeatherError] = useState(null);

  const [nadaTemperatureGuess, setNadaTemperatureGuess] = useState('');
  const [postData, setPostData] = useState(null);
  const [postResult, setPostResult] = useState('');
  const [postError, setPostError] = useState(null);

  const handleWeatherSubmit = async (e) => {
    e.preventDefault();
    const weatherCity = 'Tokyo';
    try {
      const { actualTemperature, result } = await handleWeatherComparison(weatherCity, weatherTemperatureGuess);
      setWeatherData({ current: { temp_c: actualTemperature } });
      setWeatherResult(result);
      setWeatherError(null);
    } catch (error) {
      setWeatherError(error.message);
      setWeatherData(null);
      setWeatherResult('');
    }
  };

  const handlePostDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const { postData, result } = await handlePostDataComparison(nadaTemperatureGuess);
      setPostData(postData);
      setPostResult(result);
      setPostError(null);
    } catch (error) {
      setPostError(error.message);
      setPostData(null);
      setPostResult('');
    }
  };

  return (
    <div className="container">
      <div className="split-container">
        <div className="left-column">
          <h1>Weather Guessing App</h1>
          <form onSubmit={handleWeatherSubmit}>
          <p>City Name: Tokyo</p>
            
            <label>Guess Tomorrow's Temperature (°C):</label>
            <input type="number" value={weatherTemperatureGuess} onChange={(e) => setWeatherTemperatureGuess(e.target.value)} required />
            <button type="submit">Submit Guess</button>
          </form>

          {weatherError && <p className="error">{weatherError}</p>}
          {weatherData && (
            <div className="result">
              <h2>Weather in Tokyo</h2>
              <p>Current Temperature: {weatherData.current.temp_c} °C</p>
              <p className={weatherResult === 'Correct input!' ? 'success' : 'error'}>{weatherResult}</p>
            </div>
          )}
        </div>

        <div className="right-column">
          <h1>Weather Nada App</h1>
          <form onSubmit={handlePostDataSubmit}>
          <p>City Name: Tokyo</p>
            <label>Guess Tomorrow's Temperature (°C):</label>
            <input type="number" value={nadaTemperatureGuess} onChange={(e) => setNadaTemperatureGuess(e.target.value)} required />
            <button type="submit">Submit Guess</button>
          </form>

          {postError && <p className="error">{postError}</p>}
          {postData && (
            <div className="result">
              <h2>Weather in Tokyo</h2>
              <p>Current Temperature: {postData} °C</p>
              <p className={postResult === 'Correct input!' ? 'success' : 'error'}>{postResult}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
