import React from "react";
import { Helmet } from "react-helmet";
import MarqueeText from "../Home/MarqueeText";
import AboutHeroSection from "./AboutHeroSection";
import NewSection from "./NewSection";
import Section1 from "./Section1";
import Section2 from "./Section2";

const About = () => {
    return (
        <div className="">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>About Us - Front Line BD</title>
                <meta
                    name="description"
                    content="Front Line BD is a trusted garments accessories manufacturer and supplier in Bangladesh, delivering high-quality products to global clients with innovation, sustainability, and excellence."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://frontlinebd.net/about" />

                {/* Optional Open Graph / Social Media Tags */}
                <meta property="og:title" content="About Us - Front Line BD" />
                <meta
                    property="og:description"
                    content="Front Line BD is a trusted garments accessories manufacturer and supplier in Bangladesh, delivering high-quality products to global clients with innovation, sustainability, and excellence."
                />
                <meta property="og:url" content="https://frontlinebd.net/about" />
                <meta property="og:type" content="website" />
            </Helmet>
            <AboutHeroSection />
            <div className="max-w-[1600px] mx-auto">

                <NewSection />
                <Section1 />
                <Section2 />
            </div>
        </div>
    );
};

export default About;
