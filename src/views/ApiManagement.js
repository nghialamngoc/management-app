import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FilterCritiria from '../components/common/FilterCritiria';
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

const domainSelectSetting = {
  isGroup: false,
  Label: 'Domain',
  listItem: [
    {
      value: 'sharingandlearning',
      display: 'sharing_and_learning',
      url: 'update late',
      des: 'Sharing and Learning website'
    },
    {
      value: 'imageuploadservice',
      display: 'image_upload_service',
      url: 'update late',
      des: 'Upload image server'
    }
  ],
  helpText: 'Choose the domain you want for view'
}

export default function ApiManagement(){
  const classes = useStyles();
  const [ filter, setFilter ] = useState({});
  function onChangeFilter(data){
    setFilter(data);
  };
  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <Paper className={classes.paper}>
            <FilterCritiria selectSetting={domainSelectSetting} onSearch={onChangeFilter}></FilterCritiria>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}