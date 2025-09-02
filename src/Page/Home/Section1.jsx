import Image from '../../assets/Home_Page/Image_1.jpg';

const Section1 = () => {
  const paragraphs = [
    "Discover Front Line Bd, your trusted source for high-quality Garments accessories manufacturers in Bangladesh. We are the most popular Garments accessories manufacturer & supplier company in Bangladesh.",
    "At Front Line Bd, we specialize in producing a wide range of premium garment accessories such as Hangtags, Labels, Stickers, Twill Tape, Satin Bows, Elastic, as well as all kinds of metal and plastics items, printed poly, Jacquard elastic and more.",
    "The difference is our people. We always provide complete attention and priority for our honorable customers.",
    "We have been working with many reputed retailers all over the world including WALMART, H&M, ZARA, GAP, C&A, ESPRIT, CARTER’S, M&S, FUNDAY, TEMA, MATALAN, SKIVA, G&W etc.",
    "Our commitment to excellence, innovation, and sustainability makes us the preferred partner for leading brands worldwide."
  ];

  return (
    <div className="relative px-4 sm:px-18 py-12 max-w-7xl mx-auto bg-white">
      <div className="relative z-10">
        {/* Heading */}
        <h1 className="text-left text-[16px] sm:text-2xl md:text-4xl font-bold text-[#003366] mb-10 leading-tight">
          Welcome To Front Line BD - Garments Accessories <br />
          Manufacturer & Supplier In Bangladesh
        </h1>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-16">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex">
            <img
              src={Image}
              alt="Office Team"
              className="w-full h-80 sm:h-96 md:h-full lg:h-[540px] object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>


          {/* Text Section */}
          <div className="w-full md:w-1/2 text-black text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 px-2 md:px-0 text-left md:text-left space-y-2">
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
