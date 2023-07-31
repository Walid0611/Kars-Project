import React,{useEffect, useState} from 'react'
import "./UpdateUser.css"
import {UpdateUser,getUniqueUser} from '../../../api/UserListApi'
import { useNavigate,useParams } from 'react-router';

const UpdateUser = () => {
  const [name,setName]=useState('')
const [categories,setEmail]=useState('')
const [series,setSeries]=useState(0)

const navigate = useNavigate()
const {id}=useParams()
const handelUpdate=async(icon,values)=>{
await UpdateUser(icon,values)
navigate('/list')
}


const getUniqueId=async(UserId)=>{
const data = await getUniqueUser(UserId)
console.log("data unique",data.getUniqueUser
)
setName(data.getUniqueUser.name)
setSeries(data.getUniqueUser.series)
setcategories(data.getUniqueUser.categories)


}
useEffect(()=>{
if(id){getUniqueId(id)}
},[id])
  return (
    <div> <div className='test'>
    <form   id="login-form" class="login-form" autocomplete="off" >
  <h1>Add contact Form</h1>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="email" placeholder="Name" tabindex="1" required  value={name} 
      onChange={(e)=>setName(e.target.value)}   />
      <span class="required">Name</span>
    </label>
  </div>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="age" placeholder="age" tabindex="1" required   value={age} 
      onChange={(e)=>setAge(e.target.value)} />
      <span class="required">Age</span>
    </label>
  </div>
  
  <div>
    <label class="label-password">
      <input type="text" class="text" name="Email" placeholder="Email" tabindex="2" required  value={email} 
      onChange={(e)=>setEmail(e.target.value)}  />
      <span class="required">Email</span>
    </label>
  </div>
  <div class="email">
    <a><button onClick={()=>handelUpdate(id,{name,age,email})} >Add New Kars</button></a>
  </div>

</form></div></div>
  )
}

export default UpdateUser