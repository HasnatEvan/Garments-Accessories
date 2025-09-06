import { FaLightbulb, FaBalanceScale, FaHandshake, FaThumbsUp } from "react-icons/fa";
import image from "../../assets/KeyFact/image01.jpg";

const KeyFact = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-3 sm:px-10 md:px-16 lg:px-20">

            {/* Left Side Image + Title */}
            <div className="relative flex items-center justify-center bg-white">
                <img
                    src={image}
                    alt="Key Facts"
                    className="w-full h-[280px] sm:h-[380px] md:h-[600px] object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center md:justify-start px-4 sm:px-6 md:pl-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight text-center md:text-left">
                        SOME <br />
                        KEY FACTS
                    </h2>
                </div>
            </div>


            {/* Right Side Facts */}
            <div className="bg-[#003366] text-white p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Box 1 */}
                <div className="text-center flex flex-col items-center">
                    <FaLightbulb className="text-3xl sm:text-4xl md:text-5xl mb-3" />
                    <h4 className="font-semibold mb-2 uppercase text-sm sm:text-base md:text-lg">
                        DRIVING INNOVATION
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                        Fontline BD always focuses on modern technology and creative
                        solutions to deliver unique fashion and lifestyle products
                        for global customers.
                    </p>
                </div>

                {/* Box 2 */}
                <div className="text-center flex flex-col items-center">
                    <FaBalanceScale className="text-3xl sm:text-4xl md:text-5xl mb-3" />
                    <h4 className="font-semibold mb-2 uppercase text-sm sm:text-base md:text-lg">
                        ETHICAL PRACTICES
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                        We believe in honesty, fairness, and sustainability.
                        At Fontline BD, we ensure ethical sourcing and responsible
                        production for a better tomorrow.
                    </p>
                </div>

                {/* Box 3 */}
                <div className="text-center flex flex-col items-center">
                    <FaHandshake className="text-3xl sm:text-4xl md:text-5xl mb-3" />
                    <h4 className="font-semibold mb-2 uppercase text-sm sm:text-base md:text-lg">
                        BUILDING TRUST
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                        We keep our promises with quality assurance and on-time
                        delivery. Our long-term client relationships are built
                        on trust and transparency.
                    </p>
                </div>

                {/* Box 4 */}
                <div className="text-center flex flex-col items-center">
                    <FaThumbsUp className="text-3xl sm:text-4xl md:text-5xl mb-3" />
                    <h4 className="font-semibold mb-2 uppercase text-sm sm:text-base md:text-lg">
                        CUSTOMER FIRST
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                        At Fontline BD, customer satisfaction is our top priority.
                        Quality products, timely service, and dedicated teamwork
                        make us a trusted partner worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KeyFact;
