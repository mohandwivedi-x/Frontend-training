import { useState } from "react";
import Todo from "./Todo";
import { Button } from "@/components/ui/button";
import { VscSearch } from "react-icons/vsc";
import TaskDialog from "./TaskDialog";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [todo, setTodo] = useState<string[]>([]);
  const [searchKey, setSearchKey] = useState("");

  const filtered = todo.filter((single) =>
    single.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="w-full h-screen relative">
      <div className="w-2/3 h-screen flex flex-col items-center mx-auto pt-20">
        <h2 className="text-2xl font-bold">My Todos</h2>
        <div className="flex items-center flex-col w-4/5 mt-5">
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
          {filtered.map((value) => (
            <Todo inputValue={value} />
          ))}

          <button
            className="ml-1 mt-5 w-20 py-2 bg-sky-800 text-white py-1 px-3.5 rounded-sm text-sm font-extralight border-1 border-sky-900 hover:bg-white hover:text-sky-800 shadow-md"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add+
          </button>
        </div>
      </div>
      {isOpen && (
        <TaskDialog setIsOpen={setIsOpen} todo={todo} setTodo={setTodo} />
      )}
    </div>
  );
}

export default Home;
