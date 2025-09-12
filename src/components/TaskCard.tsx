import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import type { FormData }  from '../types/types';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

const TaskCard = ({
  todo,
  setTodo,
  onEdit,
}: {
  todo: FormData;
  setTodo: React.Dispatch<React.SetStateAction<FormData[]>>
   onEdit: (task: FormData) => void;
}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const sliceText = (title: string, length: number) => {
    return title.length < length ? title : title.slice(0, length).trim() + "...";
  };

  const dateConvert = (date: Date | string) => {
    return new Date(date).toLocaleDateString(); 
  };

  const deleteTodo = (id: string) => {
    const storedTodos = localStorage.getItem("todos");
    const todos: FormData[] | null = storedTodos ? JSON.parse(storedTodos) : null;
    const updatedTodos = todos?.filter((todo) => todo.id !== id);
    setTodo(updatedTodos!);
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="w-full flex flex-col justify-between">
      <div
        className="bg-slate-100 mx-3 rounded-sm shadow-md px-3"
        // onClick={() => setIsCardOpen(true)}
      >
        <div className="flex flex-row justify-between mt-2">
          <h5
            className={`px-3 text-sm rounded-md ${
              todo.priority === "Low"
                ? "bg-yellow-500/20 text-yellow-600"
                : todo.priority === "Medium"
                ? "bg-green-400/20 text-green-700"
                : "bg-red-400/20 text-red-700"
            }`}
          >
            {todo.priority}
          </h5>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="max-h-[6px] cursor-pointer">
                <VscThreeBars/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-16 bg-white gap-3 rounded-sm text-sm font-light shadow-md">
              <DropdownMenuRadioGroup>
                <button
                  onClick={() => onEdit(todo)}
                  className="w-full px-2 py-1 hover:bg-blue-100 text-blue-600 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="w-full px-2 py-1 hover:bg-red-100 text-red-600 cursor-pointer"
                >
                  Delete
                </button>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button className="flex flex-col text-left mt-3 cursor-pointer" onClick={() => setIsCardOpen(true)}>
          <h2 className="text-md font-medium">{sliceText(todo.task, 25)}</h2>
          <p className="text-xs font-extralight">
            {sliceText(todo.description, 80)}
          </p>
        </button>
        <div className="text-left mb-2">
          <label className="text-xs font-bold text-slate-500">
            Deadline: {dateConvert(todo.date)}
          </label>
        </div>
      </div>
      {isCardOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          {/* Card Popup */}
          <div className="h-[400px] w-sm flex flex-col justify-between bg-slate-100 rounded-lg shadow-xl px-6 py-5 relative">
            {/* Close button */}
            <button
              onClick={() => setIsCardOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex flex-row justify-between items-center">
              <h5
                className={`px-4 py-1 text-sm rounded-md font-medium ${
                  todo.priority === "Low"
                    ? "bg-yellow-500/20 text-yellow-700"
                    : todo.priority === "Medium"
                    ? "bg-green-400/20 text-green-700"
                    : "bg-red-400/20 text-red-700"
                }`}
              >
                {todo.priority}
              </h5>
            </div>

            {/* Task content */}
            <div className="flex flex-col text-left mt-4 flex-grow">
              <label className="text-lg font-bold text-gray-700">Title:</label>
              <h2 className="text-md font-semibold mb-2 text-gray-600">
                {todo.task}
              </h2>
              <label className="text-lg font-bold text-gray-700">
                Description:
              </label>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                {todo.description}
              </p>
            </div>

            {/* Footer */}
            <div className="text-left mt-4">
              <label className="text-sm font-bold text-gray-600">
                Deadline: {dateConvert(todo.date)}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
