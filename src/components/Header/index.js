import React from "react";
import Styles from "./styles/Styles.module.scss";

const Header = ({ countrie }) => {
  let dat = new Date();
  return (
    <div className={Styles.header}>
      <h1>
        {countrie} : {dat.getDate()} -{dat.getMonth()} - {dat.getFullYear()}
      </h1>
    </div>
  );
};

export default Header;
