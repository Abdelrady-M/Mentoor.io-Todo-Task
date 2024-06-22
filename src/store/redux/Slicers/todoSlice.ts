import { createSlice, PayloadAction, Middleware  } from "@reduxjs/toolkit";
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
        },
        setTodos: (state, action:PayloadAction<ITodo[]>) => {
            state.splice(0, state.length, ...action.payload)
        },
    }

})
// LocalStorage

export const SyncLocalStorage: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    console.log("[Sync...] ", store.getState().todos);
    localStorage.setItem("redux", JSON.stringify(store.getState().todos));
    return result;
  };

export const { addTodo, toggleTodo, removeTodo, updateTodo, setTodos } = todoSlice.actions

export default todoSlice.reducer