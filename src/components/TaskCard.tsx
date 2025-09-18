import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import type { FormData } from "../types/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTodo } from "@/hooks/useTodo";
import { useDispatch } from "react-redux";
import { removeTodo } from "@/features/todo.slice";

const TaskCard = ({ todo }: { todo: FormData }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const dispatch = useDispatch();
  const sliceText = (title: string, length: number) =>
  title.length < length ? title : title.slice(0, length).trim() + "...";

  const dateConvert = (date: Date | string) =>
  new Date(date).toLocaleDateString();

  const { setIsEdit, setFormData } = useTodo();

  return (
    <div className="w-full flex flex-col justify-between">
      {/* Card */}
      <div className="bg-slate-100 mx-2 sm:mx-3 rounded-md shadow-md px-3 py-2">
        <div className="flex flex-row justify-between items-center mt-1">
          <h5
            className={`px-2 sm:px-3 text-xs sm:text-sm rounded-md ${
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
              <Button
                variant="link"
                className="h-auto p-1 text-gray-600 hover:text-black cursor-pointer"
              >
                <VscThreeBars size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-20 bg-white rounded-md text-xs sm:text-sm font-light shadow-md">
              <DropdownMenuRadioGroup>
                <DropdownMenuItem
                  onClick={() => {
                    setIsEdit(true);
                    setFormData(todo);
                  }}
                  className="w-full px-2 py-1 hover:bg-blue-100 text-blue-600 cursor-pointer"
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => dispatch(removeTodo(todo.id!))}
                  className="w-full px-2 py-1 hover:bg-red-100 text-red-600 cursor-pointer"
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Preview Section */}
        <button
          className="flex flex-col text-left mt-2 sm:mt-3 cursor-pointer"
          onClick={() => setIsCardOpen(true)}
        >
          <h2 className="text-sm sm:text-md font-medium">
            {sliceText(todo.title, 25)}
          </h2>
          <p className="text-xs sm:text-sm font-extralight">
            {sliceText(todo.description, 80)}
          </p>
        </button>
        <div className="text-left mt-1 mb-2">
          <label className="text-[10px] sm:text-xs font-bold text-slate-500">
            Deadline: {dateConvert(todo.date)}
          </label>
        </div>
      </div>

      {/* Fullscreen Popup */}
      {isCardOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-2 sm:p-4">
          <div
            className="
              w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl
              h-[80vh] sm:h-[450px] md:h-[500px]
              flex flex-col justify-between
              bg-slate-100 rounded-lg shadow-xl px-4 sm:px-6 py-4 sm:py-5
              relative overflow-y-auto
            "
          >
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
                className={`px-3 py-1 text-xs sm:text-sm rounded-md font-medium ${
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

            {/* Body */}
            <div className="flex flex-col text-left mt-4 flex-grow">
              <label className="text-sm sm:text-lg font-bold text-gray-700">
                Title:
              </label>
              <h2 className="text-sm sm:text-md font-semibold mb-2 text-gray-600">
                {todo.title}
              </h2>

              <label className="text-sm sm:text-lg font-bold text-gray-700">
                Description:
              </label>
              <p className="text-xs sm:text-sm font-light leading-relaxed text-gray-600">
                {todo.description}
              </p>
            </div>

            {/* Footer */}
            <div className="text-left mt-4">
              <label className="text-xs sm:text-sm font-bold text-gray-600">
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
