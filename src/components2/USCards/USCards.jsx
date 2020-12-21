import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './USCards.module.css';


const USCards = ({data: {cases, deaths, recovered, population, updated}}) => {
    if(!cases){
        return 'Loading...';
    }
    return(
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp  start={0} end={cases} duration={2.5} separator=","  />
                    </Typography>
                    <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp  start={0} end={recovered} duration={2.5} separator=","  />
                    </Typography>
                    <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                    <Typography variant="body2">Number of recovered from Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp  start={0} end={deaths} duration={2.5} separator=","  />
                    </Typography>
                    <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths from Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} className={cx(styles.card, styles.population)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Population</Typography>
                    <Typography variant="h5">
                        <CountUp  start={0} end={[population]} duration={2.5} separator=","  />
                    </Typography>
                    <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                    <Typography variant="body2">Population</Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default USCards