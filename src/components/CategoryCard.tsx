import TaskCard from "./TaskCard";
import { useTodo } from "@/hooks/useTodo";

const CategoryCard = ({
  title,
}: {
  title: string;
}) => {
  const {todos, searchKey, filterValue} = useTodo();

  const searched = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchKey!.toLowerCase())
  );

  const priorityFiltered =
    filterValue === "All"
      ? searched
      : searched.filter((t) => t.priority === filterValue);

  const finalTodos = priorityFiltered.filter((t) => t.status === title);

  return (
    <div className="w-full h-[480px] text-center bg-slate-200 mt-5 rounded-sm shadow-md">
      <h2 className="text-md font-bold my-2">{title}</h2>
      <div className="px-2 flex flex-col gap-3">
        {finalTodos.length > 0 ? (
          finalTodos.map((t) => (
            <TaskCard key={t.id} todo={t}/>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No tasks</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
