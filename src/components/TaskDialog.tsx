import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Dropdown } from "./DropDown";
import { Calendar } from "./Calander";
import type { FormData } from "../types/types";
import { v4 as uuidv4 } from "uuid";

interface TaskDialogProps {
  setIsOpen: (open: boolean) => void;
  setTodo: React.Dispatch<React.SetStateAction<FormData[]>>;
  todo: FormData[];
  formData: FormData | undefined;
}

const status = ["Inprogress", "Completed", "Timeout"];

const priority = ["Low", "Medium", "High"];

const TaskDialog: React.FC<TaskDialogProps> = ({
  todo,
  setIsOpen,
  setTodo,
  formData,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      task: formData ? formData.task : "",
      description: formData ? formData.description : "",
      date: formData ? formData.date : undefined,
      status: formData ? formData.status : undefined,
      priority: formData ? formData.priority : undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    let updatedTodos;
    if (formData) {
      updatedTodos = todo.map((t) =>
        t.id === formData.id ? { ...t, ...data } : t
      );
    } else {
      const id = uuidv4();
      updatedTodos = [...todo, { ...data, id }];
    }

    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    reset();
    setIsOpen(false);
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
                {...register("task", {
                  required: "Task title is required",
                })}
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
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <Controller
              name="date"
              control={control}
              rules={{
                required: "Date is required",
                validate: (value) =>
                  new Date(value) > new Date() ||
                  "Please select a valid future date",
              }}
              render={({ field }) => (
                <Calendar
                  date={field.value}
                  setDate={field.onChange}
                  title="Date"
                  color={errors.date ? "bg-red-400" : ""}
                />
              )}
            />
            <Controller
              name="status"
              control={control}
              rules={{
                required: "Status is required",
                validate: (value) =>
                  (value !== "Completed" && value !== "Timeout") ||
                  "Status can not be completed or Timeout",
              }}
              render={({ field }) => (
                <Dropdown
                  value={field.value}
                  setValue={field.onChange}
                  options={status}
                  title="Status"
                  color={errors.status ? "bg-red-400" : ""}
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
                  color={errors.priority ? "bg-red-400" : ""}
                />
              )}
            />
          </div>
          <div className="mb-5  flex flex-row justify-between">
            <button
              type="submit"
              className="text-sky-800 py-1 px-3.5 rounded-sm text-sm font-medium border border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
              onClick={() => {
                setIsOpen(false);
                reset();
              }}
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
