import React from 'react';
import Card from './Card';
import { cardData } from '../Constants';

const Portfolio = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-14 px-6 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-[#1A4A83] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center text-sm md:text-base lg:text-lg">
          Projects
        </p>
      </div>

      {/* Scrollable Cards Section */}
      <div className="w-full overflow-x-auto no-scrollbar pb-6">
        <div className="flex gap-6 px-2">
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
