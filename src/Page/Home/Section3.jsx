import React from 'react';
import Marquee from 'react-fast-marquee';

import image1 from '../../assets/Home_Page/Our Clients/image1.png';
import image2 from '../../assets/Home_Page/Our Clients/image2.png';
import image3 from '../../assets/Home_Page/Our Clients/image3.png';
import image4 from '../../assets/Home_Page/Our Clients/image4.png';
import image5 from '../../assets/Home_Page/Our Clients/image5.jpeg';
import image6 from '../../assets/Home_Page/Our Clients/image6.png';

const Section3 = () => {
    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <section className="py-8 bg-gray-50">
            {/* Title */}
            <div className="flex justify-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#016DB8] pb-2 border-b-4 border-[#016DB8]">
                    Our Clients
                </h2>
            </div>



            {/* Marquee */}
            <Marquee pauseOnHover={true} gradient={false} speed={50}>
                {images.map((img, index) => (
                    <div key={index} className="mx-3 sm:mx-6 cursor-pointer">
                        <img
                            src={img}
                            alt={`Client ${index + 1}`}
                            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default Section3;
