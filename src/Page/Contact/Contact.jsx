import React from "react";
import { Helmet } from "react-helmet";
import MarqueeText from "../Home/MarqueeText";
import ContactFrom from "./ContactFrom";
import GoogleMap from "./GoogleMap";
import HeroSection from "./HeroSection";

const Contact = () => {
  return (
    <div >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - Front Line BD</title>
        <meta
          name="description"
          content="Get in touch with Front Line BD for inquiries, orders, or support. Reach us via our contact form or visit our office in Bangladesh."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://frontlinebd.net/contact" />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Contact Us - Front Line BD" />
        <meta
          property="og:description"
          content="Contact Front Line BD for premium garments accessories, inquiries, or business opportunities. We are here to assist you."
        />
        <meta property="og:url" content="https://frontlinebd.net/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://frontlinebd.net/og-contact.jpg"
        />
      </Helmet>

      {/* Page Sections */}
      <HeroSection />
      {/* <MarqueeText /> */}
      <div className="max-w-[1600px] mx-auto">
        <ContactFrom />
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
