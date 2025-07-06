import { FaLightbulb } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

const Section1 = () => {
  return (
    <div className="bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">

        {/* Our Motto */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="border-4 border-[#003366] rounded-full w-28 h-28 flex items-center justify-center mb-6">
            <FaLightbulb className="text-[#003366] text-4xl" />
          </div>
          <h3 className="text-[#003366] text-2xl font-bold mb-3">Our Motto</h3>
          <p className="text-black text-lg leading-relaxed max-w-md">
            Our motto is to attain our most valued client satisfaction by keeping our
            commitment to providing the best services.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="border-4 border-[#003366] rounded-full w-28 h-28 flex items-center justify-center mb-6">
            <FaRocket className="text-[#003366] text-4xl" />
          </div>
          <h3 className="text-[#003366] text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-black text-lg leading-relaxed max-w-md">
            To provide top-quality garment accessories that meet and exceed customer
            expectations through innovation, reliability, and excellence in service.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Section1;
