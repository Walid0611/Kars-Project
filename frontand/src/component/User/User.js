import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'









const User = ({auth }) => {
  return (
     <div className='navMenu'>
      <span>{auth}</span>

      <nav className='navbar'>
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

export default User