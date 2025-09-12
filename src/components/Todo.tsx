import { MdOutlineDeleteForever } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { useState, useEffect, useRef } from "react";
import type { FormData } from "../types/types";

function Todo({ todo }: { todo: FormData }) {
  const [isEdit, setIsEdit] = useState(true);
  const [isDlt, setIsDlt] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && !isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <div className="flex mt-5 w-full px-5">
      <div
        className={`my-2 w-full flex items-center py-1 px-2 rounded-xs ${
          !isDlt && isComplete
            ? "border-b border-green-600"
            : isDlt
            ? "border-b border-red-600"
            : "border-b border-sky-600"
        } `}
      >
        {/* ✅ Checkbox for marking complete */}
        <input
          type="checkbox"
          value={todo.task}
          className="mr-2 cursor-pointer w-8 h-8 outline-none border border-sky-800"
          checked={isComplete}
          disabled={isDlt} // can’t complete if deleted
          onChange={() => setIsComplete(!isComplete)}
        />

        <input
          ref={inputRef}
          className={`w-full outline-none py-1 ${
            isDlt
              ? "line-through text-red-500"
              : isComplete
              ? "line-through text-green-500"
              : ""
          }`}
          disabled={isEdit || isComplete || isDlt}
          placeholder="Enter your tasks"
          value={todo.task}
        />
      </div>

      {/* Edit Button */}
      <button
        disabled={isDlt || isComplete}
        className="ml-1 my-2 w-20 rounded-sm text-xs cursor-pointer hover:border hover:border-sky-800"
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        <VscEdit className="mx-auto text-xl" />
        Edit
      </button>

      {/* Delete Button */}
      <button
        className="ml-1 my-2 w-20 rounded-sm text-xs cursor-pointer hover:border hover:border-sky-800"
        onClick={() => {
          setIsDlt(!isDlt);
        }}
      >
        <MdOutlineDeleteForever className="mx-auto text-xl" />
        Delete
      </button>
    </div>
  );
}

export default Todo;
