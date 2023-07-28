import { createSlice } from "@reduxjs/toolkit";
const KarsSlice = createSlice({


    name:"KarsElement",

    initialState:[ {
       name:"kia ",
       series:"200/2023",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJjtqeWq9xHUkXl-ITUTVECmS4LK5vE2v6g&usqp=CAU",
        model:"2050",
        categories:"high Gamme"

        }],
   
 reducers:{
    setKars:(state,action)=>{
        return action.payload
    }
 }




})

export const { setKars } = KarsSlice.actions;
export default KarsSlice.reducer;