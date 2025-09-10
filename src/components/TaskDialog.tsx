import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Dropdown } from "./DropDown";
import { Calendar } from "./Calander";
import type { FormData } from "../types/types";

interface TaskDialogProps {
  setIsOpen: (open: boolean) => void;
  setTodo: React.Dispatch<React.SetStateAction<FormData[]>>;
  todo: FormData[];
}


const status = ["Inprogress", "Completed", "Timeout"];

const priority = ["Low", "Medium", "High"];



const TaskDialog: React.FC<TaskDialogProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>();
  

  const onSubmit = (data: FormData) => {
    const newTodos = [...props.todo, data]
    console.log("data", data);
    props.setTodo(newTodos);
    reset(); // clear form
    props.setIsOpen(false);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="max-w-sm flex flex-col justify-between mx-auto h-[400px] bg-white border border-sky-800 shadow-md rounded-sm px-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <div className="mx-auto w-full mt-2">
            <h2 className="text-xl font-bold text-center">New Note</h2>
            <div className="my-2">
              <h5 className="text-sm ">Title</h5>
              <input
                className="w-full mt-1 py-1 px-2 outline-1 outline-sky-800 rounded-sm shadow-md text-sm "
                placeholder="Enter your task..."
                {...register("task", { required: "Task is required" })}
              />
              {errors.task && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.task.message}
                </p>
              )}
            </div>
            <div className="my-2 mt-5">
              <h5 className="text-sm ">Description</h5>
              <textarea
                className="w-full mt-1 py-1 px-2 outline-1 outline-sky-800 rounded-sm shadow-md text-sm h-[100px]"
                placeholder="Enter description..."
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.task && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.task.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <Controller
              name="date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <Calendar
                  date={field.value}
                  setDate={field.onChange}
                  title="Date"
                />
              )}
            />
            <Controller
              name="status"
              control={control}
              rules={{ required: "Status is required" }}
              render={({ field }) => (
                <Dropdown
                  value={field.value}
                  setValue={field.onChange}
                  options={status}
                  title="Status"
                />
              )}
            />
            <Controller
              name="priority"
              control={control}
              rules={{ required: "Priority is required" }}
              render={({ field }) => (
                <Dropdown
                  value={field.value}
                  setValue={field.onChange}
                  options={priority}
                  title="Priority"
                />
              )}
            />
          </div>
          <div className="mb-5  flex flex-row justify-between">
            <button
              type="button"
              className="text-sky-800 py-1 px-3.5 rounded-sm text-sm font-medium border border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
              onClick={() => props.setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sky-800 py-1 px-3.5 rounded-sm text-sm font-medium border border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
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
