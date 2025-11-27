// components/Card.jsx
import React from "react";

const Card = ({ image, title, description, liveProject }) => {
  return (
    <div className="
      min-w-[260px] rounded-xl overflow-hidden flex flex-col mr-4 
      border border-[#1A4A83]/30 bg-gradient-to-b from-black to-[#0c1d33]  
      text-white shadow-md transition-all duration-300
      hover:shadow-[#1A4A83]/60 hover:-translate-y-1 hover:border-[#1A4A83]
    "
    >

      {/* Image */}
      {image && (
        <img
          src={image.src}
          alt={title}
          className="h-40 w-full object-cover opacity-90 hover:opacity-100 transition"
        />
      )}

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">

        <h3 className="text-lg font-semibold text-[#1A4A83]">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-300 mt-1 leading-relaxed">
            {description}
          </p>
        )}

        {liveProject && (
          <p className="text-sm mt-3">
            <span className="text-gray-300 font-medium">Live Project:</span>{" "}
            <a
              href={liveProject}
              target="_blank"
              className="text-[#1A4A83] font-semibold underline hover:opacity-80"
            >
              Visit Site
            </a>
          </p>
        )}
      </div>

    </div>
  );
};

export default Card;
