import React from 'react';
import { skills } from '../Constants';

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-14 px-6 md:px-12 lg:px-24">

      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <div className="bg-[#1A4A83] w-14 h-1"></div>
        <p className="font-bold ml-4 text-center text-base md:text-lg lg:text-xl ">
          Skills
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              p-6 rounded-xl transition-transform duration-300
              bg-gradient-to-br from-black via-[#0c1d33] to-[#1A4A83]
              border border-[#1A4A83]/40
              hover:scale-[1.04] hover:border-[#1A4A83]/80
              flex flex-col items-center text-center
            "
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#1A4A83]">
              {skill.name}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {skill.description}
            </p>

            {/* Rating */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 text-lg ${
                    i < skill.rating ? "opacity-100" : "opacity-30"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Skills;
