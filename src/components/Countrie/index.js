import React from "react";
import Styles from "./Styles/Styles.module.scss";
const index = (props) => {
  return (
    <div className={Styles.title}>
      <h1>{props.countrie}</h1>
    </div>
  );
};

export default index;
