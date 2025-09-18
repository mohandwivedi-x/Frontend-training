import type { FormData } from "@/types/types";

// utils/localStorage.ts
export const loadTodos = () => {
  try {
    const todos = localStorage.getItem("todos");

    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error loading todos:", error);
    return [];
  }
};

export const saveTodos = (todos: FormData[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos:", error);
  }
};
