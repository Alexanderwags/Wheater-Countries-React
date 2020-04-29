import React from 'react';
import {Grid} from '@material-ui/core';

const TwitterFeed = ({countrie,children}) => {
    return (
        <Grid container xs={12}> 
            <h1>Twitter Feed <span>#{countrie}</span></h1>
            {children}
        </Grid>
    );
};




export default TwitterFeed;
