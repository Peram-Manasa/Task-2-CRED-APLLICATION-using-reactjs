import { AppBar, Toolbar, Typography, styled} from '@mui/material'
import React from 'react'

function Bar() {
  const Header =styled(AppBar)
  `background:grey`
  const Tabs=styled(Typography)
  `font-size:25px;
  margin-right:30px
  `

 
   
  
  return (
    
  <Header position="static">
    <h1>FORM BY CRUD APPLICATION</h1>
   <Toolbar>
        <Tabs to="/">View</Tabs>
        <Tabs to="/AllUsers">All Users</Tabs>
        <Tabs to="/AddUser">All Add</Tabs>
    </Toolbar>
</Header>
  
  )
}

export default Bar