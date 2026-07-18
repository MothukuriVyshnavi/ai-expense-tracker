import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [errors, setErrors] = useState({});
const validate = () => {

    let newErrors = {};

    if(!email){

        newErrors.email="Email is required";

    }

    else if(
        !/\S+@\S+\.\S+/.test(email)
    ){

        newErrors.email="Invalid email";

    }

    if(!password){

        newErrors.password="Password is required";

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length===0;

}
const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
        alert("Login Successful (UI Only)");
    }

};
  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        {/* Header */}

        <h1 className="text-3xl font-bold text-center text-blue-600">
          AI Expense Tracker
        </h1>

        <h2 className="text-2xl font-semibold text-center mt-6">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to continue
        </p>

        {/* Login Form */}

        <form onSubmit={handleSubmit}>

          {/* Email */}

          <div className="mb-5">

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
{
    errors.email && (
        <p className="text-red-500 text-sm mt-1">
            {errors.email}
        </p>
    )
}

          </div>

          {/* Password */}

          <div className="mb-5">

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">

            <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full border rounded-lg px-4 py-3 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
{
    errors.password && (
        <p className="text-red-500 text-sm mt-1">
            {errors.password}
        </p>
    )
}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-blue-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {/* Remember Me */}

          <div className="flex justify-between items-center mb-6">

            <label className="flex items-center">

              <input
                type="checkbox"
                className="mr-2"
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Register */}

        <p className="text-center mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;