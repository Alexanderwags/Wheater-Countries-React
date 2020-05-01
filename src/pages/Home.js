import React, { useState } from "react";
import Sem from "../components/Sem";
import Day from "../components/Day";
import { Grid } from "@material-ui/core";
import InfoCountries from "../components/InfoCountries";
import { makeStyles } from "@material-ui/core/styles";
import Styles from "../components/FormConsult/Styles/styles.module.scss";
import {
  FormControl,
  Button,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import WEATHER_KEY from "../Key";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Home(props) {
  const classes = useStyles();
  const [city, setcity] = useState("");
  const [countrie, setcountrie] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [hum, setHum] = useState("");
  const [wind, setWind] = useState("");
  const [band, setBand] = useState("");
  const [dataday, setDataDay] = useState([]);
  const [enc, setEnc] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response, responseimg, responseday, data, dataimg;
    if (city && countrie) {
      // metric parameter is for Celcius Unit
      setEnc(false);

      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countrie}&appid=${WEATHER_KEY}`;
      const API_URL_IMG = `https://restcountries.eu/rest/v2/alpha/${countrie}`;
      const API_URL_DAY = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_KEY}`;
      try {
        response = await fetch(API_URL);
        responseimg = await fetch(API_URL_IMG);
        responseday = await fetch(API_URL_DAY);
        data = await response.json();
        dataimg = await responseimg.json();
        setDataDay(await responseday.json());

        setEnc(true);
        let grad = data.main.temp - 273.15;
        setTemp(grad.toFixed(1));
        setDesc(data.weather[0].description);
        setHum(data.main.humidity);
        setWind(data.wind.speed);
        setBand(dataimg.flag);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Grid container xs={12}>
        <InfoCountries
          temp={temp}
          hum={hum}
          wind={wind}
          desc={desc}
          countrie={countrie}
          band={band}
        />
        <Grid container xs={12}>
          <Grid container xs={12} sm={4}>
            Twiteer
          </Grid>

          <Grid container xs={12} sm={8}>
            <Sem>
              {enc === true
                ? load(dataday)
                : ["monday", "tuesday", "wednesday", "thursday", "frifay"].map(
                    (e) => {
                      return <Day day={e} key={e} grad="12" desc="clouds" />;
                    }
                  )}
            </Sem>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl className={Styles.w90}>
            <InputLabel htmlFor="ca">Ingresa ciudad</InputLabel>
            <Input
              id="ca"
              type="text"
              aria-describedby="ca-helper"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            <FormHelperText id="ca-helper">
              Ingresa capital de un pais
            </FormHelperText>
          </FormControl>
          <FormControl className={Styles.w90}>
            <InputLabel htmlFor="pa">Ingresa pais</InputLabel>
            <Input
              id="pa"
              type="text"
              aria-describedby="pa-helper"
              value={countrie}
              onChange={(e) => setcountrie(e.target.value)}
            />
            <FormHelperText id="pa-helper">Ingresa un pais</FormHelperText>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={Styles.w90}
          >
            Buscar
          </Button>
        </form>
      </Grid>
    </>
  );
}
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
  return datos.map((inf) => {
    let g = inf.temp - 273.15;

    return (
      <Day
        key={inf.id}
        grad={g.toFixed(1)}
        day={inf.day}
        desc={inf.descr}
        descrip={inf.descrip}
      />
    );
  });
}
export default Home;
