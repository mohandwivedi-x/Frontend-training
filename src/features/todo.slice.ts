import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadTodos, saveTodos } from "../utils/localStorage";
import type { FormData } from "@/types/types";

const initialState = {
  todos: loadTodos(), // Load from localStorage at startup
};

export const todoSlice = createSlice({
  name: "todos-mast",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        ...action.payload,
      };
      state.todos.push(todo);
      saveTodos(state.todos); // Save to localStorage
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo: FormData) => todo.id !== action.payload);
      saveTodos(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, ...changes } = action.payload;
      const index = state.todos.findIndex((todo: FormData) => todo.id === id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...changes };
        saveTodos(state.todos);
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
