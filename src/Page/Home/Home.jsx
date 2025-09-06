
import ContactFrom from "../Contact/ContactFrom";
import HeroSection from "./HeroSection";
import KeyFact from "./KeyFact";
import MarqueeText from "./MarqueeText";
import NumberTicker from "./NumberTicker";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto ">
            <HeroSection></HeroSection>
            {/* <MarqueeText></MarqueeText> */}
            {/* <Slider></Slider> */}
            <Section1></Section1>
            <KeyFact></KeyFact>
            <Section2></Section2>
            <Section4></Section4>
            <NumberTicker></NumberTicker>
            <Section3></Section3>
            <ContactFrom></ContactFrom>
            
        </div>
    );
};

export default Home;