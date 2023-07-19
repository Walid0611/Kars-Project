import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  
const navigate= useNavigate()

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [err, setErr] = useState('');

const handleLogin= async (values) => {

  try {

const res = await axios.post ('http://localhost:4000/auth/login', values)
console.log('res',res.data.token)



await localStorage.setItem('token',res.data.token)


navigate('/app/PrivateRoute');
  }catch (err){
    console.log(err)
    setErr('Invalid email or password'); // Stockage du message d'erreur dans le hook d'état

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
    </div>
  )
}

export default Login