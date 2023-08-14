import axios from 'axios'

export const fetchAllCars = async()=>{
    const {data} = await axios.get('http://localhost:3002/booking/getAll')
    return data 

}

export const PostCars =async (values)=>{
    const AddCars = await axios.post('http://localhost:3002/booking/addbooking',values)

}

//===> //http://localhost:3002/auth/UpdateKarrs
export const UpdateKarrs = async (id, values) => {
    const UpdateKarrs = await axios.put('http://localhost:3002/booking/updatedBooking/${id}', values)
  }

  export const DeleteCar = async (id) => {
  await axios.delete(`http://localhost:3002/booking/deleteBooking/${id}`);
};