# Weather Information API

A simple JavaScript package to fetch weather information from OpenWeatherMap API.

## Installation

You can install the package via npm:

```
npm install weather-information-api
```

## Usage

First, import the `WeatherAPI` class from the package:

```javascript
const WeatherAPI = require('weather-information-api');
```

Then, create an instance of `WeatherAPI` with your OpenWeatherMap API key:

```javascript
const apiKey = 'YOUR_API_KEY';
const weather = new WeatherAPI(apiKey);
```

You can fetch weather data by city name using the `getWeatherByCity` method:

```javascript
const cityWeather = await weather.getWeatherByCity('London');
console.log('Weather in London:', cityWeather);
```

Or you can fetch weather data by coordinates using the `getWeatherByCoordinates` method:

```javascript
const coordWeather = await weather.getWeatherByCoordinates(51.51, -0.13);
console.log('Weather at coordinates:', coordWeather);
```

Replace `'YOUR_API_KEY'` with your actual OpenWeatherMap API key.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

