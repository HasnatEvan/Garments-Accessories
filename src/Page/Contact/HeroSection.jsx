import React from 'react';
import { FiPhone } from 'react-icons/fi';
import Banner from '../../assets/Contact_Page/Banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">

      {/* Lazy Loaded Background Image */}
      <img
        src={Banner}
        loading="lazy"
        alt="Contact Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="flex items-center gap-2 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase"
          style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
        >
          <FiPhone className="text-[#016DB8]" />
          Contact Us
        </h1>

        <p className="text-white text-sm sm:text-base mt-3 max-w-xl">
          We’re here to help! Feel free to reach out with any questions or inquiries.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
