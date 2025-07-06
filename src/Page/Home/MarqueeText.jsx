import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeText = () => {
    return (
        <div className="bg-black py-3 text-white font-semibold text-base sm:text-lg">
            <Marquee speed={50} pauseOnHover gradient={false}>
                Welcome to Front Line BD – Your Trusted Partner in Garments Accessories & Solutions • We Deliver Quality • We Deliver Trust • Call Us: +8801830226281 .     </Marquee>
        </div>
    );
};

export default MarqueeText;
