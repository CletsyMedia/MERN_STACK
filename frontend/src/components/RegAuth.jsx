import React, { useState } from "react";

const RegAuth = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted");

    // Simulate a delay for loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  // Form data
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-800">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-500 ml-3"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-500 ml-3"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="username"
              className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0"
              placeholder="Username"
              autoComplete="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-500 ml-3"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="flex-grow bg-white outline-none px-4 py-2 border-0 focus:ring-0"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative"
            onClick={handleSubmit}
          >
            <span className={`absolute inset-0 flex items-center justify-center transition-opacity ${loading ? 'opacity-100' : 'opacity-0'}`}>
              <span className="loading loading-ring loading-md"></span>
            </span>
            <span className={`relative ${loading ? 'opacity-0' : 'opacity-100'}`}>Register</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegAuth;
