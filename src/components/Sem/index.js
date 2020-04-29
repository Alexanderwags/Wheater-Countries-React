import React from 'react';
import {Grid} from '@material-ui/core';

const Sem = ({children}) => {
    return (
        <Grid container xs={12}>
            {children}
        </Grid>
    );
};




export default Sem;
