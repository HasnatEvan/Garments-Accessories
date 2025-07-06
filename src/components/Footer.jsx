import React, { useState } from 'react';
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';
import logo from '../assets/Logo/Logo.png';

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <footer className="bg-white text-black pt-8 pb-6 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Left section */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Front Line Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#016DB8]">
              <span className="text-[#ED1C25]">Front Line</span> BD
            </h1>
          </div>
          <div className="flex items-start space-x-3">
            <FaHome className="text-[#ED1C25] mt-1" />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              124, Sk. Mujib Road, (1st Floor)<br />
              Agrabad, Chittagong, Bangladesh
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-[#ED1C25]" />
            <p className="text-gray-700 text-sm md:text-base">+8801830226281</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-[#ED1C25]" />
            <p className="text-gray-700 text-sm md:text-base">info@frontlinebd.net</p>
          </div>
        </div>

        {/* Middle section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-[#016DB8] text-xl font-semibold mb-4">Quick Link</h2>
          <ul className="text-black font-semibold space-y-2 text-sm md:text-base">
            <li className="cursor-pointer hover:text-[#016DB8] transition-colors duration-200">Home</li>
            <li className="cursor-pointer hover:text-[#016DB8] transition-colors duration-200">About Us</li>

            {/* Products with dropdown */}
            <li className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full flex items-center justify-between hover:text-[#016DB8] focus:outline-none transition-colors duration-200"
                aria-expanded={showDropdown}
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && (
                <ul className="mt-2 ml-4 pl-4 border-l border-gray-300 space-y-1">
                  <li className="cursor-pointer hover:text-[#016DB8] transition-colors duration-200">
                    Garments Accessories
                  </li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-[#016DB8] transition-colors duration-200">Gallery</li>
            <li className="cursor-pointer hover:text-[#016DB8] transition-colors duration-200">Contact Us</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-[#016DB8] text-xl font-semibold mb-4">Keep In Touch</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#1877F2] rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#1DA1F2] rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/8801830226281"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-16 text-gray-600 text-center text-xs md:text-sm border-t border-gray-300 pt-4">
        Copyright © 2024 <strong>Front Line Bd.</strong> All Rights Reserved.
      </div>

      {/* Developer credit */}
      <div className="text-gray-500 text-center text-xs mt-2 ">
        Developed by{' '}
        <a
          href="https://stalwart-pavlova-9b7a27.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#016DB8] hover:underline"
        >
          Hasnat Evan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
