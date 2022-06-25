import { getWindLabel } from "./helperFunctions";
const weatherDOM = document.querySelector("#weather");

class Weather {
  data = null;
  //   constructor(weatherData) {
  //     this.data = weatherData;
  //   }

  setWeatherData = (newWeatherData) => (this.data = newWeatherData);

  render = () => {
    weatherDOM.innerHTML = "";
    weatherDOM.appendChild(this.createLeftPanel());
    weatherDOM.appendChild(this.createCenterPanel());
    weatherDOM.appendChild(this.createRightPanel());
  };

  createLeftPanel = () => {
    const leftPanelElement = document.createElement("div");
    leftPanelElement.classList.add("weather__left");
    leftPanelElement.innerHTML = this.setLeftPanelTemplate();
    return leftPanelElement;
  };

  createCenterPanel = () => {
    const centerPanelElement = document.createElement("div");
    centerPanelElement.classList.add("weather__center");
    centerPanelElement.innerHTML = this.setCenterPanelTemplate();
    return centerPanelElement;
  };

  createRightPanel = () => {
    const rightPanelElement = document.createElement("div");
    rightPanelElement.classList.add("weather__right");
    rightPanelElement.innerHTML = this.setRightPanelTemplate();
    return rightPanelElement;
  };

  setLeftPanelTemplate = () => {
    const windLabel = getWindLabel(this.data.weather.wind.deg);

    const rainLastHour = this.data.weather.rain
      ? this.data.weather.rain["1h"]
      : "0";

    const rainLastThreeHours = this.data.weather.rain
      ? this.data.weather.rain["3h"]
      : "0";

    const html = `
        <div class="weather__header">
            <h1 class="weather__header__city">${this.data.forecast.city.name}</h1>
            <span class="weather__header__population">Population: ${this.data.forecast.city.population}</span>
        </div>

        <div class="weather__wind">
            <p class="weather__wind__speed">
                <i class="fa-solid fa-wind"></i>${this.data.weather.wind.speed}km/h
            </p>
            <span class="weather__wind__direction">${windLabel}(${this.data.weather.wind.deg}°)</span>
        </div>

    <div class="weather__rain">
        <p class="weather__rain__item">
            <i class="fa-solid fa-droplet"></i>Last 1h: ${rainLastHour}mm
        </p>
        <p class="weather__rain__item">
            <i class="fa-solid fa-droplet"></i>Last 3h: ${rainLastThreeHours}mm
        </p>
    </div>`;
    return html;
  };

  setCenterPanelTemplate = () => {
    const html = `
        <img
            src="http://openweathermap.org/img/wn/${this.data.weather.weather[0].icon}@4x.png"
            alt="weather icon"
        />
        <h1 class="weather__condition">${this.data.weather.weather[0].description}</h1>

        <div class="weather__temperature">
            <h2 class="weather__temperature__now">${this.data.weather.main.temp}°C</h2>
            <span class="weather__temperature__feel">Feels like ${this.data.weather.main.feels_like}°C</span>
        </div>
    `;
    return html;
  };
  setRightPanelTemplate = () => {
    const sunrise = new Date(
      this.data.forecast.city.sunrise * 1000
    ).toLocaleTimeString();
    const sunset = new Date(
      this.data.forecast.city.sunset * 1000
    ).toLocaleTimeString();

    const html = `
        <div class="weather__misc">
            <div class="weather__misc__main">
                <p class="weather__misc__clouds">
                    <i class="fa-solid fa-cloud"></i>${this.data.weather.clouds.all}%
                </p>
                <p class="weather__misc__pressure">Pressure: ${this.data.weather.main.pressure}hPa</p>
                <p class="weather__misc__humidity">Humidity: ${this.data.weather.main.humidity}%</p>
            </div>
            <div class="weather__misc__sun">
                <p class="weather__misc__sunrise">
                    <i class="fa-solid fa-sun"></i>
                    <i class="fa-solid fa-angle-up"></i>${sunrise}
                </p>
                <p class="weather__misc__sunset">
                    <i class="fa-solid fa-sun"></i>
                    <i class="fa-solid fa-angle-down"></i>${sunset}
                </p>
            </div>
        </div>
    `;
    return html;
  };
}

const weather = new Weather();

export default weather;
