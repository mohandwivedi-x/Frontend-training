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
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth.slice";

function Home() {
  let totalTodos: number = 0;
  let totalCompleted: number = 0;
  let totalExpired: number = 0;
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const state = params.get("state");

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const authenticate = async () => {
    setLoading(true);
    try {
      console.log("auth****** ",isAuthenticated);
      if (isAuthenticated) {
        console.log("User already authenticated");
        setLoading(false);
      } else {
        console.log("Fetching new token...");
        const response = await fetch(
          `http://localhost:4000/api/v1/auth/github/login?code=${code}&state=${state}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200 && response.ok) {
          const data = await response.json();
          dispatch(login(data.token));
          setLoading(false);
        }
      }
      return;
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  const {
    filterValue,
    setFilterValue,
    searchKey,
    setSearchKey,
    isEdit,
    setIsEdit,
  } = useTodo();

  const todos = useSelector((state: RootState) => state.todos.todos);
  const statusCategory = ["Inprogress", "Completed", "Timeout"];
  const filters = ["All", "Low", "Medium", "High"];

  totalTodos = todos.length;
  totalCompleted = todos.filter(
    (t: FormData) => t.status === "Completed"
  ).length;
  totalExpired = todos.filter((t: FormData) => t.status === "Timeout").length;

  useEffect(() => {
    console.log("**********Authenticated***********");
    authenticate();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full m-auto">
          Loading...
        </div>
      ) : (
        <div className="mt-5">

          <div className="flex flex-col lg:flex-row text-start ">
            <div className="lg:hidden w-full flex flex-row justify-between px-5 gap-2 mb-4">
              <div className="flex w-full items-center justify-between bg-slate-100 rounded-md shadow-md px-2">
                <div className="flex items-center gap-3">
                  <ShieldAlert color="red" />
                  <div>
                    {/* <h2 className="text-sm text-gray-500">Expired</h2> */}
                    <h2 className="text-xl font-bold">{totalExpired}</h2>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between bg-slate-100 rounded-md shadow-md px-4 py-1">
                <div className="flex items-center gap-3">
                  <NotepadText color="orange" />
                  <div>
                    {/* <h2 className="text-sm text-gray-500">All Tasks</h2> */}
                    <h2 className="text-xl font-bold">{totalTodos}</h2>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between bg-slate-100 rounded-md shadow-md px-4 py-1">
                <div className="flex items-center gap-3">
                  <CircleCheckBig color="blue" />
                  <div>
                    {/* <h2 className="text-sm text-gray-500">Completed</h2> */}
                    <h2 className="text-xl font-bold">{totalCompleted}</h2>
                  </div>
                </div>
              </div>
              <button
                className="min-w-[100px] py-1 bg-sky-800 text-white rounded-md text-sm font-medium border border-sky-900 hover:bg-white hover:text-sky-800 shadow-md"
                onClick={() => setIsEdit(true)}
              >
                Add +
              </button>
            </div>

            {/* ✅ Desktop Sidebar Stats (Left) */}
            <div className="hidden lg:flex lg:w-1/5 flex-col gap-3">
              <div className="h-[150px] w-full flex items-center gap-6 bg-slate-100 rounded-md shadow-md px-3">
                <ShieldAlert size={60} color="red" />
                <div>
                  <h2 className="text-md text-gray-500">Expired</h2>
                  <h2 className="text-3xl font-bold">{totalExpired}</h2>
                </div>
              </div>
              <div className="h-[150px] w-full flex items-center gap-6 bg-slate-100 rounded-md shadow-md px-3">
                <NotepadText size={60} color="orange" />
                <div>
                  <h2 className="text-md text-gray-500">All Tasks</h2>
                  <h2 className="text-3xl font-bold">{totalTodos}</h2>
                </div>
              </div>
              <div className="h-[150px] w-full flex items-center gap-6 bg-slate-100 rounded-md shadow-md px-3">
                <CircleCheckBig size={60} color="blue" />
                <div>
                  <h2 className="text-md text-gray-500">Completed</h2>
                  <h2 className="text-3xl font-bold">{totalCompleted}</h2>
                </div>
              </div>
              <div className="mx-2">
                <button
                  className="w-full py-2 bg-sky-800 text-white rounded-md text-sm font-medium border border-sky-900 hover:bg-white hover:text-sky-800 shadow-md"
                  onClick={() => setIsEdit(true)}
                >
                  Add +
                </button>
              </div>
            </div>

            {/* ✅ Main Content */}
            <div className="w-full lg:w-4/5 h-screen relative px-3 sm:px-5">
              <div className="w-full flex flex-col items-center mx-auto">
                {/* Search + Filter */}
                <div className="flex flex-row items-center w-full gap-2">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={searchKey}
                      placeholder="Search here..."
                      className="w-full py-2 px-3 border border-sky-700 rounded-md text-sm"
                      onChange={(e) => setSearchKey(e.target.value)}
                    />
                    <VscSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-sky-800" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[100px] bg-sky-800 text-white py-2 rounded-md text-sm font-medium border border-sky-900 hover:bg-white hover:text-sky-800 shadow-md"
                      >
                        {filterValue}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-24 bg-white rounded-md shadow-md">
                      <DropdownMenuRadioGroup
                        value={filterValue}
                        onValueChange={setFilterValue}
                      >
                        {filters.map((value) => (
                          <DropdownMenuRadioItem
                            key={value}
                            value={value}
                            className="px-2 py-1 hover:bg-gray-100 text-sm"
                          >
                            {value}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Status Categories */}
                <div className="flex flex-col sm:flex-row justify-between w-full gap-3 mt-5">
                  {statusCategory.map((value, index) => (
                    <CategoryCard title={value} key={index} />
                  ))}
                </div>
              </div>

              {isEdit && <TaskDialog />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
