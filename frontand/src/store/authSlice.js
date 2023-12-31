import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const authSlice = createSlice({
    name:"auth",
    initialState:[{
        id:uuidv4(),
        UserName:"walid  ",
        email:"walid@gmail.com",
        password:"wa12345",
       role:"user"
    }],
    reducers:{
        setAuth:(state,action)=>{
            return action.payload
        }
    }
})

export const {setAuth} = authSlice.actions
export default authSlice.reducer
