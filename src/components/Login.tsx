import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID!;
  const GITHUB_CALLBACK_URL = import.meta.env.VITE_GITHUB_CALLBACK_URL!;

  const handleGithubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_CALLBACK_URL}&scope=user:email&state=/dashboard`; // backend GitHub OAuth route
    console.log("GitHub login clicked", )
  };


  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4000/api/v1/auth/google"; // backend Google OAuth route
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-sky-800 mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Sign in to continue managing your tasks
        </p>

        {/* GitHub Login */}
        <button
          onClick={handleGithubLogin}
          className="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200 mb-4 cursor-pointer"
        >
          <FaGithub size={22} className="text-gray-800" />
          <span className="font-medium text-gray-800">
            Continue with GitHub
          </span>
        </button>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200 cursor-pointer"
        >
          <FcGoogle size={22} />
          <span className="font-medium text-gray-800">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Extra text */}
        <p className="text-xs text-gray-500 text-center">
          By signing in, you agree to our{" "}
          <span className="text-sky-700 font-medium cursor-pointer hover:underline">
            Terms
          </span>{" "}
          &{" "}
          <span className="text-sky-700 font-medium cursor-pointer hover:underline">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
