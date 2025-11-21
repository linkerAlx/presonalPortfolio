import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center mt-14">
      {/* Heading */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-[#5F8184] w-12 h-1"></div>
        <p className="font-bold ml-3 text-lg">Contact Us</p>
      </div>

      {/* Background Section */}
      <div
        className="w-full bg-cover bg-center py-10 px-4"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/29738109/pexels-photo-29738109/free-photo-of-vintage-rotary-telephone-in-black-and-white.jpeg')",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CONTACT INFO — clean minimal bar */}
          <div className="space-y-4 text-white/90">
            <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Reach out for collaborations, projects, or general inquiries —
              we're always ready to assist.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt /> <span>+250 783 653 531</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope /> <span>inezalinkera@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaInstagram /> <span>@linker_arlene</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin /> <span>Ineza Linker Arlene</span>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white text-center">
              Send Us a Message
            </h2>
            <p className="text-gray-200 text-sm text-center mb-4">
              We’ll get back to you as soon as possible.
            </p>

            <form className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-2 rounded bg-white/80 focus:ring-2 focus:ring-[#5F8184] outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-2 rounded bg-white/80 focus:ring-2 focus:ring-[#5F8184] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded bg-white/80 focus:ring-2 focus:ring-[#5F8184] outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-2 rounded bg-white/80 focus:ring-2 focus:ring-[#5F8184] outline-none"
                />
              </div>

              <textarea
                placeholder="Message"
                className="p-2 rounded bg-white/80 h-24 focus:ring-2 focus:ring-[#5F8184] outline-none"
              ></textarea>

              <button className="w-full bg-[#5F8184] text-white py-2 rounded-lg hover:bg-[#4a6668] transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="w-full mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.831532104425!2d29.773292476900153!3d-2.0727235727171913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcca069bdd9737%3A0x7b43e570103a0bc1!2sNyamabuye!5e0!3m2!1sen!2srw!4v1735912717741!5m2!1sen!2srw"
          className="w-full h-64 border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
