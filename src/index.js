import "./style.css";
import axios from "axios";
import Weather from "./weather";
import Forecast from "./forecast";
const form = document.querySelector("#searchCityForm");

const weather = new Weather();
const forecast = new Forecast();

const publicApiKey = "ed6024d82facfcd9aea93f3226a43f09";
// const cityName = "Tychy";
const units = "metric";

const getWeatherDataByCity = async (cityName) => {
  const forecast = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${publicApiKey}&units=${units}`
  );

  const weather = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${publicApiKey}&units=${units}`
  );

  const data = await Promise.all([forecast, weather]);
  return {
    forecast: data[0].data,
    weather: data[1].data,
  };
};

const initializeApp = () => {
  const defaultCity = "Warsaw";

  getWeatherDataByCity(defaultCity)
    .then((data) => {
      console.log(data);
      weather.setWeatherData(data);
      weather.render();

      forecast.setForecastData(data.forecast.list);
      forecast.render();
    })
    .catch((err) => console.log(err));

  form.addEventListener("submit", (e) => {
    const city = e.target.city.value;

    getWeatherDataByCity(city)
      .then((data) => {
        console.log(data);
        weather.setWeatherData(data);
        weather.render();

        forecast.setForecastData(data.forecast.list);
        forecast.render();
      })
      .catch((err) => console.log(err));

    e.preventDefault();
  });
};

initializeApp();
