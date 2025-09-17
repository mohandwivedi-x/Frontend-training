import { createContext } from "react";
import type { TodoContextType } from "../types/todoContextType"; // adjust path if needed

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default TodoContext;
