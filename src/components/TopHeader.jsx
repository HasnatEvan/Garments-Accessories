import { FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-[#016DB8] md:bg-gray-100 text-white md:text-black text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-2 space-y-1 md:space-y-0">
      <div className="flex items-center space-x-2">
        <FiMapPin className="text-[#ED1C25] text-lg" />
        <p className="text-xs md:text-sm">
          124, Sk. Mujib Road, (1st Floor) Agrabad, Chittagong.
        </p>
      </div>
      <div className="flex space-x-4 text-xl">
        <a href="#" aria-label="Facebook">
          <FaFacebookF className="hover:text-orange-500 text-white md:text-[#1877F2]" />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter className="hover:text-orange-500 text-white md:text-[#1DA1F2]" />
        </a>
        <a
          href="https://wa.me/8801830226281"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="hover:text-orange-500 text-[#25D366] md:text-[#25D366]" />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
