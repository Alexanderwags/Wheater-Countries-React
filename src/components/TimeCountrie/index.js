import React from "react";
import Styles from "./Styles/styles.module.scss";

const TimeCountrie = (props) => {
  return (
    <div className={Styles.desc}>
      <h1>{props.temp}°</h1>
      <h3>{props.desc}</h3>
      <div className={Styles.variables}>
        <div className={Styles.humidty}>
          <h4>Humidty</h4>
          <h4>{props.hum}%</h4>
        </div>
        <div className={Styles.wind}>
          <h4>wind</h4>
          <h4>{props.wind}K/M</h4>
        </div>
      </div>
    </div>
  );
};

export default TimeCountrie;
