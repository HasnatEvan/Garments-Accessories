import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FiClock, FiPhoneCall, FiMapPin, FiHome, FiInfo, FiPhone, FiMenu, FiX
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
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        }
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
                        35 No, 1st Floor Momin Road, Kadam Mubarak Chittagong, Bangladesh
                    </p>
                </div>
                <div className="flex space-x-4 text-xl text-gray-600">
                    <a href="#" aria-label="Facebook" className="hover:text-orange-500"><FaFacebookF /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-orange-500"><FaTwitter /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-orange-500"><FaInstagram /></a>
                    <a href="#" aria-label="Pinterest" className="hover:text-orange-500"><FaPinterestP /></a>
                </div>
            </div>

            {/* Middle Header */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white px-4 md:px-16 py-6">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#016DB8]">
                        <samp className="text-[#ED1C25]">Front Line</samp> BD
                    </h1>
                </div>

                {/* Info Items - hidden on mobile */}
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
                            <p>didar@colorlinkbd.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiPhoneCall className="text-[#016DB8] text-3xl" />
                        <div>
                            <p className="font-semibold">Hotline</p>
                            <p>+88 01926 08 32 58</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navbar */}
            <nav className="bg-[#016DB8] text-white px-4 md:px-16 py-8 lg:py-6 relative">
                {/* Mobile Menu Button (same position for open/close icon) */}
                <button
                    onClick={toggleMobileMenu}
                    className="absolute right-4 top-3 md:hidden text-white text-3xl z-30"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Nav links container */}
                <div
                    className={`flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto mt-3 md:mt-0 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden md:flex'
                        }`}
                >
                    <NavLink
                        to="/"
                        exact
                        className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
                        activeClassName="text-[#ED1C25] font-bold"
                    >
                        <FiHome /> Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
                        activeClassName="text-[#ED1C25] font-bold"
                    >
                        <FiInfo /> About Us
                    </NavLink>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen}
                        >
                            Products{' '}
                            <IoIosArrowDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-40 z-20">
                                <NavLink
                                    to="/garments-accessories"
                                    className="block px-4 py-2 hover:bg-[#016DB8]"
                                    activeClassName="font-bold"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    Garments Accessories
                                </NavLink>
                                <NavLink
                                    to="/product2"
                                    className="block px-4 py-2 hover:bg-[#016DB8]"
                                    activeClassName="font-bold"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                   Garments Product
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink
                        to="/blog"
                        className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
                        activeClassName="text-[#ED1C25] font-bold"
                    >
                        <MdOutlineMail /> Blog
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="flex items-center gap-1 py-2 md:py-0 hover:text-[#ED1C25]"
                        activeClassName="text-[#ED1C25] font-bold"
                    >
                        <FiPhone /> Contact Us
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
