import axios from 'axios'

export const fetchAllCars = async()=>{
    const {data} = await axios.get('http://localhost:3002/Cars/getAll')
    return data 

}

export const PostCars =async (values)=>{
    const AddCars = await axios.post('http://localhost:3002/Cars/AddCars',{...values})
    return AddCars.data;
}