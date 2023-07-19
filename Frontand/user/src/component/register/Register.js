import React from 'react'
import './register.css'
import {useNavigate , } from 'react-router-dom'
import {useState}from 'react'



const Register = () => {

  
const [UserName,setUserName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


    
const navigate = useNavigate()
const login = async(value)=> {
  try{
  await  (value)
    navigate ('/login')
  } catch (err) {
    console.log(err)
  }
}

  return (
    <div>
    <form className="form">
  <p className="title">Register </p>
  <p className="message">Signup now and get full access to our app. </p>
  <div className="flex" onClick="onClick" >
    <label>
      <input required="" placeholder="" type="text" className="input" />
      <span>name</span>
    </label>
  
  </div>
  <label>
    <input required="" placeholder="email" type="email" className="input" />
    <span>Email</span>
  </label>
  <label>
    <input required="" placeholder="password" type="password" className="input" />
    <span>Password</span>
  </label>
  <label>
    <input required="" placeholder="" type="password" className="input" />
    <span>Confirm password</span>
  </label>
  <button className="submit">Submit</button>
  <p className="sign in">
    Already have an account ? <a href="Sign">Sign in</a>{" "}
  </p>
</form>

    </div>
  )
}

export default Register