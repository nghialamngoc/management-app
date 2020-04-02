import React, { useState } from 'react'
import Select from './Select';
import { Grid, makeStyles } from '@material-ui/core';
import MultipleCheckbox from './MultipleCheckbox';

const useStyles = makeStyles(theme => ({
  center: {
    display: "flex",
    alignItems: "center"
  },
}));

const initialMultipleSelectCheckbox = {
  GET: true,
  POST: true,
  PUT: true,
  DELETE: true
}

export default function FilterCritiria(props){
  const classes = useStyles();
  const [filterData, setFilterData]  = useState({});
  const [domainDes, setDomainDes] = useState("")
  function onSelectChange(value){
    filterData.domainSearchString = value;
    const getDomainDes = props.selectSetting.listItem.find(x => x.value === filterData.domainSearchString) === undefined ? "" : props.selectSetting.listItem.find(x => x.value === filterData.domainSearchString).des;
    setDomainDes(getDomainDes);
    setFilterData(filterData);
  }
  function onSearch(){
    props.onSearch(setFilterData);
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={5} md={3} lg={3}>
          <Select setting={{ initialSetting: props.selectSetting, onChange: onSelectChange }}></Select>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={2} className={classes.center}>
          <p>{ domainDes }</p>
        </Grid>
        <Grid item xs={12} className={classes.center}>
          <MultipleCheckbox initial={initialMultipleSelectCheckbox}></MultipleCheckbox>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}