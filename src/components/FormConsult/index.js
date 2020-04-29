import React from "react";
import cn from "classnames";
import Styles from "./Styles/styles.module.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

function FormConsult(props) {
  return (
    <form onSubmit={props.getWheater}>
      <h1 className={cn(Styles.w90, Styles.firsth1)}>Consulta De País</h1>

      <FormControl className={Styles.w90}>
        <InputLabel htmlFor="ci">Ciudad</InputLabel>
        <Input id="ci" type="text" aria-describedby="ci-helper" />
        <FormHelperText id="ci-helper">Ingresa Ciudad</FormHelperText>
      </FormControl>
      <FormControl className={Styles.w90}>
        <InputLabel htmlFor="pa">Pais</InputLabel>
        <Input id="pa" type="text" aria-describedby="pa-helper" />
        <FormHelperText id="pa-helper">Ingresa Pais</FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" className={Styles.w90}>
        Enviar
      </Button>
    </form>
  );
}

export default FormConsult;
