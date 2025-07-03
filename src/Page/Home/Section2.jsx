import React from 'react';
import { FaStar } from 'react-icons/fa';
import image from '../../assets/Home_Page/Image_2.png';
import { motion } from 'framer-motion';

const Section2 = () => {
  const points = [
    'World-class Requirements Quality',
    'Most competitive price',
    'On-time delivery at our premises Packing',
    'Relief from short supply, wastage, and pilferage that',
    'This often occurs in the case of imported accessories',
  ];

  return (
    <section className="bg-gray-50 py-10 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side with repeatable animation */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#016DB8] mb-6">
            Why Choose Front Line BD?
          </h2>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-base sm:text-lg text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <FaStar className="text-orange-500 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side image with repeatable animation */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={image}
            alt="Why Choose Us"
            className="max-w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
