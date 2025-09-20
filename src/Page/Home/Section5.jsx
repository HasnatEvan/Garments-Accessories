import { Link } from "react-router-dom";
import image from "../../assets/Home_Page/image007.jpg";

const Section5 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-8 lg:px-16 py-12 gap-6 md:gap-12 bg-white">

      {/* Left Side Image */}
      <div className="relative flex justify-center md:justify-start w-full">
        <img
          src={image}
          alt="Front Line BD"
          className="w-full h-[500px] sm:h-[400px] md:h-[650px] object-cover"
        />
        {/* Dark overlay / inner shadow */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-4 md:px-8 text-center md:text-left space-y-4">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Front Line BD
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium">
            Premium Garments Accessories Manufacturer & Supplier
          </p>

          {/* Tagline */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold">
            Quality. Innovation. Reliability.
          </p>

          {/* Button */}
          <Link to={'/contact'}
            className="mt-4 inline-block bg-[#2E3192] hover:bg-[#114f7c] text-white text-sm sm:text-base md:text-lg lg:text-xl px-6 py-3 rounded transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-8 lg:px-16">

        {/* Title (Hidden on Mobile) */}
        <h2 className="hidden md:block text-4xl font-bold text-[#2E3192] mb-6 leading-snug text-right">
          Innovative <br /> Garments Solutions
        </h2>

        {/* Quality Products */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-4 sm:mb-6">
            <div className="w-20 sm:w-56 md:w-72 h-2 sm:h-3 md:h-5 bg-[#2E3192] mb-2 md:mb-0 md:mr-4"></div>
            <h3 className="font-extrabold text-lg sm:text-xl text-[#2E3192] text-center md:text-right md:text-lg">
              QUALITY PRODUCTS
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center md:text-left">
            Front Line BD ensures world-class garments accessories with a focus
            on quality, durability, and international standards to meet customer
            satisfaction in every order.
          </p>
        </div>

        {/* Innovative Solutions */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-4 sm:mb-6">
            <div className="w-20 sm:w-56 md:w-72 h-2 sm:h-3 md:h-5 bg-[#2E3192] mb-2 md:mb-0 md:mr-4"></div>
            <h3 className="font-extrabold text-lg sm:text-xl text-[#2E3192] text-center md:text-right md:text-lg">
              INNOVATIVE
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center md:text-left">
            We develop customized accessories based on the latest market trends
            and client needs, offering unique solutions to support global fashion brands.
          </p>
        </div>

        {/* Reliable Supply */}
        <div>
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-4 sm:mb-6">
            <div className="w-20 sm:w-56 md:w-72 h-2 sm:h-3 md:h-5 bg-[#2E3192] mb-2 md:mb-0 md:mr-4"></div>
            <h3 className="font-extrabold text-lg sm:text-xl text-[#2E3192] text-center md:text-right md:text-lg">
              RELIABLE SUPPLY
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center md:text-left">
            With years of experience, we ensure timely delivery, professional service,
            and long-term partnership as a trusted supplier in Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
