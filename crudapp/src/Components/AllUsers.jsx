// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   styled,
//   Button
// } from "@mui/material";
// import React from "react";
// import { getUsers,deleteUser } from "../Services/api";
// import { useEffect, useState } from "react";
// import {Link}from "react-router-dom";


// const styledTable= styled(Table)
// `width:90%;
// margin:50px auto  0 auto;`

// const TBody =styled(TableRow)
// `background:voilet;
// & > td
// {
//     color:black;
//     font-size:20px;
// }
// `
// function AllUsers() {
//   const [users, setUsers] = useState({});
//   useEffect(() => {
//     getUserDetails();
//   }, []);

//   const getUserDetails = async () => {
//     let res = await getUsers();
//     console.log(res);
//     setUsers(res.data);
//   };
//   const deleteUserData = async()=>
//   {
//      await deleteUser(id);
//      getUserDetails();
//   }
//   return (
//     <styledTable>
//       <TableHead>
//         <Thead>
//           <TableCell>id</TableCell>
//           <TableCell>Name</TableCell>
//           <TableCell>userName</TableCell>
//           <TableCell>email</TableCell>
//           <TableCell>phoneNumber</TableCell>
//         </Thead>
//       </TableHead>

//       <TableBody>
//         {users.map((user) => (
//           <TBody>
//             <TableCell>{user.id}</TableCell>
//             <TableCell>{user.name}</TableCell>
//             <TableCell>{user.username}</TableCell>
//             <TableCell>{user.email}</TableCell>
//             <TableCell>{user.phoneNumber}</TableCell>
//             <TableCell>
//                 <Button variant ="contained" onClick={()=> deleteUserData(user.id)}>Delete</Button>
//                 <Button variant ="contained" color="primary" component={Link}  to={'/EditUser/${user.id'}>Edit</Button>
//             </TableCell>
//           </TBody>
//         ))}
//       </TableBody>
//     </styledTable>
//   );
// }

// export default AllUsers;





import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../Services/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;
