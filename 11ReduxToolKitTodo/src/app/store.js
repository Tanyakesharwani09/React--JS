import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; //where is todoReducer in todoSlice

export const store = configureStore({
    reducer:todoReducer
})