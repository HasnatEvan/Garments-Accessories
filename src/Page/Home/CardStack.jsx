import React, { useState, useEffect } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

// ✅ Import local images
import image1 from '../../../src/assets/Home_Page/New folder/Jacquard Elasti.jpg';
import image2 from '../../../src/assets/Home_Page/New folder/PU Leather.jpg';
import image3 from '../../../src/assets/Home_Page/New folder/Bow.jpg';
import image4 from '../../../src/assets/Home_Page/New folder/Button.jpg';
import image5 from '../../../src/assets/Home_Page/New folder/Elastic.jpg';
import image6 from '../../../src/assets/Home_Page/New folder/Hang Tag.jpg';
import image7 from '../../../src/assets/Home_Page/New folder/Label.png';

const cardsData = [
  { img: image1, title: "Jacquard Elastic", description: "High quality elastic fabric for garments and accessories. Perfect for stitching, crafting, and DIY projects, ensuring durability and flexibility." },
  { img: image2, title: "PU Leather", description: "Durable PU leather for bags, wallets and crafts. Water-resistant, easy to clean, and ideal for fashion and upholstery products." },
  { img: image3, title: "Bow", description: "Elegant bows for decoration and gift wrapping. Available in various colors and sizes, perfect for events, packaging, and crafts." },
  { img: image4, title: "Button", description: "Stylish buttons for all types of clothing. Made with premium materials for long-lasting use and aesthetic appeal." },
  { img: image5, title: "Elastic", description: "Flexible elastic bands for sewing, crafting, and DIY projects. Available in multiple sizes and colors." },
  { img: image6, title: "Hang Tag", description: "Durable hang tags for garments and products. Ideal for branding and labeling purposes." },
  { img: image7, title: "Label", description: "High-quality labels for clothes and accessories. Stick or sew easily for professional finishes." },
];

// Spring helpers
const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const CardStackSpring = () => {
  const [gone] = useState(() => new Set());
  const [springs, api] = useSprings(cardsData.length, (i) => ({ ...to(i), from: from(i) }));

  const bind = useDrag(
    ({ args: [index], active, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;

      if (!active && trigger) gone.add(index);

      api.start((i) => {
        if (i !== index) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : active ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = active ? 1.05 : 1;
        return { x, rot, scale, delay: undefined, config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 } };
      });

      if (!active && gone.size === cardsData.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    },
    { pointer: { touch: true } }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = cardsData.map((_, i) => i).filter((i) => !gone.has(i));
      const nextIndex = remaining.length > 0 ? remaining[0] : null;

      if (nextIndex === null) {
        gone.clear();
        api.start((i) => to(i));
        return;
      }

      gone.add(nextIndex);

      api.start((i) => {
        if (i !== nextIndex) return;
        const x = (200 + window.innerWidth) * 1;
        const rot = 10;
        const scale = 1;
        return { x, rot, scale, delay: undefined, config: { friction: 50, tension: 200 } };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [api, gone]);

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-10 px-6 sm:px-10 md:px-16 py-10 bg-gray-100">
      {/* Left content */}
      <div className="md:w-1/3 w-full text-center md:text-left flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Quality Garment Accessories for Every Need
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-lg">
          Your trusted supplier of premium buttons, elastics, bows, labels, PU leather, and hang tags.
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          We cater to fashion designers, clothing manufacturers, and craft enthusiasts across Bangladesh. All products are designed for durability, aesthetics, and ease of use.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
          <li>Top-quality materials</li>
          <li>Wide variety of products</li>
          <li>Customizable solutions available</li>
          <li>Fast nationwide delivery</li>
        </ul>
        <p className="mt-2 text-gray-700 font-semibold text-sm sm:text-base">
          Get in touch with us today to place your order or request a quote!
        </p>
      </div>

      {/* Card stack */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:w-96 h-[500px] mx-auto md:mx-0">
        {springs
          .map(({ x, y, rot, scale }, i) => (
            <animated.div key={i} style={{ x, y }} className="absolute w-full h-full">
              <animated.div
                {...bind(i)}
                style={{ transform: interpolate([rot, scale], trans), touchAction: "none" }}
                className="w-full h-full rounded-xl shadow-lg overflow-hidden bg-white flex flex-col cursor-grab select-none"
              >
                <img src={cardsData[i].img} alt={cardsData[i].title} className="w-full h-64 object-cover" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold mb-2 text-gray-700">{cardsData[i].title}</h2>
                    <p className="text-gray-600 text-sm">{cardsData[i].description}</p>
                  </div>
                  <button className="mt-4 bg-[#016DB8] text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </animated.div>
            </animated.div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default CardStackSpring;
