import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/todo.jpg";


function LandingPage() {
  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between flex-grow px-8 md:px-16 py-10 gap-10">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 leading-tight">
            Manage Your Tasks <br /> Smarter & Faster 🚀
          </h1>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed">
            TaskCam helps you organize, track, and complete your tasks with ease.
            Stay productive with priorities, deadlines, and simple controls.
          </p>
          <div>
            <Link to="/todos">
              <Button className="bg-sky-800 hover:bg-white hover:text-sky-800 border border-sky-800 text-white px-6 py-2 rounded-md shadow-md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          {/* Placeholder for illustration/image */}
          <div className="w-72 h-72 md:w-96 md:h-96 bg-sky-100 rounded-2xl shadow-inner flex items-center justify-center text-sky-700 font-semibold">
            <img src={logo} className="w-full"/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} TaskCam. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
