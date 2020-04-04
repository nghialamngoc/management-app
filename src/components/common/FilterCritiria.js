import React, { useState } from 'react'
import Select from './Select';
import Button from '@material-ui/core/Button';
import { Grid, makeStyles } from '@material-ui/core';
import MultipleCheckbox from './MultipleCheckbox';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  center: {
    display: "flex",
    alignItems: "center"
  },
  text: {
    fontSize: "18px",
    paddingTop: "10px"
  },
  advancedSearchButton: {
    "&:hover": {
      backgroundColor: "inherit"
    }
  },
}));

const initialMultipleSelectCheckbox = {
  GET: true,
  POST: true,
  PUT: true,
  DELETE: true
}

export default function FilterCritiria(props) {
  // CSS
  const classes = useStyles();
  // Declare reference variable
  const listItem = props.selectSetting.listItem;
  // Define state
  const [filterData, setFilterData] = useState({});
  const [domainDes, setDomainDes] = useState(listItem[0].des);
  const [isExpanded, setExpanded] = useState(false);
  function onButtonExpandChange() {
    setExpanded(!isExpanded);
  }
  /*-------------------------------------------
  [Function]: function handle select dropdown list change
  ---------------------------------------------
  [Args]: 
    value: string
  [Return]: None
  --------------------------------------------*/
  function onSelectChange(value) {
    filterData.domainSearchString = value;
    const getDomainDes = listItem.find(x => x.value === filterData.domainSearchString) === undefined ? "" : listItem.find(x => x.value === filterData.domainSearchString).des;
    setDomainDes(getDomainDes);
    setFilterData(filterData);
  }
  function onSearch() {
    props.onSearch(setFilterData);
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={5} md={3} lg={3}>
          <Select setting={{ initialSetting: props.selectSetting, onChange: onSelectChange }}></Select>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={7} className={classes.center}>
          <p className={classes.text}>{domainDes}</p>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={1} className={classes.center}>
          <Button variant="contained" color="primary" disableElevation>
            Search
          </Button>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={1} className={classes.center} style={{ justifyContent: "flex-end" }}>
          <Button className={classes.advancedSearchButton} onClick={onButtonExpandChange} disableRipple>
            {isExpanded === true ? <ExpandMore></ExpandMore> : <ExpandLess></ExpandLess>}
          </Button>
        </Grid>
        <Collapse in={isExpanded}>
          <Grid item xs={12} className={classes.center}>
            <MultipleCheckbox initial={initialMultipleSelectCheckbox}></MultipleCheckbox>
          </Grid>
        </Collapse>

      </Grid>
    </React.Fragment>
  )
}