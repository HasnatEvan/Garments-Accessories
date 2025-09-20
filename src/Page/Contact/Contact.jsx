import MarqueeText from "../Home/MarqueeText";
import ContactFrom from "./ContactFrom";
import GoogleMap from "./GoogleMap";
import HeroSection from "./HeroSection";

const Contact = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <HeroSection></HeroSection>
            {/* <MarqueeText></MarqueeText> */}
            <ContactFrom></ContactFrom>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Contact;