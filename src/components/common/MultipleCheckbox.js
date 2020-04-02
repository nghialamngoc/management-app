import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(props.initial);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // Error check
  var error = Object.getOwnPropertyNames(state).filter((v) => state[v]).length < 1;
  // Generate Element
  var el = null;
  if( props.initial instanceof Object && Object.getOwnPropertyNames(props.initial).length > 0 ){
    el = Object.getOwnPropertyNames(props.initial).map((abbr, index) => {
      return <FormControlLabel key={index}
        control={<Checkbox checked={state[abbr]} onChange={handleChange} name={abbr} />}
        label={"Method " + abbr }
      />
    })
  }

  return (
    <div className={classes.root}>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select method</FormLabel>
        <FormGroup>
          {el}
        </FormGroup>
        <FormHelperText>Choose at least one method</FormHelperText>
      </FormControl>
    </div>
  );
}