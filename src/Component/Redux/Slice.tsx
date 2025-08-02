import { createSlice } from "@reduxjs/toolkit";
let initialState={ mode: localStorage.getItem("value")||"light" }
const Myslice=createSlice({
    name:"theme",
    initialState,
    reducers:{
   toggleTheme: (state,action) => {
      state.mode = action.payload
      localStorage.setItem("value",action.payload)
    },
    }

})

export const {toggleTheme}=Myslice.actions
export default Myslice.reducer