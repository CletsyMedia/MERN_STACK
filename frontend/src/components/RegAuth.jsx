import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline, IoKeyOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";

const RegAuth = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    console.log("Form submitted");

    // Simulate a delay for loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
              <HiOutlineEnvelope className="h-5 w-5 text-gray-500 ml-3" />
              <input
                id="email"
                type="email"
                className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0 transition-all duration-300 ease-in-out"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
              <AiOutlineUser className="h-5 w-5 text-gray-500 ml-3" />
              <input
                id="username"
                type="text"
                className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0 transition-all duration-300 ease-in-out"
                placeholder="Username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
              <IoKeyOutline className="h-5 w-5 text-gray-500 ml-3" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0 transition-all duration-300 ease-in-out"
                placeholder="Password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
              <IoKeyOutline className="h-5 w-5 text-gray-500 ml-3" />
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0 transition-all duration-300 ease-in-out"
                placeholder="Confirm Password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none  relative"
          >
            <span className={`absolute inset-0 flex items-center justify-center transition-opacity ${loading ? 'opacity-100' : 'opacity-0'}`}>
              <span className="loading loading-ring loading-md"></span>
            </span>
            <span className={`relative ${loading ? 'opacity-0' : 'opacity-100'}`}>Register</span>
          </button>
        </form>

        {/* Login Prompt */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account with MERN Stack?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegAuth;
