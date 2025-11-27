import React, { useState } from 'react';
import Card from './Card';
import { blogsdata } from '../Constants';

const Blog = ({ showAll = false }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(showAll ? blogsdata : blogsdata.slice(0, 3));

  const handleViewMore = () => {
    setVisibleBlogs(blogsdata);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-14 px-6 sm:px-12 lg:px-20">

      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-[#1A4A83] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center text-sm md:text-base lg:text-lg">
          Blogs
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleBlogs.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* View More Button */}
      {!showAll && visibleBlogs.length < blogsdata.length && (
        <button
          className="mt-8 px-6 py-3 bg-[#1A4A83] text-white font-bold rounded hover:bg-[#2564b1] transition"
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Blog;
