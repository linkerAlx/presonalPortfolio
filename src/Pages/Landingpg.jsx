import About from "../Components/About";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Blogs from "./Blogs";

const Landingpg = () => {
  return (
    <div className="min-h-screen flex justify-center mt-14 items-start bg-transparent">

      {/* === STATIC FIXED FRAME === */}
      <div className="w-full max-w-[1200px] border border-white/25 rounded-xl
                      px-6 md:px-10 lg:px-14 py-10 box-border">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mt-12 gap-4">
            <div className="bg-[#1A4A83] w-24 h-2"></div>
            <p className="font-bold text-base md:text-lg lg:text-xl">
              Shaping the Future of Digital Interaction with Creativity.
            </p>
          </div>
        </div>

        {/* INTRO SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-20 mb-12">
          <div className="text-center lg:text-left space-y-2">
            <p className="font-bold text-xl md:text-2xl">INEZA LINKER Arlene</p>
            <p className="text-sm md:text-base font-bold ml-12">IT Specialist</p>
            <p className="font-bold ml-22">&</p>
            <p className="text-sm md:text-base font-bold ml-7">Software Developer</p>
          </div>

          <img
            src="/assets/photos/image.png"
            alt="profile"
            className="w-60 h-60 object-cover rounded-md"
          />

          <button className="bg-[#1A4A83] text-white px-6 py-3 font-bold rounded 
                             hover:bg-[#2564b1] transition-transform transform hover:scale-105">
            HIRE ME!
          </button>
        </div>

        {/* ALL SECTIONS WITH SAME WIDTH & MARGINS */}
        <div className="space-y-12">
          <section><About /></section>
          <section><Skills /></section>
          <section><Services /></section>
          <section><Portfolio /></section>
          <section><Blogs /></section>
          <section><Contact /></section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Landingpg;
