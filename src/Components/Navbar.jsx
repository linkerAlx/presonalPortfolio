import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Socials } from '../Constants';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ nightMode, setNightMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`fixed top-0 z-[40] w-full h-[60px] flex items-center justify-center px-5 md:px-20 shadow-md
      ${nightMode ? "bg-[#0f172a] text-white" : "bg-white text-black"}`}>

      {/* Wrapper */}
      <div className="w-full max-w-[1200px] flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-extrabold text-center ml-6">
          linker<span className='text-[#1A4A83]'>_arlene</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {Socials.map((social, index) => (
            <NavLink
              key={index}
              to={social.path}
              className={`font-bold hover:text-[#1A4A83] duration-200
                ${nightMode ? "text-white" : "text-black"}`}
            >
              {social.name}
            </NavLink>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 mr-6 text-xl">

          {/* Dark/Light Switch */}
          <div onClick={() => setNightMode(!nightMode)} className="cursor-pointer">
            {nightMode ? <MdLightMode /> : <MdDarkMode />}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className={`absolute top-[60px] left-0 w-full p-5 shadow-md md:hidden flex flex-col items-center gap-4
          ${nightMode ? "bg-[#0f172a] text-white" : "bg-white text-black"}`}
        >
          {Socials.map((social, index) => (
            <NavLink
              key={index}
              to={social.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold hover:text-[#1A4A83] duration-200"
            >
              {social.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
