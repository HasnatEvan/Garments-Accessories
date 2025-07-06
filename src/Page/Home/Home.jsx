
import ContactFrom from "../Contact/ContactFrom";
import HeroSection from "./HeroSection";
import MarqueeText from "./MarqueeText";
import NumberTicker from "./NumberTicker";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            {/* <MarqueeText></MarqueeText> */}
            <Slider></Slider>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <NumberTicker></NumberTicker>
            <ContactFrom></ContactFrom>
            
        </div>
    );
};

export default Home;