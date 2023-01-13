import { TextFields } from '@mui/icons-material'
import { FormGroup, FormControl, InputLabel, Input, Typography,Button,styled } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import { addUser } from '../Services/api'
import { useNavigate } from 'react-router-dom'

const Container = styled(FormGroup)
`width:50%;
margin:5% auto 0 auto;
  & > div
{
    margin-top:20px
}
`
const  initialValues = 
{
    name:'',
    username:'',
    email:'',
    phoneNumber:''
}

function AddUser() {
    const [user,setUser]= useState(initialValues);

    const navigate =useNavigate();
const onValueChange = (e) =>
{

    setUser({...user, [e.target.name]:e.target.value})
    console.log(user);
}

const addUserDetails = async()=> 
{
   addUser(user);
   navigate('/AllUsers');
}

  return (
  <>
  <Container>
    <Typography variant="h4">Add User</Typography>
    <FormControl>
            <InputLabel>Name:</InputLabel>
            <Input onChange={(e)=> onValueChange(e)}/>
    </FormControl>
    <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=> onValueChange(e)}/>
    </FormControl>
    <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onValueChange(e)}/>
    </FormControl>
    <FormControl>
            <InputLabel>Phone Number</InputLabel>
            <Input onChange={(e)=> onValueChange(e)}/>
    </FormControl>
    <FormControl>
        <Button onClick={()=> addUserDetails()} variant="contained">Add User</Button>
    </FormControl>

  </Container>
  
  </>
  )
}

export default AddUser