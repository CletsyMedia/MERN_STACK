import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../slices/AuthSlice";
import { useLogoutMutation } from "../slices/UsersApiSlice";

const Dropdown = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [loggingOut] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await loggingOut().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-white w-[160px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {userName}
        <HiChevronDown className="w-2.5 h-2.5 ms-3" aria-hidden="true" />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[160px] dark:bg-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                to="/updateprofile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setIsOpen(false)} // Close dropdown on click
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
