import { useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import TaskDialog from "./TaskDialog";
import type { FormData } from "../types/types";
import CategoryCard from "./CategoryCard";
import { CircleCheckBig, NotepadText, ShieldAlert } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTodo } from "@/hooks/useTodo";
import { useLocation } from "react-router-dom";

function Home() {
  let totalTodos: number = 0;
  let totalCompleted: number = 0;
  let totalExpired: number = 0;
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");

  const fetchData = async () => {
    if (!code) return;

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/github/login?code=" + code
      );
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.error("Error fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("code", code);
  const {
    todos,
    setTodos,
    filterValue,
    setFilterValue,
    searchKey,
    setSearchKey,
    isOpen,
    setIsOpen,
  } = useTodo();

  const statusCategory = ["Inprogress", "Completed", "Timeout"];
  const filters = ["All", "Low", "Medium", "High"];
  useEffect(() => {
    try {
      fetchData();
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        const parsed = JSON.parse(storedTodos);

        // Validate if parsed is actually an array
        if (!Array.isArray(parsed)) {
          throw new Error("Invalid todos format in localStorage");
        }
        setTodos(parsed);
      }
    } catch (error) {
      console.error("Failed to load todos from localStorage:", error);
      setTodos([]); // fallback to empty list
    }
  }, []);

  totalTodos = todos.length;
  totalCompleted = todos.filter(
    (t: FormData) => t.status === "Completed"
  ).length;
  totalExpired = todos.filter((t: FormData) => t.status === "Timeout").length;

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full">Loading...</div>
      ) : (
        <div className="flex text-start pt-5 ml-5">
          <div className=" w-1/5 flex flex-col pt-10 gap-3 mx-3">
            <div className="h-[150px] w-full flex flex-row justify-center gap-10 items-center bg-slate-100 rounded-sm shadow-md px-3">
              <ShieldAlert size={60} color="red" className="mt-2" />
              <div className="mt-4">
                <h2 className="text-md text-gray-500">Expired Tasks</h2>
                <h2 className="text-3xl font-bold">{totalExpired}</h2>
              </div>
            </div>
            <div className="h-[150px] w-full flex flex-row justify-center gap-10 items-center bg-slate-100 rounded-sm shadow-md px-3">
              <NotepadText size={60} color="orange" className="mt-2" />
              <div className="mt-3">
                <h2 className="text-md text-gray-500">All Active Tasks</h2>
                <h2 className="text-3xl font-bold">{totalTodos}</h2>
              </div>
            </div>
            <div className="h-[150px] w-full flex flex-row justify-center gap-10 items-center bg-slate-100 rounded-sm shadow-md px-3">
              <CircleCheckBig size={60} color="blue" className="mt-2" />
              <div className="mt-2">
                <h2 className="text-md text-gray-500">Completed Tasks</h2>
                <h2 className="text-3xl font-bold">{totalCompleted}</h2>
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
          <div className="w-full h-screen relative px-5">
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
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-[89px] bg-sky-800 text-white py-1 px-2 rounded-sm text-md font-medium border-1 border-sky-900 hover:bg-white hover:text-sky-800 shadow-md"
                        >
                          {filterValue}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-24 bg-white gap-3 rounded-sm shadow-md">
                        <DropdownMenuRadioGroup
                          value={filterValue}
                          onValueChange={setFilterValue}
                        >
                          {filters.map((value) => (
                            <DropdownMenuRadioItem
                              value={value}
                              className="px-2 hover:bg-gray-100"
                            >
                              {value}
                            </DropdownMenuRadioItem>
                          ))}
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="flex justify-between w-full gap-3">
                  {statusCategory.map((value, index) => (
                    <CategoryCard title={value} key={index} />
                  ))}
                </div>
              </div>
            </div>
            {isOpen && <TaskDialog setIsOpen={setIsOpen} />}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
