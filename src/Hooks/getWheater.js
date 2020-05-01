import React from "react";
import WEATHER_KEY from "../Key";

const GetWheater = async (e, city, countrie) => {
  e.preventDefault();

  if (city && countrie) {
    // metric parameter is for Celcius Unit
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countrie}&appid=${WEATHER_KEY}`;
    const API_URL_IMG = `https://restcountries.eu/rest/v2/alpha/${countrie}`;

    const response = await fetch(API_URL);
    const responseimg = await fetch(API_URL_IMG);
    const data = await response.json();
    const dataimg = await responseimg.json();
    console.log(data);
    console.log(dataimg);

    return {
      slides: [
        data.main.temp,
        data.weather[0].description,
        data.main.humidity,
        data.sys.country,
        data.wind.speed,
        data.name,
        dataimg.flag,
      ],
    };
  }
};

export default GetWheater;
