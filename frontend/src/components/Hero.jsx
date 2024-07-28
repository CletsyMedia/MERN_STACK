import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Full-screen overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-6">
        <div className="text-center text-white max-w-lg mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 xsm:text-4xl">
            Master MERN Stack
          </h1>
          <p className="text-lg mb-8">
            Elevate your development skills with a comprehensive understanding of MongoDB, Express, React, and Node.js. Our tailored courses and resources will guide you through every aspect of the MERN stack, ensuring you gain practical experience and deep insights into full-stack development.
          </p>
          <div className="flex flex-row items-center justify-center gap-3">
            <Link to="/login">
              <button className="btn  border-0 btn-primary w-24 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn w-24 border-0 btn-primary text-lg bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition duration-300 text-center">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
