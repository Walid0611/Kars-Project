import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  
const navigate= useNavigate()

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleLogin= async (values) => {

  try {

const res = await axios.post ('http://localhost:3002/auth/login', values)
console.log('res',res.data.token)



await localStorage.setItem('token',res.data.token)


navigate('/app/PrivateRoute');
  }catch (err){
    console.log(err)
    
  }
}


  return (
    <div>
    <div>
    <form className="form">
  <p className="title">Register </p>
  <p className="message">Signup now and get full access to our app. </p>
  <div className="flex" onClick="onClick" >
  </div>
  <label>
    <input required="" placeholder="email" type="email" className="input"
    value ={email}  onChange={(e)=>setEmail(e.target.value)}
    />
    <span>Email</span>
  </label>
  <label>
    <input required="" placeholder="password" type="password" className="input" 
    value ={password}  onChange={(e)=>setPassword(e.target.value)}
    />
    <span>Password</span>
  </label>
  
  <button className="submit" type='button'  onClick={()=>handleLogin({email,password})} >Submit</button>
  <p className="sign in">
    Already have an account ? <a href="Sign">Sign in</a>{" "}
  </p>
</form>

    </div>
    </div>
  )
}

export default Login