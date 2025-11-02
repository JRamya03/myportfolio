import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:"portfolio",
    initialState:{
        name:"ramya"
    },
    reducers:{
        updateName:(state,action)=>{
            state.name=action.payload
        }
    }
})
export default Slice.reducer

export const {updateName} = Slice.actions