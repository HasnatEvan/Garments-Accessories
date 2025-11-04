
import { Helmet } from "react-helmet";
import ContactFrom from "../Contact/ContactFrom";
import HeroSection from "./HeroSection";
import KeyFact from "./KeyFact";
import NumberTicker from "./NumberTicker";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import ContactIcon from './../../components/ContactIcon';
import CardStack from "./CardStack";

const Home = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Front Line BD - Leading Garments Accessories Manufacturer</title>
        <meta
          name="description"
          content="Front Line BD is a leading garments accessories manufacturer and supplier in Bangladesh, offering premium quality products with innovation, sustainability, and global standards."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://frontlinebd.net/" />

        {/* Open Graph / Social Media Tags */}
        <meta
          property="og:title"
          content="Front Line BD - Leading Garments Accessories Manufacturer"
        />
        <meta
          property="og:description"
          content="Front Line BD is a trusted garments accessories supplier from Bangladesh, delivering quality and innovation to global brands."
        />
        <meta property="og:url" content="https://frontlinebd.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://frontlinebd.net/og-image.jpg" />
      </Helmet>

      {/* Page Sections */}
      <HeroSection />
      <Section1 />
      {/* <CardStack></CardStack> */}
      <KeyFact />
      {/* <Section5 /> */}
      <Section2 />
      <Section4 />
      <NumberTicker />
      <Section3 />
      <ContactFrom />
      <ContactIcon></ContactIcon>
    </div>
  );
};

export default Home;
