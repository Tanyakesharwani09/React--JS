import { createContext , useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "msg todo",
            completed:false
        }
    ],
    addTodo: (todo) =>{},
    deleteTodo:(id , todo) =>{},
    updateTodo:(id) =>{},
    toggleTodo:(id) =>{}
})

export const useTodo=() =>{
    return useTodo(TodoContext)
}

export const TodoProvider = TodoContext.Provider
