import { useForm, Controller } from "react-hook-form";
import { Dropdown } from "./DropDown";
import { Calendar } from "./Calendar";
import type { FormData } from "../types/types";
import { useTodo } from "@/hooks/useTodo";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "@/features/todo.slice";

const status = ["Inprogress", "Completed", "Timeout"];
const priority = ["Low", "Medium", "High"];

const TaskDialog = () => {
  const dispatch = useDispatch();

  const { setIsEdit, formData, setFormData } = useTodo();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: formData ? formData.title : "",
      description: formData ? formData.description : "",
      date: formData ? formData.date : undefined,
      status: formData ? formData.status : undefined,
      priority: formData ? formData.priority : undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    if (formData) {
      dispatch(updateTodo({ id: formData.id, ...data }));
    } else {
      dispatch(addTodo(data));
    }
    reset();
    if (formData) setFormData(undefined);
    setIsEdit(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40 p-2 sm:p-4">
      <div
        className="
        w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl
        h-[85vh] sm:h-[500px] md:h-[550px]
        flex flex-col justify-between
        mx-auto bg-white border border-sky-800 shadow-md rounded-md
        px-4 sm:px-6 md:px-8
        overflow-y-auto
      "
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <div className="mx-auto w-full mt-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
              New Note
            </h2>

            {/* Title */}
            <div className="my-2">
              <h5 className="text-xs sm:text-sm">Title</h5>
              <input
                className="w-full mt-1 py-1 px-2 outline-1 outline-sky-800 rounded-sm shadow-md text-xs sm:text-sm"
                placeholder="Enter your title..."
                {...register("title", { required: "Task title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="my-2 mt-5">
              <h5 className="text-xs sm:text-sm">Description</h5>
              <textarea
                className="w-full mt-1 py-1 px-2 outline-1 outline-sky-800 rounded-sm shadow-md text-xs sm:text-sm h-[80px] sm:h-[100px] md:h-[120px]"
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

          {/* Controls (Date, Status, Priority) */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-2">
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
                  date={new Date(field.value)}
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
                validate: (value) => {
                  if (
                    !formData &&
                    (value === "Completed" || value === "Timeout")
                  ) {
                    return "Status cannot be Completed or Timeout when creating a new title";
                  }
                  return true;
                },
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

          {/* Footer Buttons */}
          <div className="mb-5 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
            <button
              type="button"
              className="w-full sm:w-auto text-sky-800 py-1 px-3.5 rounded-sm text-sm font-medium border border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
              onClick={() => {
                reset();
                // setFormData(undefined);
                setIsEdit(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto text-sky-800 py-1 px-3.5 rounded-sm text-sm font-medium border border-sky-800 hover:bg-sky-800 hover:text-white shadow-md"
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
