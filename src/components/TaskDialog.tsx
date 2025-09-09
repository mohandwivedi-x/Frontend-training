import React, { useState } from "react";

interface TaskDialogProps {
  setIsOpen: (open: boolean) => void;
  setTodo: React.Dispatch<React.SetStateAction<string[]>>;
  todo: string[];
}

const TaskDialog: React.FC<TaskDialogProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full h-screen bg-black/50 absolute inset-0 ">
      <div className="max-w-sm flex flex-col justify-between mx-auto h-[230px] mt-20 bg-white border border-sky-800 shadow-md rounded-sm px-3">
        <div className="mx-auto w-full mt-2">
          <h2 className="text-xl font-bold text-center">New Note</h2>
          <input
            className="w-full mt-2 py-1 px-2 outline-1 outline-sky-800 rounded-sm shadow-md"
            placeholder="Enter your task..."
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
        </div>
        <div className="mb-5 mx-10 flex flex-row justify-between">
          <button
            className="text-sky-800 py-1 px-3.5 rounded-sm text-sm font-extralight border-1 border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
            onClick={() => {
              props.setIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            disabled={inputValue === ""}
            className="text-sky-800 py-1 px-3.5 rounded-sm text-sm font-extralight border-1 border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
            onClick={() => {
              props.setTodo([...props.todo, inputValue]);
              setInputValue("");
              props.setIsOpen(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDialog;
