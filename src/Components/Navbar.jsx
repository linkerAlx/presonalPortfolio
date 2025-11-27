import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Socials } from '../Constants';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ nightMode, setNightMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 z-[40] w-full h-[60px] flex items-center justify-center px-5 md:px-20 shadow-md">

      {/* Container – centers everything */}
      <div className="w-full max-w-[1200px] flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-extrabold text-center ml-6">
          linker<span className='text-[#1A4A83]'>_arlene</span>
        </h1>

        {/* Desktop Menu Centered*/}
        <div className="hidden md:flex gap-6 items-center">
          {Socials.map((social, index) => (
            <NavLink key={index} to={social.path} className="font-bold hover:text-[#1A4A83]">
              {social.name}
            </NavLink>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center mr-6 ">

          {/* Dark / Light Mode */}
          <div className="cursor-pointer text-xl" onClick={() => setNightMode(!nightMode)}>
            {nightMode ? <MdLightMode /> : <MdDarkMode />}
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white p-5 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 text-center">
            {Socials.map((social, index) => (
              <li key={index}>
                <NavLink to={social.path} onClick={() => setIsMenuOpen(false)}>
                  {social.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
