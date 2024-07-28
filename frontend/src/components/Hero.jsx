import React from 'react'
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div
  className="hero min-h-screen "
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">LEARNING MERN STACK</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className="flex items-center justify-center space-x-4">
      <Link to="/login">
      <button className="btn btn-primary">Login</button>
      </Link>
      <Link to="/register">
      <button className="btn btn-primary">Register</button>
      </Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero