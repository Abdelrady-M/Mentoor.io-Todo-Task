import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { SyncLocalStorage } from "./Slicers/todoSlice";

export const store = configureStore({
    reducer:{
        todos: todoReducer  
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SyncLocalStorage),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;