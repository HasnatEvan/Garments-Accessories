import React from "react";
import { FaRegGem } from "react-icons/fa";
import { motion } from "framer-motion";

const NewSection = () => {
  // Variants for left and right sections
  const leftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 lg:px-16 py-12 gap-8 md:gap-0">
      {/* Left Side */}
      <motion.div
        className="bg-[#003366] text-white p-6 sm:p-10 md:p-16"
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-2">
          ABOUT
        </motion.h2>
        <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl font-semibold mb-8">
          Front Line BD
        </motion.h3>

        <motion.p variants={itemVariants} className="mb-4 leading-relaxed text-sm sm:text-base">
          Front Line BD is a trusted garments accessories manufacturer and supplier in Bangladesh,
          delivering high-quality products to global clients. With years of expertise and precision,
          we serve the evolving needs of the international fashion industry.
        </motion.p>

        <motion.p variants={itemVariants} className="mb-4 leading-relaxed text-sm sm:text-base">
          We blend modern design with ethical manufacturing practices, ensuring every product reflects
          style, durability, and craftsmanship. Our skilled team works to maintain consistent quality
          while staying aligned with global fashion trends.
        </motion.p>

        <motion.p variants={itemVariants} className="leading-relaxed text-sm sm:text-base">
          At Front Line BD, we value timely delivery, reliable service, and sustainable production. By
          embracing innovation and maintaining strong partnerships, we are committed to being a
          preferred global sourcing partner for garments accessories.
        </motion.p>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="bg-white text-gray-900 p-6 sm:p-10 md:p-16 flex flex-col justify-center space-y-12"
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Mission */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-3">
            <FaRegGem className="text-indigo-700 text-2xl sm:text-3xl" />
            <h4 className="text-base sm:text-lg font-semibold">OUR COMMITMENT</h4>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            To deliver premium garments accessories with innovation, sustainability, and unmatched service,
            while maintaining global standards of quality and reliability.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-3">
            <FaRegGem className="text-indigo-700 text-2xl sm:text-3xl" />
            <h4 className="text-base sm:text-lg font-semibold">OUR VISION</h4>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            To be recognized worldwide as the most trusted garments accessories manufacturer in Bangladesh,
            admired for quality, innovation, and sustainable practices.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewSection;
