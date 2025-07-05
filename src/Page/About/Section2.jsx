import React from 'react';
import { FiUser, FiBriefcase, FiPhone, FiMail } from 'react-icons/fi';

import image1 from '../../assets/About/image1.jpg';
import image2 from '../../assets/About/iamge2.jpg';
import Background from '../../assets/Home_Page/Background.jpg';

const people = [
  {
    name: 'Md. Riad Morshed',
    role: 'Chief Executive',
    phone: '+880-01815814145',
    email: 'riad@frontlinebd.net',
    image: image1,
    description: `Md. Riad Morshed is the visionary behind Front Line BD. With over a decade of experience in business management, he oversees the strategic direction of the company, ensuring innovation and customer satisfaction remain at the core of our operations. His leadership inspires the team to maintain high standards and continually improve.`,
  },
  {
    name: 'Md. Hasmat Ullah',
    role: 'Business Executive',
    phone: '+8801830226281',
    email: 'hasmat@frontlinebd.net',
    image: image2,
    description: `Md. Hasmat Ullah brings strong expertise in business development and client relationship management. He plays a key role in ensuring smooth communication with partners and clients. His proactive approach and commitment to excellence help drive the company’s growth and maintain long-term partnerships.`,
  },
];

const Section2 = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#016DB8] inline-block border-b-4 border-[#016DB8] pb-2">
          Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {people.map((person, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-cover bg-center"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
            }}
          >
            {/* Responsive Fixed Size Image */}
            <div className="w-32 h-40 shrink-0">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover rounded shadow"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#016DB8] flex items-center justify-center sm:justify-start gap-2">
                <FiUser /> {person.name}
              </h3>
              <p className="text-gray-700 flex items-center justify-center sm:justify-start gap-2 mt-2">
                <FiBriefcase /> {person.role}
              </p>
              <p className="text-sm text-gray-800 flex items-center justify-center sm:justify-start gap-2 mt-2">
                <FiPhone /> <span className="font-medium">{person.phone}</span>
              </p>
              <p className="text-sm text-gray-800 flex items-center justify-center sm:justify-start gap-2 mt-2">
                <FiMail /> <span className="font-medium">{person.email}</span>
              </p>
              <p className="text-gray-800 text-sm mt-4 leading-relaxed text-justify">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
