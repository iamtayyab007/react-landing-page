{
  /*
import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { ListItem } from "@mui/material";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container flex justify-between items-center mx-auto p-4">
          <div className="logo-container">
            <img src={logo} alt="" width={150} />
          </div>

          <div className="List-items items-center hidden md:flex ">
            <ul className="flex gap-4 items-center text-lg">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
              <li>
                <BsCart2 className="text-2xl cursor-pointer" />
              </li>
              <li>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                  Booking Now
                </button>
              </li>
            </ul>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          {isOpen && (
            <div className="md:hidden bg-white shadow-md">
              <ul className="flex flex-col items-center gap-4 py-4">
                <li className="hover:text-blue-500 cursor-pointer">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <BsCart2 className="text-2xl cursor-pointer" />
                </li>
                <li>
                  <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                    Booking Now
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
*/
}

import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo-container invert">
          <img src={logo} alt="Logo" width={150} />
        </div>
        <div className="hidden md:flex gap-4 items-center text-lg">
          <a href="#home" className="hover:text-blue-500 cursor-pointer">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 cursor-pointer">
            About
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-500 cursor-pointer"
          >
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-500 cursor-pointer">
            Contact
          </a>
          <BsCart2 className="text-2xl cursor-pointer" />
          <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
            Booking Now
          </button>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed top-0 right-0 h-auto w-64 bg-white shadow-md transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-4">
            <FaTimes onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
          <ul className="flex flex-col items-center gap-4 py-4 transition-transform duration-75 right-0">
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
            <li>
              <BsCart2 className="text-2xl cursor-pointer" />
            </li>
            <li>
              <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                Booking Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
