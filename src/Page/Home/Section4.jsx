import React from 'react';
import { motion } from 'framer-motion';

import CcicLogo from '../../assets/Home_Page/Certificates/ccci.png';
import ErcLogo from '../../assets/Home_Page/Certificates/erc.png';
import TradeLicenceLogo from '../../assets/Home_Page/Certificates/Trade Licence.png';
import BINCertificationLogo from '../../assets/Home_Page/Certificates/BIN Certification .png';
import TinCertificatLogo from '../../assets/Home_Page/Certificates/Tin Certificat.png';

import CcicCertificate from '../../assets/Home_Page/Certificates/ccic_certification .jpg';
import ErcCertificate from '../../assets/Home_Page/Certificates/ErcCertification  - Copy.jpg';
import TradeLicenceCertificate from '../../assets/Home_Page/Certificates/Trade Licence.jpg';
import BINCertificate from '../../assets/Home_Page/Certificates/BIN Certification .jpg';
import TinCertificate from '../../assets/Home_Page/Certificates/Tin Certificat.jpg';

const certificates = [
  {
    logo: CcicLogo,
    title: 'CCIC CERTIFIED',
    description:
      'Front Line BD is a proud member of the Chittagong Chamber of Commerce & Industry (CCCI), an esteemed industry-led organization established in 1959 representing the business and corporate sectors of Chittagong, Bangladesh. This certification reflects our commitment to upholding the highest standards of business ethics and industry excellence.',
    file: CcicCertificate,
  },
  {
    logo: ErcLogo,
    title: 'ERC CERTIFIED',
    description:
      'Front Line BD holds the Export Registration Certificate (ERC), authorized by the Ministry of Commerce of Bangladesh. This certification authorizes our company to participate in international trade and export activities, ensuring compliance with all governmental export regulations.',
    file: ErcCertificate,
  },
  {
    logo: BINCertificationLogo,
    title: 'BIN CERTIFIED',
    description:
      'Front Line BD is officially registered with a Business Identification Number (BIN) issued by the National Board of Revenue (NBR), which guarantees our tax compliance and legal operation within Bangladesh’s regulatory framework.',
    file: BINCertificate,
  },
  {
    logo: TinCertificatLogo,
    title: 'TIN CERTIFIED',
    description:
      'Front Line BD possesses a valid Taxpayer Identification Number (TIN) certificate from the National Board of Revenue (NBR), which authenticates our legal tax identity and enables us to fulfill tax obligations properly in Bangladesh.',
    file: TinCertificate,
  },
  {
    logo: TradeLicenceLogo,
    title: 'TRADE LICENCE CERTIFIED',
    description:
      'Front Line BD holds a valid Trade Licence issued by the local government authority, confirming that our business operations are fully licensed and authorized within the jurisdiction, ensuring compliance with all business laws and regulations.',
    file: TradeLicenceCertificate,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const Section4 = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#016DB8] text-center mb-10">
        Our Certifications
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // <-- triggers animation every time in view
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 items-stretch"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-between h-full text-center hover:shadow-xl transition-all"
          >
            <div className="flex flex-col items-center">
              <img
                src={cert.logo}
                alt={cert.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-[#003366] mb-3">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{cert.description}</p>
            </div>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition-all mt-auto"
            >
              VIEW CERTIFICATE
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Section4;
