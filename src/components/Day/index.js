import React from "react";
import { Grid } from "@material-ui/core";
import Styles from "./Styles/styles.module.scss";
import WbCloudyIcon from "@material-ui/icons/WbCloudy";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Rain from "../../assets/Svg/Rain";
import Torn from "../../assets/Svg/Torn";
const Day = ({
  day = "monday",
  grad = "12",
  desc = "SUNNY",
  id = "1",
  descrip = "",
}) => {
  let temp = grad - 273.15;

  return (
    <Grid container xs={6} sm={2} item={true} className={Styles.center}>
      <div className={Styles.center}>
        <h1>{day}</h1>
        {desc === "Rain" ? (
          <Rain key={id} />
        ) : desc === "Rain" ? (
          <Torn key={id} />
        ) : desc === "Sun" ? (
          <WbSunnyIcon
            key={id}
            style={{ color: "yellow", width: "80px", height: "80px" }}
          />
        ) : desc === "Clouds" ? (
          <WbCloudyIcon
            key={id}
            style={{ color: "gray", width: "80px", height: "80px" }}
          />
        ) : (
          <WbCloudyIcon
            key={id}
            style={{ color: "gray", width: "80px", height: "80px" }}
          />
        )}
        <h1>{temp.toFixed(1)}°</h1>
        <h1>{descrip} </h1>
      </div>
    </Grid>
  );
};

export default Day;
