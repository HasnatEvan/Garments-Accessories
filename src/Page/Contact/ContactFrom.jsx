import React from 'react';
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaPinterestP,
  FaUser,
  FaEnvelope,
  FaRegEdit
} from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { IoMdPin } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';

const ContactFrom = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 px-4 sm:px-6 lg:px-20 py-10 sm:py-14 md:py-20 bg-white text-black">

      {/* Left side: Contact Info */}
      <div className="w-full md:w-1/2 space-y-6">
        <h4 className="text-[#016DB8] font-semibold uppercase tracking-widest w-fit border-b-2 border-[#016DB8] pb-1 text-sm sm:text-base">
          Get In Touch
        </h4>

        <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>

        <div className="flex items-start gap-4">
          <IoMdPin className="text-[#ED1C25] text-xl sm:text-2xl mt-1" />
          <div>
            <h5 className="font-semibold">Location</h5>
            <p className="text-gray-600 text-sm">
              35 No, 1st Floor<br />
              Momin Road, Kadam Mubara,<br />
              Chittagong, Bangladesh
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-[#ED1C25] text-lg sm:text-xl" />
          <div>
            <h5 className="font-semibold">Phone</h5>
            <p className="text-gray-600 text-sm">+88 01926 08 32 58</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <HiOutlineMailOpen className="text-[#ED1C25] text-xl sm:text-2xl" />
          <div>
            <h5 className="font-semibold">Email</h5>
            <p className="text-gray-600 text-sm">didar@colorlinkbd.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <FaTwitter className="text-[#1DA1F2] text-xl" />
          <FaFacebookF className="text-[#1877F2] text-xl" />
          <FaVimeoV className="text-[#1AB7EA] text-xl" />
          <FaPinterestP className="text-[#E60023] text-xl" />
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full md:w-1/2 bg-gray-50 p-6 sm:p-8 rounded-md shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Fill Up The Form</h2>
        <p className="text-gray-500 text-sm mb-6 text-center">Your email address will not be published. Required fields are marked *</p>

        <form className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaUser className="text-[#ED1C25]" />
              Your Name*
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaEnvelope className="text-[#ED1C25]" />
              Email Address*
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaRegEdit className="text-[#ED1C25]" />
              Enter Your Message Here
            </label>
            <textarea
              rows="4"
              className="w-full border-b border-gray-300 bg-transparent outline-none py-2 resize-none"
              placeholder="Write your message..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#016DB8] hover:bg-[#016cb8cf] text-white px-6 py-3 rounded-md transition duration-300"
            >
              <FiSend /> Get In Touch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
