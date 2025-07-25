import {configureStore} from '@reduxjs/toolkit'
import todoReducer from todoSlice
import { todoSlice } from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})