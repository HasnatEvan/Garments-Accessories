import React from 'react';
import Marquee from 'react-fast-marquee';

import image1 from '../../assets/Home_Page/Our Clients/Image1.jpeg';
import image2 from '../../assets/Home_Page/Our Clients/Image2.jpeg';
import image3 from '../../assets/Home_Page/Our Clients/Image3.jpeg';
import image4 from '../../assets/Home_Page/Our Clients/Image4.jpeg';
import image5 from '../../assets/Home_Page/Our Clients/Image5.jpeg';
import image6 from '../../assets/Home_Page/Our Clients/Image6.jpeg';
import image7 from '../../assets/Home_Page/Our Clients/Image7.jpeg';
import image8 from '../../assets/Home_Page/Our Clients/Image8.jpeg';
import image9 from '../../assets/Home_Page/Our Clients/Image9.jpeg';
import image10 from '../../assets/Home_Page/Our Clients/Image10.jpeg';
import image11 from '../../assets/Home_Page/Our Clients/Image11.jpeg';
import image12 from '../../assets/Home_Page/Our Clients/Image12.jpeg';

const Section3 = () => {
  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12
  ];

  return (
    <section className="py-10 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#016DB8] pb-2 border-b-4 border-[#016DB8] inline-block">
          Our Vendors
        </h2>
        {/* Small Description */}
        <p className="mt-2 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
          We proudly collaborate with these trusted vendors who ensure top-quality products and services for our clients.
        </p>
      </div>

      {/* Marquee */}
      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        {images.map((img, index) => (
          <div key={index} className="mx-4 sm:mx-6 lg:mx-8 flex items-center">
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="h-14 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Section3;
