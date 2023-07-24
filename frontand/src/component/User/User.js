import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'









const User = ({auth }) => {
  return (
     <div className='navMenu'>
      <span>{auth}</span>
      
      <nav className='navbar '>
       <a href='/Home'>home</a>
      
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