import axios from 'axios'




 export const   postAuthUser= async(value)=>{
 const addUSer= await axios.post('http://localhost:3002/auth/register',{...value})

 }




 export const fetchAuthUser = async()=>{
    const token = localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:3002/auth/all', {headers:{Authorization:token}})
    return data
}
 