import { Button } from "./ui/button";
import logo from "../assets/todo.jpg";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth.slice";
import { useNavigate } from "react-router-dom"; 

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const authenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const authHandler = () => {
    if (authenticated) {
      dispatch(logout())
      navigate("/")
    } else {
      navigate("/login");
    }
  };
  return (
    <header className="w-full bg-slate-800/95 text-white top-0">
      <nav className="flex justify-between items-center px-14 py-2 bg-white shadow-sm">
        <div className="text-2xl flex flex-row gap-2 font-bold text-sky-800 cursor-pointer" onClick={() => navigate("/") }>
          <img src={logo} alt="TaskCam Logo" className="h-8" />
          <label htmlFor="">TaskCam</label>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-sky-800 cursor-pointer" onClick={() => navigate("/")}>Home</li>
          <li className="hover:text-sky-800 cursor-pointer" onClick={() => navigate("")}>About</li>
          <li className="hover:text-sky-800 cursor-pointer" onClick={() => navigate("")}>Contact</li>
          <li className="hover:text-sky-800 cursor-pointer" onClick={() => navigate("/todos")}>My Todos</li>
        </ul>

        <Button
          className="bg-sky-800 hover:bg-white hover:text-sky-800 border border-sky-800 text-white rounded-md px-4 py-1 shadow-md cursor-pointer"
          onClick={() => authHandler()}
        >
          {!authenticated ? "Login" : "Logout"}
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
