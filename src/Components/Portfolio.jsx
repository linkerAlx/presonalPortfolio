// components/Portfolio.jsx
import React from 'react';
import Card from './Card';
import { cardData } from '../Constants';

const Portfolio = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-14'>

      {/* Heading */}
      <div className="flex items-center justify-center mb-5">
        <div className="bg-[#5F8184] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center lg:text-left text-sm md:text-base lg:text-lg">
          Projects
        </p>
      </div>

      {/* Cards Only - Horizontal Scroll */}
      <div className="w-full overflow-x-auto scrollbar-hide px-4 pb-4">
        <div className="flex space-x-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              liveProject={card.liveProject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
