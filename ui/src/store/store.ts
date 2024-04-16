import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/userslices'
export default configureStore({
    reducer:{
        users:userReducer
    }
})