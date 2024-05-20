import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h4">BLOG</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/reg'   >HOME</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/t'      >BLOG FORM</Link> </Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar