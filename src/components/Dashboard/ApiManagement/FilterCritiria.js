import React, { useState } from 'react'
import Select from '../../common/Select';
import Button from '@material-ui/core/Button';
import { Grid, makeStyles } from '@material-ui/core';
import MultipleCheckbox from '../../common/MultipleCheckbox';
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

const domainSelectListItems = {
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
  const listItem = domainSelectListItems.listItem;
  // Define state
  const [filterData, setFilterData] = useState({
    selectedDomain: listItem[0].value,
    selectedMethod: initialMultipleSelectCheckbox
  });
  const [domainDes, setDomainDes] = useState(listItem[0].des);
  const [isExpanded, setExpanded] = useState(false);
  /*-------------------------------------------
  [Function]: function handle expand button
  ---------------------------------------------
  [Args]: None
  [Return]: None
  --------------------------------------------*/
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
    filterData.selectedDomain = value;
    const getDomainDes = listItem.find(x => x.value === filterData.selectedDomain) === undefined ? "" : listItem.find(x => x.value === filterData.selectedDomain).des;
    setDomainDes(getDomainDes);
    setFilterData(filterData);
  }
  /*-------------------------------------------
  [Function]: function handle user selected method
  ---------------------------------------------
  [Args]: 
    value: object
  [Return]: None
  --------------------------------------------*/
  function onMethodChange(value){
    filterData.selectedMethod = value;
    setFilterData(filterData);
  }
  /*-------------------------------------------
  [Function]: function handle search button click
  ---------------------------------------------
  [Args]: None
  [Return]: None
  --------------------------------------------*/
  function onSearch() {
    props.onSearch(filterData);
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Select setting={{ initialSetting: domainSelectListItems, onChange: onSelectChange }}></Select>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={7} className={classes.center}>
          <p className={classes.text}>{domainDes}</p>
        </Grid>
        <Grid item xs={12} sm={1} md={2} lg={1} className={classes.center}>
          <Button variant="contained" color="primary" disableElevation onClick={onSearch}>
            Search
          </Button>
        </Grid>
        <Grid item xs={12} sm={1} md={2} lg={1} className={classes.center} style={{ justifyContent: "flex-end" }}>
          <Button className={classes.advancedSearchButton} onClick={onButtonExpandChange} disableRipple>
            {isExpanded === true ? <ExpandMore></ExpandMore> : <ExpandLess></ExpandLess>}
          </Button>
        </Grid>
        <Collapse in={isExpanded}>
          <Grid item xs={12} className={classes.center}>
            <MultipleCheckbox initial={initialMultipleSelectCheckbox} onChange={onMethodChange}></MultipleCheckbox>
          </Grid>
        </Collapse>
      </Grid>
    </React.Fragment>
  )
}