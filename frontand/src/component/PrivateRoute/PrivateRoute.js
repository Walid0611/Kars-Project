import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchAuthUser} from '../../api/authapi'
import { setAuth } from '../../api/authapi'
import { useDispatch, useSelector } from 'react-redux'

import Login from '../login/Login'
import Navbar from '../navbar/Navbar'
import User from '../User/ProfileUser'
import Admin from "../Admin/Admin"

const Privateroute = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const authUser = useSelector(state=>state.auth)
console.log('authUser',authUser)
 

const token= localStorage.getItem('token')



const getAuth = async ()=>{
    const data = await  fetchAuthUser()       
    console.log('data auth', data)
    dispatch(setAuth(data))        
  }

  useEffect (()=>{
    getAuth()
  },[])



const logout=()=>{
  localStorage.removeItem('token')
navigate('/login')
}



  return (
    <div>
      {token ? (
        <div>
          <Navbar auth={authUser} logout={logout} />

          {authUser.role === 'Admin' ? <Admin /> : <User />}
        </div>
      ) : (
        <login />
      )}
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Privateroute