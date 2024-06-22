import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { ITodo } from "../../../interfaces";


const initialState: ITodo[] = [{
    id: 1,
    title: "React [Mongez]",
    completed: true
}]

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<ITodo>) => {
            state.push(action.payload)
        },
        toggleTodo: (state, action:PayloadAction<number>) => {
            const index = state.findIndex((todo) => todo.id === action.payload)
            state[index].completed = !state[index].completed
        },
        removeTodo: (state, action:PayloadAction<number>) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action:PayloadAction<{id:number, title:string}>) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].title = action.payload.title
        }

    }

})
// LocalStorage


export const { addTodo, toggleTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer