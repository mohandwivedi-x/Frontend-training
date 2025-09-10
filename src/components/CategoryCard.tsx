import React from 'react'
import TaskCard from './TaskCard'
import type { FormData } from "@/types/types";

const CategoryCard = ({ title, todo }: { title: string; todo: FormData[] }) => {

  const filteredTodos = todo.filter((t) => t.status === title);

  return (
    <div className="w-full h-[480px] text-center bg-slate-200 mt-5 rounded-sm shadow-md">
      <h2 className="text-md font-bold my-2">{title}</h2>
      <div className="space-y-2 px-2">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((t) => <TaskCard todo={t} />)
        ) : (
          <p className="text-gray-500 text-sm">No tasks</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCard