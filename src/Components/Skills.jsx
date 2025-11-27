import React from 'react';
import { skills } from '../Constants';

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-14">
      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-[#1A4A83]  w-12 h-1"></div>
        <p className="font-bold ml-4 text-center lg:text-left text-sm md:text-base lg:text-lg">
          Skills
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-sm mb-4 text-center">{skill.description}</p>

            {/* Star Rating */}
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={starIndex < skill.rating ? "#FACC15" : "#6B7280"} // yellow or gray
                  className="w-6 h-6 transition-colors duration-200"
                >
                  <path d="M12 2c.46 0 .9.26 1.11.67l2.27 4.6 5.07.74c.96.14 1.34 1.32.65 2l-3.67 3.57.87 5.04c.17.96-.84 1.69-1.7 1.23L12 18.77l-4.54 2.39c-.86.46-1.87-.27-1.7-1.23l.87-5.04-3.67-3.57c-.69-.68-.31-1.86.65-2l5.07-.74 2.27-4.6C11.1 2.26 11.54 2 12 2z" />
                </svg>
              ))}
            </div>

            {/* Optional Skill Level Text */}
            <p className="text-yellow-400 font-medium text-sm">{skill.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
