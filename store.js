import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './redux/CardReducer'
export default configureStore({
    reducer:{
        cart:CartReducer
    }
})