import React from 'react';
import Masonry from 'react-masonry-css';

import image1 from '../../assets/Gallery/image1.jpeg';
import image2 from '../../assets/Gallery/image2.jpg';
import image3 from '../../assets/Gallery/image3.jpeg';
import image4 from '../../assets/Gallery/image4.jpeg';
import image5 from '../../assets/Gallery/image5.jpeg';
import image6 from '../../assets/Gallery/image6.jpeg';
import image7 from '../../assets/Gallery/image7.jpeg';
import image8 from '../../assets/Gallery/image8.jpeg';
import image9 from '../../assets/Gallery/image9.jpeg';
import image10 from '../../assets/Gallery/image10.jpeg';
import image11 from '../../assets/Gallery/image11.jpeg';
import image12 from '../../assets/Gallery/image12.jpeg';
import image13 from '../../assets/Gallery/image13.jpeg';
import image14 from '../../assets/Gallery/image14.jpeg';
import image15 from '../../assets/Gallery/image15.jpeg';
import image16 from '../../assets/Gallery/image16.jpeg';
import image17 from '../../assets/Gallery/image17.jpeg';
import image18 from '../../assets/Gallery/image18.jpg';
import image19 from '../../assets/Gallery/image19.jpeg';
import image20 from '../../assets/Gallery/image20.jpeg';
import image21 from '../../assets/Gallery/image21.jpeg';

const images = [
  image1, image2, image3, image4, image5, image6, image7,
  image8, image9, image10, image11, image12, image13, image14,
  image15, image16, image17, image18, image19, image20, image21,
];

// Masonry breakpoint configuration (responsive)
const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  768: 2,
  480: 1,
};

const Section1 = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#016DB8] inline-block border-b-4 border-[#016DB8] pb-2">
          Photo Gallery
        </h2>
      </div>


      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="mb-6 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full object-cover  transform transition-transform duration-500 hover:scale-105 hover:brightness-110"
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Section1;
