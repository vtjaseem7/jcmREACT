import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <br/><br/><br/>
            <TableContainer>
                <Table>
                    <TableHead><br></br>
                        <TableRow>
                            <TableCell><h2>User ID</h2></TableCell>
                            <TableCell><h2>ID</h2></TableCell>
                            <TableCell><h2>Title</h2></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((val, i) => (
                            <TableRow key={i}>
                                <TableCell>{val.userId}</TableCell>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default Viewdata