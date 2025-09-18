import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/todos" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
