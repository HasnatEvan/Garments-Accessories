import { Link } from "react-router-dom";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import logo from "../../src/assets/Logo/Logo.png";

const MiddleHeader = () => {
  return (
    <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-white text-gray-800 px-4 md:px-16 py-6">
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#016DB8]">
            <span className="text-[#ED1C25]">Front Line</span> BD
          </h1>
        </Link>
      </div>

      <div className="flex gap-6 mt-4 md:mt-0 text-sm">
        <div className="flex items-center gap-3">
          <FiClock className="text-[#016DB8] text-2xl" />
          <div>
            <p className="font-semibold">Opening Hours</p>
            <p>Sat-Thu 9.00 am to 5 pm</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineMail className="text-[#016DB8] text-2xl" />
          <div>
            <p className="font-semibold">Email Address</p>
            <p>info@frontlinebd.net</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiPhoneCall className="text-[#016DB8] text-2xl" />
          <div>
            <p className="font-semibold">Hotline</p>
            <p>+8801830226281</p>
            <p>+8801815814145</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
