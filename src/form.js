import forecast from "./forecast";
import spinner from "./spinner";
import weather from "./weather";
import getWeatherDataByCity from "./useFetch";
import { setDefaultCity } from "./useLocalStorage";

const formDOM = document.querySelector("#searchCityForm");

class Form {
  addSubmitListener = () => {
    formDOM.addEventListener("submit", (e) => {
      const city = e.target.city.value;

      e.target.city.classList.remove("error");
      spinner.show();

      getWeatherDataByCity(city)
        .then((data) => {
          console.log(data);
          weather.setWeatherData(data);
          weather.render();

          forecast.setForecastData(data.forecast.list);
          forecast.render();

          spinner.hide();
          setDefaultCity(data.weather.name);
        })
        .catch((err) => {
          console.log(err);
          spinner.hide();
          e.target.city.classList.add("error");
        });

      e.preventDefault();
    });
  };
}

const form = new Form();

export default form;
