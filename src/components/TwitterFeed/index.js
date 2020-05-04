import React from "react";
import { Grid } from "@material-ui/core";
import Styles from "./styles/Styles.module.scss";
const TwitterFeed = ({ countrie, children }) => {
  return (
    <Grid container xs={12} className={Styles.center}>
      <h1>
        Twitter Feed <span>#{countrie}</span>
      </h1>
      {children}
    </Grid>
  );
};

export default TwitterFeed;
