import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br/><br/><br/><br/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br/><br/><br/>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Username"
        /><br/><br/><br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/><br/>
        <Button variant="contained" color="success">
  submit
</Button>
    </div>
  )
}

export default Register