import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import image14 from '../../assets/Home_Page/slider/Metal_Item1.jpg';
import image15 from '../../assets/Home_Page/slider/Plastic_Item1.webp';
import image16 from '../../assets/Home_Page/slider/Printed_Poly1.jpg';
import image17 from '../../assets/Home_Page/slider/Jacquard_Elastic1.jpg';
import image18 from '../../assets/Home_Page/slider/PU_Leather3.jpg';
import image1 from '../../assets/Home_Page/slider/Bow2.jpg';
import image2 from '../../assets/Home_Page/slider/Button3.jpg';
import image3 from '../../assets/Home_Page/slider/Elastic_1.jpg';
import image4 from '../../assets/Home_Page/slider/HangTag_2.jpg';
import image5 from '../../assets/Home_Page/slider/HeatTransfer1.jpg';
import image6 from '../../assets/Home_Page/slider/Label_1.jpg';
import image7 from '../../assets/Home_Page/slider/PlasticClip1.jpg';
import image8 from '../../assets/Home_Page/slider/PomPom3.jpg';
import image9 from '../../assets/Home_Page/slider/Ring1Slider1.jpg';
import image10 from '../../assets/Home_Page/slider/SatinTape1.jpg';
import image11 from '../../assets/Home_Page/slider/Sticker3.jpg';
import image12 from '../../assets/Home_Page/slider/TissuePaper1.jpg';
import image13 from '../../assets/Home_Page/slider/TwillTape3.jpg';

const images = [
  { src: image14, name: 'Metal Item' },
  { src: image15, name: 'Plastic Item' },
  { src: image16, name: 'Printed Poly' },
  { src: image17, name: 'Jacquard Elastic' },
  { src: image18, name: 'PU Leather' },
  { src: image1, name: 'Bow' },
  { src: image2, name: 'Button' },
  { src: image3, name: 'Elastic' },
  { src: image4, name: 'HangTag' },
  { src: image5, name: 'Heat Transfer' },
  { src: image6, name: 'Label' },
  { src: image7, name: 'Plastic Clip' },
  { src: image8, name: 'Pom Pom' },
  { src: image9, name: 'Ring' },
  { src: image10, name: 'Satin Tape' },
  { src: image11, name: 'Sticker' },
  { src: image12, name: 'Tissue Paper' },
  { src: image13, name: 'Twill Tape' },
];

const Slider = () => {
  return (
    <div className="relative w-full bg-white py-2 ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800} // smoother speed
        loop={true}
        spaceBetween={10}
        grabCursor={true}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6 },
        }}
        className="pb-4"
      >
        {images.map(({ src, name }, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative overflow-hidden rounded-md transition-transform duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
              }}
            >
              <img
                src={src}
                alt={name}
                className="w-full h-48 object-cover"
                loading="lazy" // lazy load to reduce lag
                decoding="async" // improve paint performance
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-sm font-medium">
                {name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;