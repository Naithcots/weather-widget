import { getWindLabel } from "./helperFunctions";

const forecastDOM = document.querySelector("#forecast");

class Forecast {
  setForecastData = (newForecastData) => (this.data = newForecastData);

  render = () => {
    forecastDOM.innerHTML = "";

    this.data.forEach((snap) => {
      const element = this.createForecastBox(snap);
      forecastDOM.appendChild(element);
    });
  };

  createForecastBox = (boxData) => {
    const forecastBox = document.createElement("div");
    forecastBox.classList.add("forecast__box");

    const windLabel = getWindLabel(boxData.wind.deg);

    forecastBox.innerHTML = `
        <img
            src="http://openweathermap.org/img/wn/${boxData.weather[0].icon}@4x.png"
            alt="forecast icon"
        />
        <p class="forecast__box__time">${boxData.dt_txt}</p>
        <h3 class="forecast__box__condition">${boxData.weather[0].description}</h3>
        <h2 class="forecast__box__temperature">${boxData.main?.temp}°C</h2>
        <div class="forecast__wind">
            <p class="forecast__wind__speed">
                <i class="fa-solid fa-wind"></i>${boxData.wind.speed}km/h
            </p>
            <span class="forecast__wind__direction">${windLabel}(${boxData.wind.deg}°)</span>
        </div>
        <p class="forecast__box__clouds">
            <i class="fa-solid fa-cloud"></i>${boxData.clouds.all}%
        </p>
    `;
    return forecastBox;
  };
}

const forecast = new Forecast();

export default forecast;
