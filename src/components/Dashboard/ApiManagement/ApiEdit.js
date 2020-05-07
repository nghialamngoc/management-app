import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function ApiEditComponent(props) {
  var inputEl = null;
  var outputEl = null;
  var urlEl = null;
  var desEl = null;
  var methodEl = null;
  useEffect(() => {
    if( inputEl !== null && inputEl !== undefined ){
      inputEl.innerHTML = JSON.stringify(props.data.input, undefined, 4);
    }
    if( outputEl !== null && outputEl !== undefined){
      outputEl.innerHTML = JSON.stringify(props.data.output, undefined, 4);
    }
  }, [inputEl, outputEl, props.data.input, props.data.output]);
  const submit = function(){
    const editData = {
      url: urlEl.value,
      des: desEl.value,
      method: methodEl.value,
      input: inputEl == null ? null : JSON.parse(inputEl.value),
      output: outputEl == null ? null : JSON.parse(outputEl.value)
    };
    props.onSubmit(editData);
  }

  return (
    <Box p={2} width="350px">
      <Typography align="center" color="primary" variant="h6">Edit</Typography>
      <Divider></Divider>
      <TextField margin="normal" fullWidth label="Api url" defaultValue={props.data.url} inputRef={el => urlEl = el} />
      <TextField margin="dense" fullWidth label="Description" defaultValue={props.data.des} inputRef={el => desEl = el} />
      <TextField margin="dense" label="Method" defaultValue={props.data.method} inputRef={el => methodEl = el} />
      { props.data.input === null || props.data.input === undefined ? null : 
        <TextField
          inputRef={el => inputEl = el}
          margin="normal"
          fullWidth
          label="Input"
          multiline
          rows="3"
          variant="outlined"
        />
      }
      { props.data.output === null || props.data.output === undefined ? null : 
        <TextField
          inputRef={el => outputEl = el}
          margin="normal"
          fullWidth
          label="Output"
          multiline
          rows="3"
          variant="outlined"
        />
      }
      <div></div>
      <Button variant="contained" color="primary" style={{float: 'right', margin: '20px 0'}} onClick={submit}>
        Edit
      </Button>
    </Box>
  )
}

export default ApiEditComponent;