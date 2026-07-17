import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;