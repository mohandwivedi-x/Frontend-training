import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { VscSearch } from "react-icons/vsc";
import TaskDialog from "./TaskDialog";
import type { FormData } from "../types/types";
import CategoryCard from "./CategoryCard";
import { CircleCheckBig, NotepadText, ShieldAlert } from "lucide-react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [todo, setTodo] = useState<FormData[]>([]);
  const [searchKey, setSearchKey] = useState("");

  const statusCategory = ["Inprogress", "Completed", "Timeout"];

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className="flex text-start pt-8 ml-5">
      <div className=" w-1/5 flex flex-col pt-10 gap-3 mx-3">
        <div className="h-[150px] w-full flex flex-row justify-center gap-10 items-center bg-slate-100 rounded-sm shadow-md px-3">
          <ShieldAlert size={60} color="red" className="mt-2" />
          <div className="mt-4">
            <h2 className="text-md text-gray-500">Expired Tasks</h2>
            <h2 className="text-3xl font-bold">{"2"}</h2>
          </div>
        </div>
        <div className="h-[150px] w-full flex flex-row justify-center gap-10 items-center bg-slate-100 rounded-sm shadow-md px-3">
          <NotepadText size={60} color="orange" className="mt-2" />
          <div className="mt-3">
            <h2 className="text-md text-gray-500">All Active Tasks</h2>
            <h2 className="text-3xl font-bold">{"2"}</h2>
          </div>
        </div>
        <div className="h-[150px] w-full flex flex-row justify-center gap-10 items-center bg-slate-100 rounded-sm shadow-md px-3">
          <CircleCheckBig size={60} color="blue" className="mt-2" />
          <div className="mt-2">
            <h2 className="text-md text-gray-500">Completed Tasks</h2>
            <h2 className="text-3xl font-bold">{"2"}</h2>
          </div>
        </div>
        <div className="mx-2">
          <button
            className="w-full py-2 bg-sky-800 text-white px-3.5 rounded-sm text-sm font-extralight border-1 border-sky-900 hover:bg-white hover:text-sky-800 shadow-md"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add+
          </button>
        </div>
      </div>
      <div className="w-4/5 h-screen relative px-5">
        <div className="w-full h-screen flex flex-col items-center mx-auto">
          <h2 className="text-2xl font-bold">My Todos</h2>
          <div className="flex items-center flex-col w-full mt-2">
            <div className="flex gap-2 w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchKey}
                  placeholder="Search here..."
                  className="w-full py-1 px-2 outline-sky-800 border-1 border-sky-700 rounded-sm"
                  onChange={(e) => setSearchKey(e.target.value)}
                />
                <VscSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-sky-800" />
              </div>
              <Button
                type="submit"
                variant="outline"
                className="bg-sky-800 text-white py-1 px-3.5 rounded-sm text-sm font-extralight border-1 border-sky-900 hover:bg-white hover:text-sky-800 shadow-md"
                onClick={() => setSearchKey("")}
              >
                All
              </Button>
            </div>
            <div className="flex justify-between w-full gap-3">
              {statusCategory.map((value) => (
                <CategoryCard title={value} todo={todo} />
              ))}
            </div>

            {/* {filtered.map((todo) => (
            <Todo todo={todo} />
          ))} */}
          </div>
        </div>
        {isOpen && (
          <TaskDialog setIsOpen={setIsOpen} todo={todo} setTodo={setTodo} />
        )}
      </div>
    </div>
  );
}

export default Home;
