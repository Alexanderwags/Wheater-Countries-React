import React from "react";
import { Grid } from "@material-ui/core";
import Styles from "./styles/Styles.module.scss";
import Twitter from "../../assets/Svg/Twitter";
const TwitterFeed = ({ countrie, children }) => {
  return (
    <Grid container xs={12} className={Styles.center}>
      <div className={Styles.cn}>
        <Twitter style={{ color: "#2a67a5", height: "40px" }} />
        <h1>
          Twitter Feed <span>#{countrie}</span>
        </h1>
      </div>
      {children}
    </Grid>
  );
};

export default TwitterFeed;
