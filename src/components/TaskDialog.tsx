import React from "react";
import { useForm } from "react-hook-form";

interface TaskDialogProps {
  setIsOpen: (open: boolean) => void;
  setTodo: React.Dispatch<React.SetStateAction<string[]>>;
  todo: string[];
}

interface FormData {
  task: string;
}

const TaskDialog: React.FC<TaskDialogProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    props.setTodo([...props.todo, data.task]);
    reset(); // clear form
    props.setIsOpen(false);
  };

  return (
    <div className="w-full h-screen bg-black/50 absolute inset-0">
      <div className="max-w-sm flex flex-col justify-between mx-auto h-[230px] mt-20 bg-white border border-sky-800 shadow-md rounded-sm px-3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full">
          <div className="mx-auto w-full mt-2">
            <h2 className="text-xl font-bold text-center">New Note</h2>
            <input
              className="w-full mt-2 py-1 px-2 outline-1 outline-sky-800 rounded-sm shadow-md"
              placeholder="Enter your task..."
              {...register("task", { required: "Task is required" })}
            />
            {errors.task && (
              <p className="text-red-500 text-xs mt-1">{errors.task.message}</p>
            )}
          </div>
          <div className="mb-5 mx-10 flex flex-row justify-between">
            <button
              type="button"
              className="text-sky-800 py-1 px-3.5 rounded-sm text-sm font-extralight border border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
              onClick={() => props.setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sky-800 py-1 px-3.5 rounded-sm text-sm font-extralight border border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDialog;
