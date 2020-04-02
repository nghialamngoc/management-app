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
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    props.setting.onChange(event.target.value);
  };
  const initialSetting = props.setting.initialSetting;
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {htmlForSelect}
        </Select>
        <FormHelperText>{initialSetting.helpText}</FormHelperText>
      </FormControl>
    </div>
  );
}