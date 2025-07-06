import React, { useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import {  FaTimes } from 'react-icons/fa';

// Image imports
import MetalItem1 from '../../assets/Garments Accessories/Metal_Item1.jpg'
import MetalItem2 from '../../assets/Garments Accessories/Metal_Item2.jpg'
import MetalItem3 from '../../assets/Garments Accessories/Metal_Item3.jpg'
import PlasticItem1 from '../../assets/Garments Accessories/Plastic_Item1.webp'
import PlasticItem2 from '../../assets/Garments Accessories/Plastic_Item2.jpeg'
import PlasticItem3 from '../../assets/Garments Accessories/Plastic_Item3.jpeg'

import PrintedPoly1 from '../../assets/Garments Accessories/Printed_Poly1.jpg'
import PrintedPoly2 from '../../assets/Garments Accessories/Printed_Poly2.webp'
import PrintedPoly3 from '../../assets/Garments Accessories/Printed_Poly3.jpeg'

import JacquardElastic1 from '../../assets/Garments Accessories/Jacquard_Elastic1.jpg'
import JacquardElastic2 from '../../assets/Garments Accessories/Jacquard_Elastic2.jpeg'
import JacquardElastic3 from '../../assets/Garments Accessories/Jacquard_Elastic3.jpg'
import  PULeather1 from '../../assets/Garments Accessories/PU_Leather3.jpg'
import  PULeather2 from '../../assets/Garments Accessories/PU_Leather2.webp'
import  PULeather3 from '../../assets/Garments Accessories/PU_Leather1.jpg'


import Bow1 from '../../assets/Garments Accessories/Bow1.jpg';
import Bow2 from '../../assets/Garments Accessories/Bow2.jpg';
import Bow3 from '../../assets/Garments Accessories/Bow3.jpg';
import Button1 from '../../assets/Garments Accessories/Button1.jpg';
import Button2 from '../../assets/Garments Accessories/Button2.jpg';
import Button3 from '../../assets/Garments Accessories/Button3.jpg';
import Elastic1 from '../../assets/Garments Accessories/Elastic_1.jpg';
import Elastic2 from '../../assets/Garments Accessories/Elastic_2.jpg';
import Elastic3 from '../../assets/Garments Accessories/Elastic_3.jpg';
import EHangTag1 from '../../assets/Garments Accessories/HangTag_1.jpg';
import EHangTag2 from '../../assets/Garments Accessories/HangTag_2.jpg';
import EHangTag3 from '../../assets/Garments Accessories/HangTag_3.jpg';
import HeatTransfer1 from '../../assets/Garments Accessories/HeatTransfer1.jpg';
import HeatTransfer2 from '../../assets/Garments Accessories/HeatTransfer2.jpg';
import HeatTransfer3 from '../../assets/Garments Accessories/HeatTransfer3.jpg';
import Label1 from '../../assets/Garments Accessories/Label_1.jpg';
import Label2 from '../../assets/Garments Accessories/Label_2.jpg';
import Label3 from '../../assets/Garments Accessories/Label_3.jpg';
import MobilonTape1 from '../../assets/Garments Accessories/MobilonTape1.jpg';
import MobilonTape2 from '../../assets/Garments Accessories/MobilonTape2.jpg';
import MobilonTape3 from '../../assets/Garments Accessories/MobilonTape3.jpg';
import PlasticClip1 from '../../assets/Garments Accessories/PlasticClip1.jpg';
import PlasticClip2 from '../../assets/Garments Accessories/PlasticClip2.jpg';
import PlasticClip3 from '../../assets/Garments Accessories/PlasticClip3.jpg';
import PomPom1 from '../../assets/Garments Accessories/PomPom1.jpg';
import PomPom2 from '../../assets/Garments Accessories/PomPom2.jpg';
import PomPom3 from '../../assets/Garments Accessories/PomPom3.jpg';
import RingSlider1 from '../../assets/Garments Accessories/Ring1Slider1.jpg';
import RingSlider2 from '../../assets/Garments Accessories/RingSlider2.jpg';
import RingSlider3 from '../../assets/Garments Accessories/RingSlider3.jpg';
import SatinTape1 from '../../assets/Garments Accessories/SatinTape1.jpg';
import SatinTape2 from '../../assets/Garments Accessories/SatinTape2.jpg';
import SatinTape3 from '../../assets/Garments Accessories/SatinTape3.jpg';
import SilicaGel1 from '../../assets/Garments Accessories/SilicaGel1.jpg';
import SilicaGel2 from '../../assets/Garments Accessories/SilicaGel2.jpg';
import SilicaGel3 from '../../assets/Garments Accessories/SilicaGel3.jpg';
import Sticker1 from '../../assets/Garments Accessories/Sticker1.jpg';
import Sticker2 from '../../assets/Garments Accessories/Sticker2.jpeg';
import Sticker3 from '../../assets/Garments Accessories/Sticker3.jpg';
import TissuePaper1 from '../../assets/Garments Accessories/TissuePaper1.jpg';
import TissuePaper2 from '../../assets/Garments Accessories/TissuePaper2.jpg';
import TissuePaper3 from '../../assets/Garments Accessories/TissuePaper3.jpg';
import TwillTape1 from '../../assets/Garments Accessories/TwillTape1.jpg';
import TwillTape2 from '../../assets/Garments Accessories/TwillTape2.jpg';
import TwillTape3 from '../../assets/Garments Accessories/TwillTape3.jpg';

// Categories object
const categories = {
 " Metal Item":[MetalItem1,MetalItem2,MetalItem3],
 " Plastic Item":[PlasticItem1,PlasticItem2,PlasticItem3],
 "Printed Poly":[PrintedPoly1,PrintedPoly2,PrintedPoly3],
 "Jacquard Elastic":[JacquardElastic1,JacquardElastic2,JacquardElastic3],
 " PU Leather":[PULeather1,PULeather2,PULeather3],
  Bow: [Bow1, Bow2, Bow3],
  Button: [Button1, Button2, Button3],
  Elastic: [Elastic1, Elastic2, Elastic3],
  'Hang Tag': [EHangTag1, EHangTag2, EHangTag3],
  'Heat Transfer': [HeatTransfer1, HeatTransfer2, HeatTransfer3],
  Label: [Label1, Label2, Label3],
  'Mobilon Tape': [MobilonTape1, MobilonTape2, MobilonTape3],
  'Plastic Clip': [PlasticClip1, PlasticClip2, PlasticClip3],
  'Pom Pom': [PomPom1, PomPom2, PomPom3],
  'Ring Slider': [RingSlider1, RingSlider2, RingSlider3],
  'Satin Tape': [SatinTape1, SatinTape2, SatinTape3],
  'Silica Gel': [SilicaGel1, SilicaGel2, SilicaGel3],
  Sticker: [Sticker1, Sticker2, Sticker3],
  'Tissue Paper': [TissuePaper1, TissuePaper2, TissuePaper3],
  'Twill Tape': [TwillTape1, TwillTape2, TwillTape3],
};

const Section1 = () => {
  // refs for scrolling to each category
  const sectionRefs = Object.keys(categories).reduce((acc, key) => {
    acc[key] = useRef(null);
    return acc;
  }, {});

  const scrollToCategory = (category) => {
    sectionRefs[category]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full">
          <div className="sticky top-6 bg-white p-4 ">
            <h2 className="relative font-semibold mb-4 text-center text-2xl text-gray-800">
              Category
              <span className="absolute left-1/2 -bottom-1 w-24 h-[2px] bg-[#016DB8] transform -translate-x-1/2 rounded"></span>
            </h2>

            <div className="flex flex-col ">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className="flex items-center gap-2 text-sm py-1 px-2 border-b border-gray-300 text-gray-700 hover:text-[#016DB8] transition-colors text-left"
                >
                  <FaChevronRight className="text-white text-xs bg-[#ED1C25] rounded-full" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="md:w-3/4 w-full">
          {Object.entries(categories).map(([categoryName, images]) => (
            <section
              key={categoryName}
              ref={sectionRefs[categoryName]}
              className="mb-14 scroll-mt-24"
            >
              <h2 className="flex items-center gap-2 text-2xl font-bold text-[#016DB8] mb-4">
                <FaCheckCircle /> {categoryName}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(img)}
                    className="relative overflow-hidden rounded shadow-lg cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${categoryName} ${idx + 1}`}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300 rounded"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ED1C25] via-[#016DB8] to-transparent opacity-0 group-hover:opacity-90 flex items-end p-4 rounded transition-opacity duration-300">
                   
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <img
            src={currentImage}
            alt="Enlarged"
            className="max-w-full max-h-full rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Section1;