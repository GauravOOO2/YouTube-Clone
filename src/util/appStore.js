import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"; 
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

 const appStore =  configureStore({
    reducer:{
        app:appSlice,
        videos:videoSlice,
        search: searchSlice,
        chat: chatSlice
    }
 })

 export default appStore