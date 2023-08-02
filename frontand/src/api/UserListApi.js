import axios from 'axios'

//===>  //http://localhost:3002/auth/users
export const fetchAllUsers= async()=>
{
    const {data}= await axios.get('http://localhost:3002/auth/users');

return data;

} 
//===> //http://localhost:3002/auth/deleteUser
export const  deleteUser=async(id)=>{
    const deleteUser = await axios.delete(`http://localhost:3002/auth/deleteUser/${id}`);

}

//===> //http://localhost:3002/auth/UpdateUser
export const  UpdateUser=async(id,values)=>{
    const UpdateUser = await axios.put(`http://localhost:3002/auth/UpdateUser/${id},value`);

}