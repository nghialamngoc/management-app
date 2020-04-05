import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import FilterCritiria from '../components/Dashboard/ApiManagement/FilterCritiria';
import ApiList from '../components/Dashboard/ApiManagement/ApiList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
}));

export default function ApiManagement(){
  const classes = useStyles();
  const [ filter, setFilter ] = useState({});
  function onChangeFilter(data){
    console.log(data);
    setFilter(data);
  };
  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <Paper className={classes.paper}>
            <FilterCritiria onSearch={onChangeFilter}></FilterCritiria>
          </Paper>
          <Divider></Divider>
          <Paper className={classes.paper} style={{marginTop: "10px"}}>
            <ApiList></ApiList>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}