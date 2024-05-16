import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6">Home</Typography>
                <Typography variant="h6">Login</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/reg'   >ENTER</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/u'    >VISIT</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/v'   >COUNTER</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/t'   >USE</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/vd'   >DATA</Link></Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar