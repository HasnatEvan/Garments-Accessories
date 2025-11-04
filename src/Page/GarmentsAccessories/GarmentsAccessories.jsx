import React from "react";
import { Helmet } from "react-helmet";
import Section1 from "./Section1";

const GrmentsAccessories= () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Products - Front Line BD</title>
        <meta
          name="description"
          content="Discover Front Line BD’s wide range of high-quality garments accessories. We manufacture and supply premium products designed for innovation, durability, and sustainability."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://frontlinebd.net/products" />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Our Products - Front Line BD" />
        <meta
          property="og:description"
          content="Explore our garments accessories collection — quality, innovation, and craftsmanship you can trust from Front Line BD."
        />
        <meta property="og:url" content="https://frontlinebd.net/products" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://frontlinebd.net/og-products.jpg"
        />
      </Helmet>

      {/* Page Section */}
      <Section1 />
    </div>
  );
};

export default GrmentsAccessories;
