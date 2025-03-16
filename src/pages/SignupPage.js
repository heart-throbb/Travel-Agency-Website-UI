import { Link, useNavigate } from "react-router-dom";
import signupImage from "../assets/signup.jpg";

export default function Signup() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    navigate("/login"); // Redirect to login page after sign up
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4 bg-white">
      {/* Left Side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Get Started Now
          </h2>
          <p className="text-gray-600 text-sm text-center">Explore the World</p>

          <form className="mt-4 space-y-4" onSubmit={handleSignUp}>
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Travel Image (No Shadowed Borders) */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <img
          src={signupImage}
          alt="Travel Signup"
          className="max-w-xs md:max-w-md object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
