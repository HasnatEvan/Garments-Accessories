import React, { useState, useEffect, useMemo } from "react";
import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import shuffle from "lodash.shuffle";

// ✅ তোমার সব ইমেজ এখানে ইম্পোর্ট করা আছে
import image1 from "../../assets/Gallery/image1.jpeg.jpg";
import image2 from "../../assets/Gallery/image2.jpg";
import image3 from "../../assets/Gallery/image3.jpeg";
import image4 from "../../assets/Gallery/image4.jpeg";
import image5 from "../../assets/Gallery/image5.jpeg";
import image6 from "../../assets/Gallery/image6.jpeg";
import image7 from "../../assets/Gallery/image7.jpeg";
import image8 from "../../assets/Gallery/image8.jpeg";
import image9 from "../../assets/Gallery/image9.jpeg";
import image10 from "../../assets/Gallery/image10.jpeg";
import image11 from "../../assets/Gallery/image11.jpeg";
import image12 from "../../assets/Gallery/image12.jpeg";
import image13 from "../../assets/Gallery/image13.jpeg";
import image14 from "../../assets/Gallery/image14.jpeg";
import image15 from "../../assets/Gallery/image15.jpeg";
import image16 from "../../assets/Gallery/image16.jpeg";
import image17 from "../../assets/Gallery/image17.jpeg";
import image18 from "../../assets/Gallery/image18.jpg";
import image19 from "../../assets/Gallery/image19.jpeg";
import image20 from "../../assets/Gallery/image20.jpeg";
import image21 from "../../assets/Gallery/image21.jpeg";

// ✅ responsive columns hook
function useMedia(queries, values, defaultValue) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    const mediaQueryLists = queries.map(q => window.matchMedia(q));
    const getValue = () => {
      const index = mediaQueryLists.findIndex(mql => mql.matches);
      return typeof values[index] !== "undefined" ? values[index] : defaultValue;
    };
    setValue(getValue);
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach(mql => mql.addEventListener("change", handler));
    return () =>
      mediaQueryLists.forEach(mql => mql.removeEventListener("change", handler));
  }, [queries, values, defaultValue]);
  return value;
}

// ✅ images array
const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17,
  image18, image19, image20, image21
];

// ✅ প্রতিটা ইমেজের height র‍্যান্ডম করা হয়েছে masonry effect এর জন্য
const data = images.map((img) => ({
  css: img,
  height: 200 + Math.random() * 300,
}));

const Section1 = () => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width }] = useMeasure();
  const [items, set] = useState(data);

  // 🔁 প্রতি 3 সেকেন্ডে shuffle হবে
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 3000);
    return () => clearInterval(t);
  }, []);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height) - child.height;
      return { ...child, x, y, width: width / columns };
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 80 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-10"
      style={{ height: Math.max(...heights), width: "90%" }}
    >
      {transitions((style, item) => (
        <a.div
          style={{
            position: "absolute",
            transform: style.x
              .to(x => `translate3d(${x}px,${style.y.get()}px,0)`),
            width: style.width,
            height: item.height,
            opacity: style.opacity,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${item.css})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          />
        </a.div>
      ))}
    </div>
  );
};

export default Section1;
