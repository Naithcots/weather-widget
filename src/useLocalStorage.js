// App will fetch "Tokyo" as a default city until an user submit a form
const getDefaultCity = () => {
  const city = localStorage.getItem("city");
  if (!city) return "Tokyo";
  return JSON.parse(city);
};

const setDefaultCity = (cityName) =>
  localStorage.setItem("city", JSON.stringify(cityName));

export { getDefaultCity, setDefaultCity };
