import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Styles from "./Styles/styles.module.scss";
import { FormControl, Button } from "@material-ui/core";
// eslint-disable-next-line no-unused-vars
import {
  useGetData,
  loadDay,
  loadimg,
  loadcountrie,
} from "../../Hooks/useGetData.js";
import PropTypes from "prop-types";
import WEATHER_KEY from "../../Key";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormConsult({ SearchData }) {
  const classes = useStyles();
  const [city, setcity] = useState("");
  const [countrie, setcountrie] = useState("");
  const [band, setBand] = useState(false);
  const [band1, setBand1] = useState(false);
  const [band2, setBand2] = useState(false);
  //const [enc, setEnc] = useState(false);
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countrie}&appid=${WEATHER_KEY}`;
  const API_URL_IMG = `https://restcountries.eu/rest/v2/alpha/${countrie}`;
  const API_URL_DAY = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_KEY}`;
  const [weather, estad1] = useGetData(API_URL, city, countrie, band);
  // eslint-disable-next-line no-unused-vars
  const [imgcountrie, estd2] = useGetData(API_URL_IMG, city, countrie, band1);
  // eslint-disable-next-line no-unused-vars
  const [wheaterday, estad3] = useGetData(API_URL_DAY, city, countrie, band2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBand(true);
    setBand1(true);
    setBand2(true);
    try {
      console.log("weather : ", weather);
      console.log("imgcountrie : ", imgcountrie);
      console.log("weatherday : ", wheaterday);
      loadcountrie(weather);
      const d = loadDay(wheaterday);
      const i = loadimg(imgcountrie);
      const c = loadcountrie(weather);
      // console.log(d);
      // console.log(i);
      // console.log(c);

      SearchData(city, countrie, d, i, c);
    } catch (event) {
      console.log(event.err);
    }
  };
  function change() {
    // setBand(true);
    // setBand1(true);
    // setBand2(true);
  }
  function keyp(e) {
    e.preventDefault();
    // setBand(true);
    // setBand1(true);
    // setBand2(true);
  }

  function onChangeCity(e) {
    setcity(e.target.value);
    setBand(false);
    setBand1(false);
    setBand2(false);
  }
  function onChangeCountrie(e) {
    setcountrie(e.target.value);
    // setBand(false);
    // setBand1(false);
    // setBand2(false);
  }
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl className={Styles.w90}>
        <TextField
          required
          className={Styles.w100}
          id="standard-required"
          label="Enter Capital City"
          value={city}
          onChange={onChangeCity}
          placeholder="Enter a city"
        />
      </FormControl>
      <FormControl className={Styles.w90}>
        <TextField
          className={Styles.w100}
          required
          id="standard-required"
          label="Enter acrony country"
          value={countrie}
          onChange={onChangeCountrie}
          placeholder="Enter acrony country for example (col)"
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={Styles.w90}
        onMouseOver={change}
        onKeyPress={keyp}
        style={{ background: "#2a67a5" }}
      >
        Search
      </Button>
    </form>
  );
}

FormConsult.propTypes = {
  SearchData: PropTypes.func.isRequired,
};
