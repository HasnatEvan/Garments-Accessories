import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiPhone, FiMenu, FiX, FiImage, FiBox } from "react-icons/fi";
import logo from "../../src/assets/Logo/Logo.png";

const BottomNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white md:bg-[#016DB8]/95 text-black md:text-white px-4 md:px-16 py-2 lg:py-6 backdrop-blur-md shadow-md">
      {/* Mobile Header Logo */}
      <div className="flex md:hidden items-center justify-between mb-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-lg font-extrabold text-[#016DB8]">
            <span className="text-[#ED1C25]">Front Line</span> BD
          </h1>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="menu-toggle absolute right-4 top-3 md:hidden text-black text-3xl z-30"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Nav Links */}
      <div
        ref={menuRef}
        className={`flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto md:static absolute top-full left-0 right-0 bg-white md:bg-transparent transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible md:visible md:opacity-100 md:translate-y-0"
        }`}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-1 py-2 md:py-0 px-4 transition-colors duration-200 ${
              isActive
                ? "text-black font-bold underline"
                : "hover:text-[#016DB8]"
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
                ? "text-black font-bold underline"
                : "hover:text-[#016DB8]"
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
                ? "text-black font-bold underline"
                : "hover:text-[#016DB8]"
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
                ? "text-black font-bold underline"
                : "hover:text-[#016DB8]"
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
                ? "text-black font-bold underline"
                : "hover:text-[#016DB8]"
            }`
          }
        >
          <FiPhone /> Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;
