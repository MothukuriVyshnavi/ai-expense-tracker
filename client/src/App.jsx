import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;