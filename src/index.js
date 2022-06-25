import "./style.css";
import { getDefaultCity } from "./useLocalStorage";
import getWeatherDataByCity from "./useFetch";
import form from "./form";
import weather from "./weather";
import forecast from "./forecast";
import spinner from "./spinner";
// const form = document.querySelector("#searchCityForm");

// const weather = new Weather();
// const forecast = new Forecast();
// const spinner = new Spinner();

// const publicApiKey = "ed6024d82facfcd9aea93f3226a43f09";
// // const cityName = "Tychy";
// const units = "metric";

// const getWeatherDataByCity = async (cityName) => {
//   const forecast = axios.get(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${publicApiKey}&units=${units}`
//   );

//   const weather = axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${publicApiKey}&units=${units}`
//   );

//   const data = await Promise.all([forecast, weather]);
//   return {
//     forecast: data[0].data,
//     weather: data[1].data,
//   };
// };

const initializeApp = () => {
  const defaultCity = getDefaultCity();

  // getWeatherDataByCity(defaultCity)
  //   .then((data) => {
  //     // console.log(data);
  //     weather.setWeatherData(data);
  //     weather.render();

  //     forecast.setForecastData(data.forecast.list);
  //     forecast.render();

  //     spinner.hide();
  //   })
  //   .catch((err) => console.log(err));

  getWeatherDataByCity(defaultCity)
    .then((data) => {
      // console.log(data);
      weather.setWeatherData(data);
      weather.render();

      forecast.setForecastData(data.forecast.list);
      forecast.render();

      spinner.hide();
    })
    .catch((err) => console.log(err));

  // form.addEventListener("submit", (e) => {
  //   const city = e.target.city.value;

  //   e.target.city.classList.remove("error");
  //   spinner.show();

  //   getWeatherDataByCity(city)
  //     .then((data) => {
  //       console.log(data);
  //       weather.setWeatherData(data);
  //       weather.render();

  //       forecast.setForecastData(data.forecast.list);
  //       forecast.render();

  //       spinner.hide();
  //       setDefaultCity(data.weather.name);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       e.target.city.classList.add("error");
  //       spinner.hide();
  //     });

  //   e.preventDefault();
  // });

  form.addSubmitListener();
};

initializeApp();
