import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center ">

      {/* Heading */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-[#1A4A83] w-12 h-1"></div>
        <p className="font-bold ml-3 text-lg ">Contact Me</p>
      </div>

      {/* Background + Gradient overlay */}
      <div
        className="w-full bg-cover bg-center relative py-14 px-4"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/29738109/pexels-photo-29738109/free-photo-of-vintage-rotary-telephone-in-black-and-white.jpeg')",
        }}
      >
        {/* Dark gradient to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-[#1A4A83]/75"></div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          
          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <p className="text-sm leading-relaxed text-gray-200">
              Reach out for collaborations, projects, or questions —
              I am always open to connect and work together.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><FaPhoneAlt /> <span>+250 783 653 531</span></div>
              <div className="flex items-center gap-3"><FaEnvelope /> <span>inezalinkera@gmail.com</span></div>
              <div className="flex items-center gap-3"><FaInstagram /> <span>linker_arlene</span></div>
              <div className="flex items-center gap-3"><FaLinkedin /> <span>Ineza Linker Arlene</span></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-center">Send a Message</h2>
            <p className="text-gray-200 text-xs text-center mb-4">I'll reply soon.</p>

            <form className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" placeholder="Full Name"
                  className="p-2 rounded bg-white/90 text-black focus:ring-2 focus:ring-[#1A4A83] outline-none"/>
                <input type="text" placeholder="Phone"
                  className="p-2 rounded bg-white/90 text-black focus:ring-2 focus:ring-[#1A4A83] outline-none"/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="email" placeholder="Email"
                  className="p-2 rounded bg-white/90 text-black focus:ring-2 focus:ring-[#1A4A83] outline-none"/>
                <input type="text" placeholder="Subject"
                  className="p-2 rounded bg-white/90 text-black focus:ring-2 focus:ring-[#1A4A83] outline-none"/>
              </div>

              <textarea placeholder="Message"
                className="p-2 rounded bg-white/90 text-black h-24 focus:ring-2 focus:ring-[#1A4A83] outline-none"></textarea>

              <button className="w-full bg-[#1A4A83] text-white py-2 rounded-lg hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

         </div>
  );
};

export default Contact;
