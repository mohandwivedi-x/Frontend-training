import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo.slice';
import authReducer from '../features/auth.slice';
import { saveTodos } from "../utils/localStorage";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});

// Subscribe to store updates
store.subscribe(() => {
  const state = store.getState();
  saveTodos(state.todos.todos); // access todos array
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
