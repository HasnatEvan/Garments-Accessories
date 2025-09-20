import MarqueeText from "../Home/MarqueeText";
import GalleryHeroSection from "./GalleryHeroSection";
import Section1 from "./Section1";

const Gallery = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <GalleryHeroSection></GalleryHeroSection>
            {/* <MarqueeText></MarqueeText> */}
            <Section1></Section1>
        </div>
    );
};

export default Gallery;