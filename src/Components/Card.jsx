// components/Card.jsx
import React from 'react';


const Card = ({ image, title, description, liveProject, }) => {
  return (
    <div className="min-w-[260px] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mr-4 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">

      
      {/* Image */}
      {image && (
        <img 
          src={image.src} 
          alt={title} 
          className="h-40 w-full object-cover"
        />
      )}

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}

          {liveProject && (
            <p className="text-sm mt-2">
              <span className="font-medium text-gray-700">Live Project:</span>{" "}
              <a
                href={liveProject}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {liveProject}
              </a>
            </p>
          )}
        </div>

             </div>

    </div>
  );
};

export default Card;
