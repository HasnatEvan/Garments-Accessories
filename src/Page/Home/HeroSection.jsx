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
  const navigate = useNavigate(); // React Router hook

  const slides = [
    {
      image: image1,
      title: "Premium Quality Garments Accessories",
      description:
        "We provide top-notch trims and accessories for modern fashion manufacturing. Our commitment to quality and consistency ensures that every detail enhances your product's appeal. From buttons to labels, every component is crafted to meet your brand’s standards.",
      buttonText: "Learn More",
    },
    {
      image: image3,
      title: "Innovative Fashion Solutions",
      description:
        "Empowering fashion brands with creative and customized accessory solutions. We believe in design-driven functionality that elevates your garments and reflects your unique brand identity through every stitch, fold, and fastener.",
      buttonText: "Explore Solutions",
    },
    {
      image: image4,
      title: "Crafted with Precision and Care",
      description:
        "Our accessories are engineered with care using the highest quality materials. From concept to creation, we maintain strict standards to ensure durability, sustainability, and aesthetic perfection in every piece we produce.",
      buttonText: "Our Craft",
    },
    {
      image: image5,
      title: "Trusted by Leading Brands",
      description:
        "Our products are trusted by top garment manufacturers and fashion houses across the globe. We deliver reliability, fast turnaround, and outstanding customer service that makes us a preferred partner in the industry.",
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
                  onClick={() => navigate("/garments-accessories")}
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
