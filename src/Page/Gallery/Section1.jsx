import image1 from '../../../src/assets/Gallery/image (1).jpg';
import image2 from '../../../src/assets/Gallery/resize (2).jpg';
import image3 from '../../../src/assets/Gallery/image (2).jpeg';
import image4 from '../../../src/assets/Gallery/image (3).jpeg';
import image5 from '../../../src/assets/Gallery/image (4).jpeg';
import image6 from '../../../src/assets/Gallery/image (5).jpeg';
import image7 from '../../../src/assets/Gallery/image (6).jpeg';
import image8 from '../../../src/assets/Gallery/image (7).jpeg';
import image9 from '../../../src/assets/Gallery/image (8).jpeg';
import image10 from '../../../src/assets/Gallery/image (9).jpeg';
import image11 from '../../../src/assets/Gallery/resize (3).jpg';
import image12 from '../../../src/assets/Gallery/image (11).jpeg';
import image13 from '../../../src/assets/Gallery/resize (1).jpg';

const Section1 = () => {
  const images = [
    image1,
    image3,
    image4,
    image10,
    image6,
    image7,
    image8,
    image9,
    image5,
    image11,
    image12,
    image13,
    image2,
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            loading="lazy"  // <-- Lazy Loading Added
            alt={`Gallery ${index + 1}`}
            className="w-full mb-4 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 break-inside-avoid rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Section1;
