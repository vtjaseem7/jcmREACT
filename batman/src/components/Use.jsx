import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Use = () => {
    var[x,setx]=useState()
    const React=()=>{
        setx("React")
    }
    const angular=()=>{
        setx("angular")
    }
    const node=()=>{
        setx("node")
    }
    useEffect(()=>{
        React();
    },[])
  return (
    <div style={{margin:'120px'}}>
    
        <Typography variant='h3'>Welcome to {x} </Typography>
        <br/>
        <Button variant="contained" color="success" onClick={React}>React</Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="error" onClick={angular}>Angular</Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="success" onClick={node}>Node</Button>
        &nbsp;&nbsp;
        
    </div>
  )
}

export default Use
