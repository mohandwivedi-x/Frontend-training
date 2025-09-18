import React, { useState, type ReactNode } from "react";
import TodoContext from "./todoContext";
import type { FormData } from "@/types/types";

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodoContextProvider: React.FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [searchKey, setSearchKey] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<FormData | undefined>(undefined);

  return (
    <TodoContext.Provider value={{searchKey, setSearchKey, filterValue, setFilterValue, isEdit, setIsEdit, formData, setFormData}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
