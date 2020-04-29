import React from 'react'
import Sem from '../components/Sem'
import Day from '../components/Day'
import {Grid}  from '@material-ui/core'
import InfoCountries from '../components/InfoCountries'
import FormConsult from '../components/FormConsult'
function Home() {
    return (
        <>
           <Grid container xs={12} >
           <Grid container xs={4} >

             <FormConsult/>


            </Grid>

           <Grid container xs={8} >

           <InfoCountries prueb=""/>
            <Grid container xs={12}>
                <Grid container xs={12} sm={4}>

                </Grid>

                <Grid container xs={12} sm={8}>
                    <Sem>
                        {[1,2,3,4,5].map( e => <Day />)}
                            
                    </Sem>
                </Grid>

            </Grid>


            </Grid>

           </Grid>
    
        </>
    )
}

export default Home
