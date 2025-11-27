import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Socials } from '../Constants';
import { MdDarkMode, MdLightMode } from "react-icons/md"; // THEME ICONS

const Navbar = ({ nightMode, setNightMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 z-[40] w-full h-[60px] flex justify-between items-center px-5 md:px-20 shadow-md">

      {/* Left */}
      <h1 className="font-extrabold ">linker<span className='text-[#1A4A83]'>_arlene</span></h1>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Desktop Links */}
        <div className="hidden md:flex gap-5">
          {Socials.map((social, index) => (
            <NavLink key={index} to={social.path} className="font-bold hover:text-[#1A4A83]">
              {social.name}
            </NavLink>
          ))}
        </div>

        {/* NIGHT MODE ICON */}
        <div
          className="cursor-pointer text-xl"
          onClick={() => setNightMode(!nightMode)}
        >
          {nightMode ? <MdLightMode /> : <MdDarkMode />}
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 bg-white w-full shadow-md p-5 md:hidden">
          <ul className="flex flex-col gap-4">
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
