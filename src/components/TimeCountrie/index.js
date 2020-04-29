import React from 'react';
import Styles from './Styles/styles.module.scss'

const TimeCountrie = ({grad="",cloudy="",Humidty="",wind=""}) => {
    return (
        <div className={Styles.desc}>
            <h1>{grad}</h1>
            <h3>{cloudy}</h3>
            <div>
                <h3>Humidty</h3>
                <h4>{grad}%</h4>
            </div>
            <div className={Styles.variables}>
                <h3>wind</h3>
                <h4>{wind}K/M</h4>
            </div>
        </div>
    );
};





export default TimeCountrie;
