import { createSlice } from "@reduxjs/toolkit";

const ListUserSlice = createSlice({
    name:"UserElement",
    initialState:[{
       
        UserName:"user1 ",
        email:"user1@gmail.com",
        password:"wa12345",
       role:"user"
    },
{
    UserName:"user2  ",
    email:"user2@gmail.com",
    password:"12345678",
   role:"user"

}
],
    reducers:{
        setListUser:(state,action)=>{
            return action.payload
        }
    }
})

export const { setListUser} = ListUserSlice.actions
export default ListUserSlice.reducer