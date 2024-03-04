// weather-api.js

const fetch = require('node-fetch');

class WeatherAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getWeatherByCity(city) {
    const url = `${this.baseURL}?q=${city}&appid=${this.apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        return {
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          description: data.weather[0].description,
        };
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
  }

  async getWeatherByCoordinates(latitude, longitude) {
    const url = `${this.baseURL}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        return {
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          description: data.weather[0].description,
        };
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
  }
}

module.exports = WeatherAPI;
