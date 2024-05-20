import { Button, TextField } from '@mui/material'
import React from 'react'

const Use = () => {
  return (
    <div>
        <br/><br/><br/>
        <h2>ADD BLOG</h2>
      <br/><br/>
        <TextField id="outlined-basic" label="Blog Name" variant="outlined" /><br/><br/>
        
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
        />
         <br/><br/>
        <TextField id="outlined-basic" label="Author Name" variant="outlined" />
        <br/><br/>
        
        <Button variant="contained" color="success">
  submit
</Button>
    </div>
  )
}

export default Use