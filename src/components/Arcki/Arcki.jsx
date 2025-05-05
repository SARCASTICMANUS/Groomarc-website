import React, { useRef, useEffect, useState } from "react";
// import "./Arcki.css"
import ArckiSVG from "../../assets/Icons/arcki.svg";

const Arcki = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    let scrollInterval;

    if (isHovered) {
      // Start scrolling when hovered
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            scrollContainerRef.current;

          // Scroll content
          scrollContainerRef.current.scrollLeft += scrollDirection * 2;

          // Reverse direction at edges
          if (scrollLeft + clientWidth >= scrollWidth) {
            setScrollDirection(-1); // Switch to left
          } else if (scrollLeft <= 0) {
            setScrollDirection(1); // Switch to right
          }
        }
      }, 20); // Adjust interval for smoothness
    } else {
      // Stop scrolling when not hovered
      clearInterval(scrollInterval);
    }

    return () => clearInterval(scrollInterval); // Cleanup interval on unmount
  }, [isHovered, scrollDirection]);

  return (
     <div
      className="
        pt-[0px] pb-[20px] overflow-x-hidden z-10 relative
        max-pt-0 max-[480px]:pb-0 max-[480px]:mb-0
      "
      ref={scrollContainerRef}
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
    >
      <img
        src={ArckiSVG}
        alt="Arcki Scrollable SVG"
        className="w-[110%] max-w-[110%]"
      />
    </div>
  );
};

export default Arcki;
