import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlicer from "./slice"

let rootReducers = combineReducers({
    
    cartSlicer
})

let store = configureStore({
    reducer:{
        rootReducers
    }
})

export default store