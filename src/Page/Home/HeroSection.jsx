import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../assets/Home_Page/Banner/image1.webp";
import image3 from "../../assets/Home_Page/Banner/image3.jpg";
import image4 from "../../assets/Home_Page/Banner/image4.jpg";
import image5 from "../../assets/Home_Page/Banner/image5.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: image1,
      title: "Premium Quality Garments Accessories",
      description:
        "We provide top-notch trims and accessories for modern fashion manufacturing. Every detail enhances your product's appeal, crafted to meet your brand’s standards.",
      buttonText: "Learn More",
    },
    {
      image: image3,
      title: "Innovative Fashion Solutions",
      description:
        "Empowering brands with creative accessory solutions that elevate garments and reflect your unique identity.",
      buttonText: "Explore Solutions",
    },
    {
      image: image4,
      title: "Crafted with Precision and Care",
      description:
        "Our accessories use high-quality materials, ensuring durability, sustainability, and aesthetic perfection.",
      buttonText: "Our Craft",
    },
    {
      image: image5,
      title: "Trusted by Leading Brands",
      description:
        "Trusted by top garment manufacturers worldwide, delivering reliability, fast turnaround, and excellent service.",
      buttonText: "Why Choose Us",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-[450px] xl:h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-md mb-3">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg max-w-3xl drop-shadow-md leading-relaxed mb-4">
                  {slide.description}
                </p>
                <button
                  onClick={() => navigate("/products")}
                  className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200 transition-all duration-300"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
