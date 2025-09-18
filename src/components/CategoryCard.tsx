import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import type { FormData } from "../types/types";
import { useTodo } from "@/hooks/useTodo";
import type { RootState } from "@/store/store";

const CategoryCard = ({ title }: { title: string }) => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const { searchKey, filterValue } = useTodo();

  const searched = todos.filter((todo: FormData) =>
    todo.title?.toLowerCase().includes(searchKey!.toLowerCase())
  );


  const priorityFiltered =
    filterValue === "All"
      ? searched
      : searched.filter((t: FormData) => t.priority === filterValue);

  const finalTodos = priorityFiltered.filter((t: FormData) => t.status === title);

  return (
    <div
      className="
        w-full 
        sm:w-[90%] md:w-[48%] lg:w-[32%] 
        min-h-[300px] md:min-h-[400px] lg:min-h-[480px] 
        text-center 
        bg-slate-200 
        rounded-md 
        shadow-md 
        flex flex-col
      "
    >
      <h2 className="text-md font-bold my-2">{title}</h2>

      {/* Scrollable list on smaller screens */}
      <div className="px-2 flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar">
        {finalTodos.length > 0 ? (
          finalTodos.map((t: FormData) => <TaskCard key={t.id} todo={t} />)
        ) : (
          <p className="text-gray-500 text-sm">No tasks</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
