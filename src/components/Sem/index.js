import React from "react";
import { Grid } from "@material-ui/core";
import Styles from "./Styles/styles.module.scss";
const Sem = ({ children }) => {
  return (
    <Grid container xs={12} className={Styles.cont} item={true}>
      {children}
    </Grid>
  );
};

export default Sem;
