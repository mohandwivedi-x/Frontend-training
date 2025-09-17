import React, { useState, type ReactNode } from "react";
import TodoContext from "./todoContext";
import type { FormData } from "../types/types"; // adjust path as needed

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodoContextProvider: React.FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [todos, setTodos] = useState<FormData[]>([]);
  const [editTask, setEditTask] = useState<FormData | undefined>(undefined);
  const [searchKey, setSearchKey] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TodoContext.Provider value={{ todos, setTodos, editTask, setEditTask, searchKey, setSearchKey, filterValue, setFilterValue, isOpen, setIsOpen}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
