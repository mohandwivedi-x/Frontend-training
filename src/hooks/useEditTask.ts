// useTodo.ts
import TodoContext from "@/context/todoContext";
import type { TodoContextType } from "@/types/todoContextType";
import { useContext } from "react";

export const useEditTask = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoContextProvider");
  }
  return context;
};
