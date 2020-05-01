import React from "react";
import TimeCountrie from "../TimeCountrie";
import Countrie from "../Countrie";
import Styles from "./Styles/styles.module.scss";

const InfoCountries = (props) => {
  return (
    <div
      className={Styles.center}
      style={{ backgroundImage: `url(${props.band})` }}
    >
      <TimeCountrie {...props} />
      <Countrie {...props} />
    </div>
  );
};

export default InfoCountries;
