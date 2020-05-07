import React from "react"
import { Grid, makeStyles } from '@material-ui/core';
import OneElement from '../components/Dashboard/CssPractice/OneElement'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    minHeight: '90vh',
  },
  'articles__wrap': {
    marginTop: '30px'
  },
  'article__wrap': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default function CssPractice(){
  const classes = useStyles();
  return(
    <Container className={classes.root}>
      This is CssPractice
      <Grid container className={classes.articles__wrap}>
        <Grid item lg={4} className={classes.article__wrap}>
          <OneElement></OneElement>
        </Grid>
        <Grid item lg={4} className={classes.article__wrap}>
          <OneElement></OneElement>
        </Grid>
        <Grid item lg={4} className={classes.article__wrap}>
          <OneElement></OneElement>
        </Grid>
      </Grid>
    </Container>
  )
}