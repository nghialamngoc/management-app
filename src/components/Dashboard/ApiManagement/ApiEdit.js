import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';

function ApiEditComponent(props) {
  var inputEl = null;
  useEffect(() => {
    if(inputEl != null){
      inputEl.innerHTML = JSON.stringify(props.data.input, undefined, 4);
    }
  }, [])
  return (
    <Box p={2} width="350px">
      <Typography>Edit</Typography>
      <Divider></Divider>
      <TextField margin="normal" fullWidth label="Api url" defaultValue={props.data.url} />
      <TextField margin="dense" fullWidth label="Description" defaultValue={props.data.des} />
      <TextField margin="dense" label="Method" defaultValue={props.data.method} />
      {props.data.input === null ? null : 
        <TextField
          inputRef={el => inputEl = el}
          margin="normal"
          fullWidth
          label="Multiline"
          multiline
          rows="3"
          variant="outlined"
        />
      }
    </Box>
  )
}

export default ApiEditComponent;