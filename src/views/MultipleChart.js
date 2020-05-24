import React from 'react';
import LineChar from '../components/MultibleChartDemo/LineChart';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function MultipleChart (){

  const classes = useStyles();
  return(
    <Grid container className={classes.root}>
      <Grid item xs={12} lg={4}>
        <LineChar></LineChar>
      </Grid>
    </Grid>
  )
}