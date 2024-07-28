import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/UsersApiSlice";
import { setCredentials } from "../slices/AuthSlice";
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const LoginAuth = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo){
      navigate("/")
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login({ email, password }).unwrap();
    dispatch(setCredentials({ ...res }));
    navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error); 
    }

 
    // Simulate a delay for loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>

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
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
              <IoKeyOutline className="h-5 w-5 text-gray-500 ml-3" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0 transition-all duration-300 ease-in-out"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none relative"
            onClick={handleSubmit}
          >
            <span
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                loading ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="loading loading-ring loading-md"></span>
            </span>
            <span
              className={`relative ${loading ? "opacity-0" : "opacity-100"}`}
            >
              Login
            </span>
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            New to MERN Stack?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginAuth;
