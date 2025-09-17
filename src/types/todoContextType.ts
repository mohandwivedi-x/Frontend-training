import type { Dispatch, SetStateAction } from "react";
import type { FormData } from "../types/types"; // adjust path as needed

export interface TodoContextType {
  todos: FormData[];
  editTask: FormData | undefined;
  setEditTask: Dispatch<SetStateAction<FormData | undefined>>;
  setTodos: Dispatch<SetStateAction<FormData[]>>;
  searchKey: string | undefined;
  setSearchKey:  Dispatch<SetStateAction<string>>;
  filterValue: string | undefined;
  setFilterValue: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
