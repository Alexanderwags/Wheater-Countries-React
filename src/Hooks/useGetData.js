import { useState, useEffect } from "react";

const GetData = ({ API_URL }) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function Get(e) {
      e.preventDefault();
      const response = await fetch(API_URL);
      setData(await response.json());
    }
    Get();
  }, []);
  return Data;
};
function load(dataday) {
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
export default [GetData, load];
