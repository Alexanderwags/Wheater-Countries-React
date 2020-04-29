import React from 'react';
import {Grid} from '@material-ui/core'
import {} from '@material-ui/icons'
import Styles from './Styles/styles.module.scss'
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Rain from '../../assets/Svg/Rain';
import Torn from '../../assets/Svg/Torn'
const Day = ({day="lunes",grad="12",description="SUNNY"}) => {
    return (
        <Grid container  xs={12} sm={2}>
            <div className={Styles.center}>
                <h1>{day}</h1>
                {
                    description === 'RAINING' ? <Rain /> :
                    description === 'TORM' ?    <Torn /> :
                    description === 'SUNNY'   ? <WbSunnyIcon  style={{ color:"yellow",width:"60px",height:"60px" }}/>:
                    description === 'CLOUDY'  ? <WbCloudyIcon style={{ color:"gray",width:"60px",height:"60px" }}/>:""
              }
                <h1>{grad}°</h1>
                <h1>{description} </h1>

            </div>
        </Grid>
    );
};




export default Day;
