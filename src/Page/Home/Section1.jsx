import React, { useEffect, useState, useRef } from 'react';
import Image from '../../assets/Home_Page/Image_1.jpg';
import Background from '../../assets/Home_Page/Background.jpg';

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const paragraphs = [
    "Discover Front Line Bd, your trusted source for high-quality Garments accessories manufacturers in Bangladesh. We are the most popular Garments accessories manufacturer & supplier company in Bangladesh.",
    "At Front Line Bd, we specialize in producing a wide range of premium garment accessories such as Hangtags, Labels, Stickers, Twill Tape, Satin Bows, Elastic, as well as all kinds of metal and plastics items, printed poly, Jacquard elastic and more.",
    "The difference is our people. We always provide complete attention and priority for our honorable customers.",
    "We have been working with many reputed retailers all over the world including WALMART, H&M, ZARA, GAP, C&A, ESPRIT, CARTER’S, M&S, FUNDAY, TEMA, MATALAN, SKIVA, G&W etc.",
    "Our commitment to excellence, innovation, and sustainability makes us the preferred partner for leading brands worldwide."
  ];

  return (
    <div
      ref={sectionRef}
      className={`relative px-4 sm:px-6 py-12 md:py-20 max-w-7xl mx-auto min-h-screen
        transition-opacity duration-700 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        backgroundImage: `url(${Background.src || Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content wrapper with padding and max width */}
      <div className="relative z-10 scree">
        <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl font-bold text-[#016DB8] mb-10 leading-tight">
          Welcome To Front Line BD - Garments Accessories <br />
          Manufacturer & Supplier In Bangladesh
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Image Section */}
          <div
            className={`w-full md:w-1/2
              transition-opacity duration-700 ease-out
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <img
              src={Image}
              alt="Office Team"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div
            className="w-full md:w-1/2 text-black text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 px-2 md:px-0 text-center md:text-left"
          >
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                className={`mb-4 transition-opacity transition-transform duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
                `}
                style={{ transitionDelay: `${idx * 300}ms` }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
