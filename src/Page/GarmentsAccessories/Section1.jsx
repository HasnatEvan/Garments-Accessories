import React, { useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// Image imports
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

const categories = {
  Bow: [Bow1, Bow2, Bow3],
  Button: [Button1, Button2, Button3],
  Elastic: [Elastic1, Elastic2, Elastic3],
  'Hang Tag': [EHangTag1, EHangTag2, EHangTag3],
  'Heat Transfer': [HeatTransfer1, HeatTransfer2, HeatTransfer3],
  Label: [Label1, Label2, Label3],
  'Mobilon Tape': [MobilonTape1, MobilonTape2, MobilonTape3],
  'Plastic Clip': [PlasticClip1, PlasticClip2, PlasticClip3],
  PomPom: [PomPom1, PomPom2, PomPom3],
  'Ring Slider': [RingSlider1, RingSlider2, RingSlider3],
  'Satin Tape': [SatinTape1, SatinTape2, SatinTape3],
  'Silica Gel': [SilicaGel1, SilicaGel2, SilicaGel3],
  Sticker: [Sticker1, Sticker2, Sticker3],
  'Tissue Paper': [TissuePaper1, TissuePaper2, TissuePaper3],
  'Twill Tape': [TwillTape1, TwillTape2, TwillTape3],
};

const Section1 = () => {
  const sectionRefs = Object.keys(categories).reduce((acc, key) => {
    acc[key] = useRef(null);
    return acc;
  }, {});

  const scrollToCategory = (category) => {
    sectionRefs[category]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6">
      {/* Top Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">
        Garments Accessories
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full sticky top-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold mb-4 text-center">Accessories Category</h2>
            <div className="flex flex-col gap-2">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className="flex items-center gap-2 px-4 py-3 text-base text-left font-medium text-gray-800 rounded hover:bg-blue-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <FaCheckCircle className="text-blue-500" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 w-full">
          {Object.entries(categories).map(([categoryName, images]) => (
            <div
              key={categoryName}
              ref={sectionRefs[categoryName]}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-green-600 mb-4">
                <FaCheckCircle className="text-green-600" />
                {categoryName}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="w-full overflow-hidden rounded shadow-md">
                    <img
                      src={img}
                      alt={`${categoryName} ${idx + 1}`}
                      className="w-full h-48 object-cover rounded hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
