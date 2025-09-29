import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from "./amazonSlice"


 const store = configureStore({
    reducer: amazonReducer
})  

export default store