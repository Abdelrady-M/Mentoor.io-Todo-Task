import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slicers/todoSlice";

export const store = configureStore({
    reducer:{
        todos: todoSlice    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;