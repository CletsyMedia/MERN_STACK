import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <main>
      <Outlet />
      </main>
    </div>
  )
}

export default Layout