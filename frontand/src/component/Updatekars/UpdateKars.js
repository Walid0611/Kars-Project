import React,{useEffect, useState} from 'react'
import "./UpdateKars.css"
import {UpdateKarrs,getUniqueUser} from '../../api/UserListApi'
import { useNavigate,useParams } from 'react-router';



const UpdateKars = () => {
const [name,setName]=useState('')
const [categories,setCategories]=useState('')
const [series,setSeries]=useState(0)

const navigate = useNavigate();
const {id}=useParams()
console.log('ici',id)
const handelUpdate=async(idcon,values)=>{
await UpdateKars(idcon,values)
navigate('/list')
}


const getUniqueId=async(UserId)=>{
const data = await getUniqueUser(UserId)
console.log("data unique",data.getUniqueUser
)
setName(data.getUniqueUser.name)
setSeries(data.getUniqueUser.series)
setCategories(data.getUniqueUser.categories)


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
      <input type="text" class="text" name="categories" placeholder="categories" tabindex="1" required   value={categories} 
      onChange={(e)=>setCategories(e.target.value)} />
      <span class="required">categories</span>
    </label>
  </div>
  
  <div>
    <label class="label-password">
      <input type="text" class="text" name="series" placeholder="series" tabindex="2" required  value={      <span class="required">series</span>
} 
      onChange={(e)=>setSeries(e.target.value)}  />
      <span class="required">series</span>
    </label>
  </div>
  <div class="email">
    <a><button onClick={()=>handelUpdate(id,{name,categories,series})} >Update New Kars</button></a>
  </div>

</form></div></div>
  )
}

export default UpdateKars