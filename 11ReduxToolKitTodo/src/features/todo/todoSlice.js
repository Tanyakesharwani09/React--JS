import {createSlice , nanoid } from '@reduxjs/toolkit';
//nanoid --> unique ids generate krta h
// createSlice -->
// It helps you:
// Define the name of your slice (like “counter” or “todos”)
// Set the initial state
// Write reducers with simpler syntax (you can "mutate" state directly thanks to Immer)
// Automatically generate action creators


//initialState can be array or can be object , but object can take multiple values
const initialState = {
    todos:[{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    //'name' is imp and its property name
    name:'todo' , 
    initialState,
    reducers: { //reducers have properties and functions
        addTodo: (state , action) => { //two paramerter 
            const todo ={
                id :nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, //always 2 parameter
        removeTodo:(state, action) =>{
            state.todos = state.todos.filter((todo) =>todo.id !== action.payload)
        },
    }
})

export const {addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer
