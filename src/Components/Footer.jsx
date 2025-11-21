import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm">
          © 2025 Ineza Linker Arlene — Portfolio
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://instagram.com/linker_arlene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5F8184] transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com/in/ineza-linker-arlene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5F8184] transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      {/* line */}
      <div className="mt-4 mx-auto w-24 h-1 bg-[#5F8184] rounded-full"></div>
    </footer>
  );
};

export default Footer;
