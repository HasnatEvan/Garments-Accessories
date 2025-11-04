import React from "react";
import { Helmet } from "react-helmet";
import MarqueeText from "../Home/MarqueeText";
import GalleryHeroSection from "./GalleryHeroSection";
import Section1 from "./Section1";

const Gallery = () => {
  return (
    <div >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Gallery - Front Line BD</title>
        <meta
          name="description"
          content="Explore the Front Line BD gallery featuring our high-quality garments accessories and production excellence in Bangladesh. Discover innovation, craftsmanship, and sustainability in every product."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://frontlinebd.net/gallery" />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Gallery - Front Line BD" />
        <meta
          property="og:description"
          content="Take a closer look at Front Line BD’s premium garments accessories and production facilities through our visual gallery."
        />
        <meta property="og:url" content="https://frontlinebd.net/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://frontlinebd.net/og-gallery.jpg" />
      </Helmet>

      {/* Page Sections */}
      <GalleryHeroSection />
      {/* <MarqueeText /> */}

      <div className="max-w-[1600px] mx-auto">

        <Section1 />
      </div>
    </div>
  );
};

export default Gallery;
