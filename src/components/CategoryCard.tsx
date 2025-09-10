import React from "react";
import TaskCard from "./TaskCard";
import type { FormData } from "@/types/types";

const CategoryCard = ({
  title,
  todo,
  searchKey,
  filterValue,
}: {
  title: string;
  todo: FormData[];
  searchKey: string;
  filterValue: string;
}) => {
  const searched = todo.filter((todo) =>
    todo.task.toLowerCase().includes(searchKey.toLowerCase())
  );

  const priorityFiltered =
    filterValue === "All"
      ? searched
      : searched.filter((t) => t.priority === filterValue);

  const finalTodos = priorityFiltered.filter((t) => t.status === title);

  return (
    <div className="w-full h-[480px] text-center bg-slate-200 mt-5 rounded-sm shadow-md">
      <h2 className="text-md font-bold my-2">{title}</h2>
      <div className="space-y-2 px-2">
        {finalTodos.length > 0 ? (
          finalTodos.map((t) => <TaskCard todo={t} />)
        ) : (
          <p className="text-gray-500 text-sm">No tasks</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
