import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar = (auth, logout,) => {
  return (
    <div className='navMenu'>
      <span>{auth.name}</span>
      
      <nav className='navbar '>
       <Link to='/KarsList'>home</Link>
      
       <a href='/contact'>contact</a>
      </nav>
      <div id="login-btn" >
      <i className='far fa-user'></i>
      
      </div>
      

<div>




</div>

      
    </div>
  )
}

export default Navbar
