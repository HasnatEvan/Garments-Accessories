
import MarqueeText from "../Home/MarqueeText";
import AboutHeroSection from "./AboutHeroSection";
import NewSection from "./NewSection";
import Section1 from "./Section1";
import Section2 from "./Section2";


const About = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <AboutHeroSection></AboutHeroSection>
            {/* <MarqueeText></MarqueeText> */}
            <NewSection></NewSection>
            <Section1></Section1>
            <Section2></Section2>

        </div>
    );
};

export default About;