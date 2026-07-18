import { Link } from "react-router-dom";

function ForgotPassword() {

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Enter your email to receive a reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Reset Link
        </button>

        <p className="text-center mt-6">

          <Link
            to="/login"
            className="text-blue-600 hover:underline"
          >
            Back to Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default ForgotPassword;