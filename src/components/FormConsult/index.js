import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Styles from "./Styles/styles.module.scss";
import { FormControl, Button } from "@material-ui/core";
import GetWheater from "../../Hooks/getWheater";
import PropTypes from "prop-types";
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

  const handleSubmit = (e) => {
    GetWheater(e, city, countrie);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        return [e.preventDefault(), city];
      }}
    >
      <FormControl className={Styles.w90}>
        <TextField
          required
          id="standard-required"
          label="Required"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          placeholder="Ingresa Ciudad"
        />
      </FormControl>
      <FormControl className={Styles.w90}>
        <TextField
          required
          id="standard-required"
          label="Required"
          value={countrie}
          onChange={(e) => setcountrie(e.target.value)}
          placeholder="Ingresa Pais"
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={Styles.w90}
      >
        Enviar
      </Button>
    </form>
  );
}

FormConsult.propTypes = {
  SearchData: PropTypes.func.isRequired,
};
