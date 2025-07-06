import React, { useRef, useState } from 'react';
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaRegEdit,
  FaSpinner,
} from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { IoMdPin } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactFrom = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_0d78ltq', 'template_92e56ch', form.current, {
        publicKey: '4b_XIrPhrNR6Rctz4',
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for contacting us.',
          confirmButtonColor: '#016DB8',
        });
        form.current.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again.',
          confirmButtonColor: '#ED1C25',
        });
        console.error('FAILED...', error.text);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 px-4 sm:px-6 lg:px-20 py-10 sm:py-14 md:py-20 bg-gray-50 text-black">
      {/* Left: Contact Info */}
      <div className="w-full md:w-1/2 space-y-6">
        <h4 className="text-[#016DB8] font-semibold uppercase tracking-widest w-fit border-b-2 border-[#016DB8] pb-1 text-sm sm:text-base">
          Get In Touch
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Us</h2>

        {/* Address */}
        <div className="flex items-start gap-4">
          <IoMdPin className="text-[#ED1C25] text-xl sm:text-2xl mt-1" />
          <div>
            <h5 className="font-semibold">Location</h5>
            <p className="text-gray-600 text-sm">
              124, Sk. Mujib Road, (1st Floor)
              <br />
              Agrabad, Chittagong, Bangladesh
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-[#ED1C25] text-lg sm:text-xl" />
          <div>
            <h5 className="font-semibold">Phone</h5>
            <p className="text-gray-600 text-sm">+8801830226281</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <HiOutlineMailOpen className="text-[#ED1C25] text-xl sm:text-2xl" />
          <div>
            <h5 className="font-semibold">Email</h5>
            <p className="text-gray-600 text-sm">info@frontlinebd.net</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="#"
            aria-label="Facebook"
            className="text-[#1877F2] hover:text-blue-800 text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-[#1DA1F2] hover:text-sky-600 text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/8801830226281"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#25D366] hover:text-green-600 text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-md shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Fill Up The Form</h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Your email address will not be published. Required fields are marked *
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaUser className="text-[#ED1C25]" />
              Your Name*
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaEnvelope className="text-[#ED1C25]" />
              Email Address*
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
              placeholder="example@mail.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaRegEdit className="text-[#ED1C25]" />
              Enter Your Message Here
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border-b border-gray-300 bg-transparent outline-none py-2 resize-none"
              placeholder="Write your message..."
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#016DB8] hover:bg-[#016cb8cf] text-white px-6 py-3 rounded-md transition duration-300 disabled:opacity-60"
              disabled={isSending}
            >
              {isSending ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FiSend />
              )}
              {isSending ? 'Sending...' : 'Get In Touch'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
