import { useState, useEffect } from "react";

export function useGetData(API, city, countrie, band) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Data() {
      try {
        const response = await fetch(API);

        setData(await response.json());
        //console.log(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        band = true;
      } catch (error) {
        console.log("null");
      }
    }
    band ? Data() : console.log("");
  }, [API, band, city, countrie, data]);
  return [data, band];
}
export function loadcountrie(datacountrie) {
  let grad = datacountrie.main.temp - 273.15;
  grad.toFixed(1);
  let wheater = [
    {
      grad: grad,
      desc: datacountrie.weather[0].description,
      hum: datacountrie.main.humidity,
      wind: datacountrie.wind.speed,
    },
  ];
  return wheater;
}
export function loadimg(dataimg) {
  return [dataimg.nativeName, dataimg.flag];
}
export function loadDay(dataday) {
  let datos = [
    {
      id: "1",
      day: "monday",
      temp: dataday.list[0].main.temp,
      descr: dataday.list[0].weather[0].main,
      descrip: dataday.list[0].weather[0].description,
    },
    {
      id: "2",
      day: "tuesday",
      temp: dataday.list[8].main.temp,
      descr: dataday.list[8].weather[0].main,
      descrip: dataday.list[8].weather[0].description,
    },
    {
      id: "3",
      day: "wednesday",
      temp: dataday.list[16].main.temp,
      descr: dataday.list[16].weather[0].main,
      descrip: dataday.list[16].weather[0].description,
    },
    {
      id: "4",
      day: "thursday",
      temp: dataday.list[24].main.temp,
      descr: dataday.list[24].weather[0].main,
      descrip: dataday.list[24].weather[0].description,
    },
    {
      id: "5",
      day: "friday",
      temp: dataday.list[32].main.temp,
      descr: dataday.list[32].weather[0].main,
      descrip: dataday.list[32].weather[0].description,
    },
  ];
  return datos;
}
