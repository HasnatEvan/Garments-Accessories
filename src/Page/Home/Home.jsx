
import ContactFrom from "../Contact/ContactFrom";
import HeroSection from "./HeroSection";
import KeyFact from "./KeyFact";
import NumberTicker from "./NumberTicker";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";


const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto">

            <HeroSection></HeroSection>
            <Section1></Section1>
            <KeyFact></KeyFact>
            {/* <Section5></Section5> */}
            <Section2></Section2>
            <Section4></Section4>
            <NumberTicker></NumberTicker>
            <Section3></Section3>
            <ContactFrom></ContactFrom>


        </div>
    );
};

export default Home;