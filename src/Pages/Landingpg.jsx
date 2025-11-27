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

      {/* === RESPONSIVE STATIC FRAME === */}
      <div className="w-full max-w-[1200px] border border-white/25 rounded-xl
                      px-4 sm:px-6 md:px-10 lg:px-14 py-10 box-border">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mt-12 gap-3 md:gap-4">
            <div className="bg-[#1A4A83] w-16 sm:w-20 md:w-24 h-2"></div>
            <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Shaping the Future of Digital Interaction with Creativity.
            </p>
          </div>
        </div>

        {/* INTRO SECTION — NOW RESPONSIVE */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10
                        px-4 sm:px-8 md:px-12 lg:px-20 mb-12 text-center lg:text-left">

          <div className="space-y-1">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">INEZA LINKER Arlene</p>
            <p className="text-xs sm:text-sm md:text-base font-bold">IT Specialist</p>
            <p className="font-bold">&</p>
            <p className="text-xs sm:text-sm md:text-base font-bold">Software Developer</p>
          </div>

          <img
            src="/assets/photos/image.png"
            alt="profile"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 
                       object-cover rounded-md"
          />

          <button className="bg-[#1A4A83] text-white px-6 py-3 font-bold rounded 
                             hover:bg-[#2564b1] transition-transform hover:scale-105
                             w-full sm:w-auto">
            HIRE ME!
          </button>
        </div>

        {/* DO NOT CHANGE SECTIONS BELOW */}
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
