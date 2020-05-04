import React, { useState } from "react";
import Sem from "../components/Sem";
import Day from "../components/Day";
import { Grid } from "@material-ui/core";
import InfoCountries from "../components/InfoCountries";
import FormConsult from "../components/FormConsult";

function Home(props) {
  const [countrie, setcountrie] = useState("");
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
    setTemp(datwheater[0].grad);
    setDesc(datwheater[0].desc);
    setWind(datwheater[0].wind);
    setHum(datwheater[0].hum);
    setcountrie(datimg[0]);
    setBand(datimg[1]);
    setDataDay(datday);
    //setDataImg(datimg);
    //setDataWheater(datwheater);
    console.log("success");
    setEnc(true);
  }

  return (
    <>
      <Grid container xs={12}>
        <InfoCountries
          temp={temp}
          hum={hum}
          wind={wind}
          desc={desc}
          countrie={countrie}
          band={band}
        />
        <Grid container xs={12} item={true}>
          <Grid container xs={12} sm={4} item={true}>
            Twiteer
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
      </Grid>
      <Grid
        container
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        item={true}
      >
        <FormConsult SearchData={SearchData} />
      </Grid>
    </>
  );
}

export default Home;
