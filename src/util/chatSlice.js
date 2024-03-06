import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'Chat',
    initialState:{
        messages: []
    },
    reducers:{
        addmessages:(state, action)=>{
            state.messages.splice(25,1);
            state.messages.unshift(action.payload);
        }
    }
})


export default chatSlice.reducer;
export const {addmessages} = chatSlice.actions;