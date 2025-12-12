import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/Home_Page/Banner/image02 - Copy.jpg";
import image2 from "../../assets/Home_Page/Banner/image03 - Copy.jpg";
import image3 from "../../assets/Home_Page/Banner/image04 - Copy.jpg";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,

    // ⭐ Slick Lazy Load Enabled
    lazyLoad: "ondemand",
  };

  return (
    <div>
      <Slider {...settings}>

        <div>
          <img
            src={image1}
            loading="lazy"   // ⭐ Browser Lazy Load
            alt="Banner 1"
            className="w-full border-0 outline-none"
          />
        </div>

        <div>
          <img
            src={image3}
            loading="lazy"
            alt="Banner 3"
            className="w-full border-0 outline-none"
          />
        </div>

        <div>
          <img
            src={image2}
            loading="lazy"
            alt="Banner 2"
            className="w-full border-0 outline-none"
          />
        </div>

      </Slider>
    </div>
  );
};

export default HeroSection;
