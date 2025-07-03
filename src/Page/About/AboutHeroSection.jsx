import React from 'react';
import { FiInfo } from 'react-icons/fi';
import Banner from '../../assets/About/banner.jpg';

const AboutHeroSection = () => {
  return (
    <section
      className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="flex items-center gap-2 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase"
          style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
        >
          <FiInfo className="text-[#016DB8]" /> About Us
        </h1>
        <p className="text-white text-sm sm:text-base mt-3 max-w-xl">
          Learn more about our journey, mission, and the team behind Front Line BD.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
