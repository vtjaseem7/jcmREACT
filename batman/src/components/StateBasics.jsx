import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const StateBasics = () => {
  

  const[val,setVal]=useState('');
  const[sub,setsub]=useState('');
  const handleInput=(e)=>{
    setVal(e.target.value); 
  };

  const submitHandler=()=>{
    console.log("clicked");
    setsub(val);
  };

  return (
    <div style={{margin:'180px'}}>
         <br/><br/><br/>
        <br/><Typography variant='h2'>Welcome to {sub} </Typography>
        <br/>
        <TextField variant="outlined" onChange={handleInput}/>&nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={submitHandler}>submit</Button>&nbsp;&nbsp;&nbsp; 


    </div>

  )
}

export default StateBasics