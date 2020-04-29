import React from 'react';
import TimeCountrie from '../TimeCountrie'
import Countrie  from '../Countrie'
import Styles from './Styles/styles.module.scss'

const InfoCountries = (props) => {
    return (
        <div  className={Styles.center}>
            <TimeCountrie/>
            <Countrie/>
        </div>
    );
};




export default InfoCountries;
