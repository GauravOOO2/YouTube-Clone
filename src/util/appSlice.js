import { createSlice } from "@reduxjs/toolkit";

 const appslice =  createSlice({
    name:'app',
    initialState: {
        isMenuOpen:true,
        searchText:''
    },
    reducers:{
        toggleMenu:(state, action)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        addSearchText:(state , action)=>{
            state.searchText = action.payload
        }
    }
 })


 export default appslice.reducer;
 export const  {toggleMenu, addSearchText} = appslice.actions 
 


