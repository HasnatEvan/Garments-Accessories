import { FaRegGem } from "react-icons/fa";

const NewSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side */}
            <div className="bg-[#003366] text-white p-6 sm:p-10 md:p-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">ABOUT</h2>
                <h3 className="text-xl sm:text-2xl font-semibold mb-8">Front Line BD</h3>

                <p className="mb-4 leading-relaxed text-sm sm:text-base">
                    Front Line BD is a trusted garments accessories manufacturer and supplier in Bangladesh, delivering high-quality products to global clients. With years of expertise and precision, we serve the evolving needs of the international fashion industry.
                </p>

                <p className="mb-4 leading-relaxed text-sm sm:text-base">
                    We blend modern design with ethical manufacturing practices, ensuring every product reflects style, durability, and craftsmanship. Our skilled team works to maintain consistent quality while staying aligned with global fashion trends.
                </p>

                <p className="leading-relaxed text-sm sm:text-base">
                    At Front Line BD, we value timely delivery, reliable service, and sustainable production. By embracing innovation and maintaining strong partnerships, we are committed to being a preferred global sourcing partner for garments accessories.
                </p>
            </div>

            {/* Right Side */}
            <div className="bg-white text-gray-900 p-6 sm:p-10 md:p-16 flex flex-col justify-center space-y-12">
                {/* Mission */}
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <FaRegGem className="text-indigo-700 text-2xl sm:text-3xl" />
                        <h4 className="text-base sm:text-lg font-semibold">OUR COMMITMENT</h4>

                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        To deliver premium garments accessories with innovation, sustainability, and unmatched service, while maintaining global standards of quality and reliability.
                    </p>
                </div>

                {/* Vision */}
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <FaRegGem className="text-indigo-700 text-2xl sm:text-3xl" />
                        <h4 className="text-base sm:text-lg font-semibold">OUR VISION</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        To be recognized worldwide as the most trusted garments accessories manufacturer in Bangladesh, admired for quality, innovation, and sustainable practices.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewSection;
