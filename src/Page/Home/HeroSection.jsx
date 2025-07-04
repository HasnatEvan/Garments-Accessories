import React, { useState, useEffect, useRef } from 'react';

import image1 from '../../assets/Home_Page/Banner/image1.webp';
import image2 from '../../assets/Home_Page/Banner/iamge2.jpg';
import image3 from '../../assets/Home_Page/Banner/image3.jpg';
import image4 from '../../assets/Home_Page/Banner/image4.jpg';
import image5 from '../../assets/Home_Page/Banner/image5.jpg';

const images = [image1, image2, image3, image4, image5];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const handleMouseEnter = () => {
    clearInterval(slideInterval.current);
  };

  const handleMouseLeave = () => {
    slideInterval.current = setInterval(nextSlide, 4000);
  };

  return (
    <div
      className="max-w-screen-xl mx-auto relative overflow-hidden rounded-lg"
      style={{ height: '400px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Slider */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
      {images.map((img, idx) => (
  <div
    key={idx}
    className="w-full flex-shrink-0 relative rounded-lg overflow-hidden"
    style={{ height: '400px' }}
  >
    <img
      src={img}
      alt={`Slide ${idx + 1}`}
      className="w-full h-full object-cover inner-shadow"
      draggable={false}
    />

    {/* Overlay content */}
    <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Garments Accessories
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto drop-shadow-md">
          Front Line BD - Your Trusted Partner in Premium Quality Accessories for the Garments Industry
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-white text-sm md:text-base shadow-md transition duration-300">
          Explore Collection
        </button>
      </div>
    </div>
  </div>
))}

      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-white w-10 h-10 text-2xl flex items-center justify-center cursor-pointer z-10"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-white w-10 h-10 text-2xl flex items-center justify-center cursor-pointer z-10"
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
