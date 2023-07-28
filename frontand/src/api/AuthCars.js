import axios from 'axios'

export const fetchAllCars = async()=>{
    const {data} = await axios.get('http://localhost:3002/booking/getAll')
    return data 

}

export const PostCars =async (values)=>{
    const AddCars = await axios.post('http://localhost:3002/booking/addbooking',{...values})
    return AddCars.data;
}