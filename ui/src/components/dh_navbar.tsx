import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DashBoardNavbar() {
 
  const storedUserName = localStorage.getItem('userName');
  
  return (
    <>
    <ul className='menubar'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Pro_Website</Link></li>
        <span className='usersDetails'>Hello! {storedUserName}</span>
        <li><Link to="/">Logout</Link></li>
    </ul>
    </>
  )
}

export default DashBoardNavbar