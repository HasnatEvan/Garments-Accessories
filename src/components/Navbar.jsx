import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiClock,
  FiPhoneCall,
  FiMapPin,
  FiHome,
  FiInfo,
  FiPhone,
  FiMenu,
  FiX,
  FiImage,
  FiBox,
} from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/Logo/Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="text-black">
      {/* Top Header */}
      <div className="bg-gray-100 text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-2 space-y-1 md:space-y-0">
        <div className="flex items-center space-x-2">
          <FiMapPin className="text-[#ED1C25] text-lg" />
          <p className="text-xs md:text-sm">
            124, Sk. Mujib Road, (1st Floor) Agrabad, Chittagong.
          </p>
        </div>
        <div className="flex space-x-4 text-xl">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="hover:text-orange-500 text-[#1877F2]" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="hover:text-orange-500 text-[#1DA1F2]" />
          </a>
          <a
            href="https://wa.me/8801830226281"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="hover:text-orange-500 text-[#25D366]" />
          </a>
        </div>
      </div>

      {/* Middle Header */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-white px-4 md:px-16 py-6">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#016DB8]">
            <span className="text-[#ED1C25]">Front Line</span> BD
          </h1>
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="sticky top-0 z-50 bg-[#016DB8]/95 text-white px-4 md:px-16 py-2 lg:py-6 backdrop-blur-md">
        {/* Mobile Header Logo */}
        <div className="flex md:hidden items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            <h1 className="text-lg font-bold text-white">
              <span className="text-[#ED1C25]">Front Line</span> BD
            </h1>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="menu-toggle absolute right-4 top-3 md:hidden text-white text-3xl z-30"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <div
          ref={menuRef}
          className={`flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto md:static absolute top-full left-0 right-0 bg-[#016DB8]/95 md:bg-transparent transition-all duration-500 ease-in-out transform ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-5 invisible md:visible md:opacity-100 md:translate-y-0'
          }`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-1 py-2 md:py-0 px-4 transition-colors duration-200 ${
                isActive
                  ? 'text-black font-bold underline'
                  : 'hover:text-black'
              }`
            }
          >
            <FiHome /> Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-1 py-2 md:py-0 px-4 transition-colors duration-200 ${
                isActive
                  ? 'text-black font-bold underline'
                  : 'hover:text-black'
              }`
            }
          >
            <FiInfo /> About Us
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center gap-1 py-2 md:py-0 px-4 transition-colors duration-200 ${
                isActive
                  ? 'text-black font-bold underline'
                  : 'hover:text-black'
              }`
            }
          >
            <FiBox /> Products
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `flex items-center gap-1 py-2 md:py-0 px-4 transition-colors duration-200 ${
                isActive
                  ? 'text-black font-bold underline'
                  : 'hover:text-black'
              }`
            }
          >
            <FiImage /> Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-1 py-2 md:py-0 px-4 transition-colors duration-200 ${
                isActive
                  ? 'text-black font-bold underline'
                  : 'hover:text-black'
              }`
            }
          >
            <FiPhone /> Contact Us
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
