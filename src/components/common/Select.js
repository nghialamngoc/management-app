import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  // Declare reference variable
  const initialSetting = props.setting.initialSetting;
  const [selectedValue, setSelectedValue] = React.useState(initialSetting.listItem[0].value);

  const handleChange = event => {
    setSelectedValue(event.target.value);
    props.setting.onChange(event.target.value);
  };
  // generate html for select list
  var htmlForSelect = null;
  if( Array.isArray(initialSetting.listItem) && initialSetting.listItem.length > 0 ){
    if( initialSetting.isGroup === false ){
      htmlForSelect = initialSetting.listItem.map((item, i) => {
        return <MenuItem key={i} value={item.value}>{item.display}</MenuItem>
      })
    }
  }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">{initialSetting.Label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedValue}
          onChange={handleChange}
        >
          {htmlForSelect}
        </Select>
        <FormHelperText>{initialSetting.helpText}</FormHelperText>
      </FormControl>
    </div>
  );
}