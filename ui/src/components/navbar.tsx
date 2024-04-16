import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul className='menubar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">SignUp</Link></li>
    </ul>
    </>
  )
}

export default Navbar