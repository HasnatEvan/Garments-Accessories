import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiClock, FiPhoneCall, FiMapPin, FiHome, FiInfo, FiPhone, FiMenu, FiX, FiImage
} from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../assets/Logo/Logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('.dropdown-toggle')
      ) {
        setIsDropdownOpen(false);
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
        <div className="flex space-x-4 text-xl text-gray-600">
          <a href="#"><FaFacebookF className="hover:text-orange-500" /></a>
          <a href="#"><FaTwitter className="hover:text-orange-500" /></a>
          <a href="#"><FaInstagram className="hover:text-orange-500" /></a>
          <a href="#"><FaPinterestP className="hover:text-orange-500" /></a>
        </div>
      </div>

      {/* Middle Header */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white px-4 md:px-16 py-6">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#016DB8]">
            <span className="text-[#ED1C25]">Front Line</span> BD
          </h1>
        </div>

        <div className="hidden md:flex gap-6 mt-4 md:mt-0 text-sm">
          <div className="flex items-center gap-3">
            <FiClock className="text-[#016DB8] text-3xl" />
            <div>
              <p className="font-semibold">Opening Hours</p>
              <p>Sat - Thu: 10.00 to 18.00</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMail className="text-[#016DB8] text-3xl" />
            <div>
              <p className="font-semibold">Email Address</p>
              <p>info@frontlinebd.net</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiPhoneCall className="text-[#016DB8] text-3xl" />
            <div>
              <p className="font-semibold">Hotline</p>
              <p>+8801815814145</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar - Sticky */}
      <nav className="sticky top-0 z-50 bg-[#016DB8] text-white px-4 md:px-16 py-8 lg:py-6">
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute right-4 top-3 md:hidden text-white text-3xl z-30"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto md:static absolute top-full left-0 bg-[#016DB8] md:bg-transparent z-20 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-5 invisible md:visible md:opacity-100 md:translate-y-0'
          }`}
        >
          <NavLink
            to="/"
            exact="true"
            className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
          >
            <FiHome /> Home
          </NavLink>

          <NavLink
            to="/about"
            className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
          >
            <FiInfo /> About Us
          </NavLink>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="dropdown-toggle flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
            >
              Products{' '}
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48 z-50 transform transition-all duration-300 origin-top ${
                isDropdownOpen
                  ? 'scale-100 opacity-100 visible'
                  : 'scale-95 opacity-0 invisible'
              }`}
            >
              <NavLink
                to="/garments-accessories"
                className="block px-4 py-2 hover:bg-[#016DB8] hover:text-white"
                onClick={() => setIsDropdownOpen(false)}
              >
                Garments Accessories
              </NavLink>
              <NavLink
                to="/product2"
                className="block px-4 py-2 hover:bg-[#016DB8] hover:text-white"
                onClick={() => setIsDropdownOpen(false)}
              >
                Garments Product
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/gallery"
            className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
          >
            <FiImage /> Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
          >
            <FiPhone /> Contact Us
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
