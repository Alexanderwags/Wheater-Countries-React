import React, { useState } from "react";
import Sem from "../components/Sem";
import Day from "../components/Day";
import { Grid } from "@material-ui/core";
import InfoCountries from "../components/InfoCountries";
import FormConsult from "../components/FormConsult";
import Header from "../components/Header";
import Styles from "./styles/Styles.module.scss";
import TwitterFeed from "../components/TwitterFeed";
function Home(props) {
  const [countrie, setcountrie] = useState("");
  const [countrie1, setcountrie1] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [hum, setHum] = useState("");
  const [wind, setWind] = useState("");
  const [band, setBand] = useState("");
  const [dataday, setDataDay] = useState([]);
  // const [dataImg, setDataImg] = useState([]);
  // const [datawheater, setDataWheater] = useState([]);

  const [enc, setEnc] = useState(false);

  function SearchData(ci, pa, datday, datimg, datwheater) {
    console.log("city: ", ci, " countrie: ", pa);
    // eslint-disable-next-line no-unused-expressions
    const t = datwheater[0].grad;

    setTemp(t.toFixed(1));
    setDesc(datwheater[0].desc);
    setWind(datwheater[0].wind);
    setHum(datwheater[0].hum);
    setcountrie(datimg[0]);
    setBand(datimg[1]);
    setDataDay(datday);
    setcountrie1(countrie);
    //setDataImg(datimg);
    //setDataWheater(datwheater);
    console.log("success");
    setEnc(true);
  }

  return (
    <>
      <Header countrie={countrie1} />
      <Grid container xs={12} className={Styles.centro}>
        <Grid
          container
          sm={4}
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          className={Styles.form}
        >
          <FormConsult SearchData={SearchData} />
        </Grid>
        <Grid container xs={12} sm={8} className={Styles.border}>
          <InfoCountries
            temp={temp}
            hum={hum}
            wind={wind}
            desc={desc}
            countrie={countrie}
            band={band}
          />
        </Grid>
      </Grid>
      <Grid container xs={12} item={true}>
        <Grid container xs={12} sm={4} item={true}>
          <TwitterFeed countrie={countrie1} />
        </Grid>

        <Grid container xs={12} sm={8} item={true}>
          <Sem>
            {enc === true
              ? dataday.map((inf) => {
                  return (
                    <Day
                      day={inf.day}
                      grad={inf.temp}
                      descrip={inf.descrip}
                      desc={inf.descr}
                      key={inf.id}
                    />
                  );
                })
              : ["monday", "tuesday", "wednesday", "thursday", "friday"].map(
                  (e) => {
                    return <Day day={e} key={e} grad="280" desc="clouds" />;
                  }
                )}
          </Sem>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
