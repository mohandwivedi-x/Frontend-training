import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-slate-800/95 text-white">
      <nav className="border-b border-slate-600 shadow-lg shadow-slate-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="text-xl font-bold">Logo</div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="font-semibold hover:text-slate-400 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-semibold hover:text-slate-400 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-semibold hover:text-slate-400 transition"
            >
              Contact
            </Link>
          </div>

          {/* Extra Links */}
          <div className="flex space-x-6">
            <Link
              to="/all-blogs"
              className="font-semibold hover:text-slate-400 transition"
            >
              All Todos
            </Link>
            <Link
              to="/my-blogs"
              className="font-semibold hover:text-slate-400 transition"
            >
              My Todos
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
