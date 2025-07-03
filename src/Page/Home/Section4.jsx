import React from 'react';

import cert1 from '../../assets/Home_Page/Certificates/Trade-Licence_page-0001.jpg';
import cert3 from '../../assets/Home_Page/Certificates/BIN-Certification_page-0001.jpg';
import cert4 from '../../assets/Home_Page/Certificates/ERC-2024_page-0001.jpg';

import TradeLicence from '../../assets/Home_Page/Certificates/Trade-Licence_page-0001.jpg';
import ERC from '../../assets/Home_Page/Certificates/ERC-2024_page-0001.jpg';
import BINCertification from '../../assets/Home_Page/Certificates/BIN-Certification_page-0001.jpg';

const certificates = [
  {
    title: 'Trade Licence',
    image: cert1,
    file: TradeLicence,
  },
  {
    title: 'BIN Certificate',
    image: cert3,
    file: BINCertification,
  },
  {
    title: 'ERC Certificate',
    image: cert4,
    file: ERC,
  },
];

const Section4 = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#016DB8] text-center mb-10">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-xs border rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-[350px] object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-125"
            />

            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-base sm:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-yellow-400">
              {cert.title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Section4;
