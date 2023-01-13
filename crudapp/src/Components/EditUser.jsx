
// import { FormGroup, FormControl, InputLabel, Input, Typography,Button,styled } from '@mui/material'
// import React from 'react'
// import {useState,useEffect} from 'react'
// import {getUser,editUser } from '../Services/api'
// import { useNavigate,useParams } from 'react-router-dom'

// const Container = styled(FormGroup)
// `width:50%;
// margin:5% auto 0 auto;
//   & > div
// {
//     margin-top:20px
// }
// `
// const  initialValues = 
// {
//     name:'',
//     username:'',
//     email:'',
//     phoneNumber:''
// }

// function EditUser() {
//     const [user,setUser]= useState(initialValues);

//     const navigate =useNavigate();
//     const {id}= useParams();

//     useEffect(()=>
//     {

//         getUserData();
//     },[])

//     const getUserData = async() =>
//     {
//        let res = await getUser(id)
//        setUser(res.data)
//     }

// const onValueChange = (e) =>
// {

//     setUser({...user, [e.target.name]:e.target.value})
//     console.log(user);
// }

// const addUserDetails = async()=> 
// {
//    editUser(user,id);
//    navigate('/AllUsers');
// }

//   return (
//   <>
//   <Container>
//     <Typography variant="h4">Edit User</Typography>
//     <FormControl>
//             <InputLabel>Name:</InputLabel>
//             <Input onChange={(e)=> onValueChange(e)} name="name" value={user.name}/>
//     </FormControl>
//     <FormControl>
//             <InputLabel>UserName</InputLabel>
//             <Input onChange={(e)=> onValueChange(e)} name="name" value={user.username}/>
//     </FormControl>
//     <FormControl>
//             <InputLabel>Email</InputLabel>
//             <Input onChange={(e)=> onValueChange(e)} name="name" value={user.email}/>
//     </FormControl>
//     <FormControl>
//             <InputLabel>Phone Number</InputLabel>
//             <Input onChange={(e)=> onValueChange(e)} name="name" value={user.phoneNumber}/>
//     </FormControl>
//     <FormControl>
//         <Button onClick={()=> addUserDetails()}  variant="contained">Add User</Button>
//     </FormControl>

//   </Container>
  
//   </>
//   )
// }

// export default EditUser


import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Services/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;


const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;