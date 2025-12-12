import React, { useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

// Image imports


import NonWovenInterlining1  from '../../assets/Garments Accessories/Non Woven Interlining (1).png'
import NonWovenInterlining2  from '../../assets/Garments Accessories/Non Woven Interlining (2).png'
import NonWovenInterlining3  from '../../assets/Garments Accessories/Non Woven Interlining (3).png'
import MetalItem1 from '../../assets/Garments Accessories/Metal_Item1.png'
import MetalItem2 from '../../assets/Garments Accessories/Metal_Item2.png'
import MetalItem3 from '../../assets/Garments Accessories/Metal_Item3.png'
import PlasticItem1 from '../../assets/Garments Accessories/Plastic_Item1.png'
import PlasticItem2 from '../../assets/Garments Accessories/Plastic_Item2.png'
import PlasticItem3 from '../../assets/Garments Accessories/Plastic_Item3.png'

import PrintedPoly1 from '../../assets/Garments Accessories/Printed_Poly1.png'
import PrintedPoly2 from '../../assets/Garments Accessories/Printed_Poly2.png'
import PrintedPoly3 from '../../assets/Garments Accessories/Printed_Poly3.png'

import JacquardElastic1 from '../../assets/Garments Accessories/Jacquard_Elastic1.png'
import JacquardElastic2 from '../../assets/Garments Accessories/Jacquard_Elastic2.png'
import JacquardElastic3 from '../../assets/Garments Accessories/Jacquard_Elastic3.png'
import PULeather1 from '../../assets/Garments Accessories/PU_Leather (1).png'
import PULeather2 from '../../assets/Garments Accessories/PU_Leather (2).png'
import PULeather3 from '../../assets/Garments Accessories/PU_Leather (3).png'




import Button1 from '../../assets/Garments Accessories/button (1).png';
import Button2 from '../../assets/Garments Accessories/button (2).png';
import Button3 from '../../assets/Garments Accessories/button (3).png';
import Elastic1 from '../../assets/Garments Accessories/Elastic_1.png';
import Elastic2 from '../../assets/Garments Accessories/Elastic_2.png';
import Elastic3 from '../../assets/Garments Accessories/Elastic_3.png';
import EHangTag1 from '../../assets/Garments Accessories/HangTag_1.png';
import EHangTag2 from '../../assets/Garments Accessories/HangTag_2.png';
import EHangTag3 from '../../assets/Garments Accessories/HangTag_3.png';
import HeatTransfer1 from '../../assets/Garments Accessories/HeatTransfer1.png';
import HeatTransfer2 from '../../assets/Garments Accessories/HeatTransfer2.jpg';
import HeatTransfer3 from '../../assets/Garments Accessories/HeatTransfer3.jpg';
import Label1 from '../../assets/Garments Accessories/Label_1.png';
import Label2 from '../../assets/Garments Accessories/Label_2.png';
import Label3 from '../../assets/Garments Accessories/Label_3.png';
import MobilonTape1 from '../../assets/Garments Accessories/MobilonTape1.png';
import MobilonTape2 from '../../assets/Garments Accessories/MobilonTape2.png';
import MobilonTape3 from '../../assets/Garments Accessories/MobilonTape3.png';
import PlasticClip1 from '../../assets/Garments Accessories/PlasticClip1.png';
import PlasticClip2 from '../../assets/Garments Accessories/PlasticClip2 (1).png';
import PlasticClip3 from '../../assets/Garments Accessories/PlasticClip3.png';
import PomPom1 from '../../assets/Garments Accessories/PomPom (1).png';
import PomPom2 from '../../assets/Garments Accessories/PomPom (2).png';
import PomPom3 from '../../assets/Garments Accessories/PomPom (3).png';
import RingSlider1 from '../../assets/Garments Accessories/Ring1Slider1.png';
import RingSlider2 from '../../assets/Garments Accessories/RingSlider2.png';
import RingSlider3 from '../../assets/Garments Accessories/RingSlider3.png';
import SatinTape1 from '../../assets/Garments Accessories/SatinTape1.png';
import SatinTape2 from '../../assets/Garments Accessories/SatinTape2.png';
import SatinTape3 from '../../assets/Garments Accessories/SatinTape3.png';
import SilicaGel1 from '../../assets/Garments Accessories/SilicaGel (1).png';
import SilicaGel2 from '../../assets/Garments Accessories/SilicaGel (2).png';
import SilicaGel3 from '../../assets/Garments Accessories/SilicaGel (3).png';
import Sticker1 from '../../assets/Garments Accessories/Sticker1.png';
import Sticker2 from '../../assets/Garments Accessories/Sticker2.png';
import Sticker3 from '../../assets/Garments Accessories/Sticker3.png';
import TissuePaper1 from '../../assets/Garments Accessories/TissuePaper1.png';
import TissuePaper2 from '../../assets/Garments Accessories/TissuePaper2.png';
import TissuePaper3 from '../../assets/Garments Accessories/TissuePaper3.jpg';
import TwillTape1 from '../../assets/Garments Accessories/TwillTape (1).png';
import TwillTape2 from '../../assets/Garments Accessories/TwillTape (2).png';
import TwillTape3 from '../../assets/Garments Accessories/TwillTape (3).png';

// Categories object
const categories = {
  " PU Leather (TPU)": [PULeather1, PULeather2, PULeather3],
  " Non Woven Interlining": [NonWovenInterlining1,NonWovenInterlining2,NonWovenInterlining3],
  " Metal Item": [MetalItem1, MetalItem2, MetalItem3],
  " Plastic Item": [PlasticItem1, PlasticItem2, PlasticItem3],
  "Printed Poly": [PrintedPoly1, PrintedPoly2, PrintedPoly3],
  "Jacquard Elastic": [JacquardElastic1, JacquardElastic2, JacquardElastic3],

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
      <div className="sticky top-6 bg-white p-4 rounded-md shadow-sm">
        <h2 className="relative font-semibold mb-4 text-center text-2xl text-gray-800">
          Category
          <span className="absolute left-1/2 -bottom-1 w-24 h-[2px] bg-[#016DB8] transform -translate-x-1/2 rounded"></span>
        </h2>

        <div className="flex flex-col">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => scrollToCategory(category)}
              className="flex items-center gap-2 text-sm py-2 px-3 border-b border-gray-200 text-gray-700 hover:text-[#016DB8] transition-colors text-left"
            >
              <FaChevronRight className="text-white text-xs bg-[#ED1C25] rounded-full" />
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Main Content */}
    <main className="md:w-3/4 w-full mt-2 md:mt-5">
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
                className="relative overflow-hidden rounded shadow-lg cursor-pointer bg-white"
              >
                <img
                  src={img}
                  loading="lazy"
                  alt={`${categoryName} ${idx + 1}`}
                  className="w-full h-auto sm:h-48 object-contain rounded transition-transform duration-300 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#ED1C25] via-[#016DB8] to-transparent opacity-0 flex items-end p-4 rounded"></div>
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
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
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
        className="max-w-full max-h-full rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )}
</div>

  );
};

export default Section1;