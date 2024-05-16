
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const Viewdata = () => {
    var[user,setuser]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/")
    .then((response)=>{
        console.log(response.data)
        setuser(response.data)

    },[])
    
    })
    return (
    <div>
        <TableContainer>
        <Table>
            <TableHead>
                <TableCell><h2>NAME</h2></TableCell>
                <TableCell><h2>USERNAME</h2></TableCell>
                <TableCell><h2>CITY</h2></TableCell>
            </TableHead>
            <TableBody>
                {user.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.address.city}</TableCell>
                            </TableRow>
                    )
                    

                })}
             </TableBody>

        </Table>
      </TableContainer>

    </div>
  )
}

export default Viewdata