import { configureStore } from '@reduxjs/toolkit';
import postListReducer from './postSlice'

const store = configureStore({
    reducer:{
        postListReducer
    },
});

export default store;