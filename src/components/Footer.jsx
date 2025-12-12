import React from 'react';
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 sm:px-8 lg:px-16 border-t border-gray-200">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left section */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              loading="lazy"
              alt="Front Line Logo"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#016DB8]">
              <span className="text-[#ED1C25]">Front Line</span> BD
            </h1>
          </div>

          <div className="flex items-start gap-3">
            <FaHome className="text-[#ED1C25] mt-1" />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              124, Sk. Mujib Road, (1st Floor)<br />
              Agrabad, Chittagong, Bangladesh
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-[#ED1C25] mt-1" />
            <div className="flex flex-col text-gray-700 text-sm md:text-base">
              <a href="tel:+8801830226281" className="hover:text-[#016DB8] transition">
                +8801830226281
              </a>
              <a href="tel:+8801815814145" className="hover:text-[#016DB8] transition">
                +8801815814145
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#ED1C25]" />
            <a
              href="mailto:info@frontlinebd.net"
              className="text-gray-700 text-sm md:text-base hover:text-[#016DB8] transition"
            >
              info@frontlinebd.net
            </a>
          </div>
        </div>

        {/* Middle section */}
        <div>
          <h2 className="text-[#016DB8] text-xl font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2 font-medium text-sm md:text-base">
            {['/', '/about', '/products', '/gallery', '/contact'].map((path, idx) => {
              const names = ['Home', 'About Us', 'Product', 'Gallery', 'Contact Us'];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `transition-colors ${
                        isActive ? 'text-[#016DB8] font-semibold' : 'hover:text-[#016DB8]'
                      }`
                    }
                  >
                    {names[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right section */}
        <div>
          <h2 className="text-[#016DB8] text-xl font-semibold mb-4">Keep In Touch</h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#1877F2] w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-blue-800 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-[#1DA1F2] w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-sky-600 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://wa.me/8801830226281"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-600 text-xs md:text-sm">
        © 2025 <strong>Front Line BD</strong>. All Rights Reserved.
      </div>

      <div className="text-center text-gray-500 text-xs mt-1">
        Developed by{' '}
        <a
          href="https://www.facebook.com/profile.php?id=61575431671174"
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
