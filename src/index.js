import "./style.css";
const { default: axios } = require("axios");

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

// getWeatherDataByCity("Tychy")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
