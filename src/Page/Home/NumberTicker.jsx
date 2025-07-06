import React, { useState, useEffect } from 'react';
import image from '../../assets/Home_Page/image007.png'; // frontlinebd image

const NumberTicker = () => {
    const [count, setCount] = useState(0);
    const [scrollTriggered, setScrollTriggered] = useState(false);

    useEffect(() => {
        let timer;
        if (scrollTriggered && count < 10) {
            timer = setTimeout(() => setCount(count + 1), 150);
        } else if (count === 10) {
            setScrollTriggered(false);
        }
        return () => clearTimeout(timer);
    }, [count, scrollTriggered]);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollTriggered) {
                setCount(0);
                setScrollTriggered(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTriggered]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-20 py-12 bg-white min-h-screen">
            {/* Text Content */}
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366] mb-6">GET TO KNOW US</h2>
                <p className="text-gray-700 mb-5 leading-relaxed text-base sm:text-lg">
                    Front Line BD is a trusted Bangladeshi company specializing in high-quality garments accessories. We provide a wide range of accessories including zippers, buttons, labels, threads, and other essential components to the garment manufacturing industry.
                </p>
                <p className="text-gray-700 mb-5 leading-relaxed text-base sm:text-lg">
                    Our dedicated team ensures timely supply and quality control to meet the demanding standards of global apparel brands. With strong logistics support and sourcing expertise, we help manufacturers streamline their production processes and maintain consistent quality.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Our expertise includes quality inspection, vendor management, and customized solutions tailored to our clients’ needs, ensuring satisfaction and long-term partnership.
                </p>
            </div>

            {/* Image and Experience Section */}
            <div className="relative w-full max-w-lg mx-auto">
                <img src={image} alt="Frontline BD Image" className="w-full rounded shadow-md object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#00B09B] to-[#96C93D] text-white text-center py-6 rounded-b-md">
                    <p className="text-5xl sm:text-6xl font-extrabold">{count}+</p>
                    <p className="text-lg sm:text-xl font-medium">Years of Experience</p>
                </div>
            </div>
        </div>
    );
};

export default NumberTicker;
