import type { Dispatch, SetStateAction } from "react";
import type { FormData } from "../types/types"; // adjust path as needed

export interface TodoContextType {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  searchKey: string | undefined;
  setSearchKey:  Dispatch<SetStateAction<string>>;
  filterValue: string | undefined;
  setFilterValue: Dispatch<SetStateAction<string>>;
  formData: FormData | undefined;
  setFormData: Dispatch<SetStateAction<FormData | undefined>>;
}
