import { createSlice } from "@reduxjs/toolkit";

const videoSlice =  createSlice({
    name:'videos',
    initialState:{
        MostViewedList: null
    },
    reducers:{
        updateMostViewedList:(state, action )=>{
            state.MostViewedList = action.payload
        },
    }
})


export default videoSlice.reducer;
export const {updateMostViewedList} = videoSlice.actions;