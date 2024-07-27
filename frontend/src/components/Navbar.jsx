import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // menu links
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];
// Define the authentication links
const authLinks = [
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
];

  return (
    <nav className="bg-gray-800 relative text-white p-4">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="text-2xl font-bold">
          Brand
        </Link>

        <div
          className={`lg:flex lg:items-center lg:space-x-4 xsm:absolute xsm:top-[4.5rem] xsm:left-0 xsm:right-0 xsm:w-full xsm:bg-gray-800 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-lg hover:bg-gray-700 md:rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
        {authLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-3 py-2 text-lg hover:bg-gray-700 rounded"
            >
              {link.label}
            </Link>
          ))}

          <label className="md:hidden bg-white text-black rounded-md relative flex items-center justify-center w-8 h-8 overflow-hidden cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isOpen}
              onChange={toggleMenu}
            />
            <HiBars3
              className={`absolute h-6 w-6 fill-current transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
              }`}
            />

            <VscClose
              className={`absolute h-6 w-6 fill-current transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
              }`}
            />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
