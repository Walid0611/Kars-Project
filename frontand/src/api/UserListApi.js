import axios from 'axios'

//===>  //http://localhost:3002/auth//users
export const fetchAllUsers= async()=>
{
    const {data}= await axios.get('http://localhost:3002/auth/users');

return data;

} 
//===> //http://localhost:4000/auth/deleteUser
export const  deleteUser=async(id)=>{
    const deleteUser = await axios.delete(`http://localhost:3002/auth/deleteUser/${id}`);

}