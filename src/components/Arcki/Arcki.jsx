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
        pt-[0px] pb-[20px] flex overflow-x-hidden z-10 relative
        max-pt-0 max-[480px]:pb-0 max-[480px]:mb-0
      "
      ref={scrollContainerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(true)}
    >
       <iframe
          className="rounded-[38px] ml-2 lg:w-[330px] lg:h-[533px] w-41 h-73  "
        
          
          src="https://www.youtube.com/embed/vOWkt8aUE94?autoplay=1&mute=1&loop=1&playlist=vOWkt8aUE94&controls=0&modestbranding=1&rel=0"
          title="Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          className="rounded-[38px] ml-2 lg:w-[330px] lg:h-[533px] w-41 h-73"
          
          src="https://www.youtube.com/embed/BxfgoiqOG_A?autoplay=1&mute=1&loop=1&playlist=BxfgoiqOG_A&controls=0&modestbranding=1&rel=0"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          className="rounded-[38px] ml-2 lg:w-[330px] lg:h-[533px] w-41 h-73"
          width="330"
          height="533"
          src="https://www.youtube.com/embed/aht2m_HScPQ?autoplay=1&mute=1&loop=1&playlist=aht2m_HScPQ&controls=0&modestbranding=1&rel=0"
          title="Video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          className="rounded-[38px] ml-2 lg:w-[330px] lg:h-[533px] w-41 h-73"
          width="330"
          height="533"
          src="https://www.youtube.com/embed/nzM_91UYNEs?autoplay=1&mute=1&loop=1&playlist=nzM_91UYNEs&controls=0&modestbranding=1&rel=0"
          title="Video 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
          <iframe
          className="rounded-[38px] ml-2 lg:w-[330px] lg:h-[533px] w-41 h-73"
          width="330"
          height="533"
          src="https://www.youtube.com/embed/BxfgoiqOG_A?autoplay=1&mute=1&loop=1&playlist=BxfgoiqOG_A&controls=0&modestbranding=1&rel=0"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
         <iframe
          className="rounded-[38px] ml-2 lg:w-[330px] lg:h-[533px] w-41 h-73"
          width="330"
          height="533"
          src="https://www.youtube.com/embed/vOWkt8aUE94?autoplay=1&mute=1&loop=1&playlist=vOWkt8aUE94&controls=0&modestbranding=1&rel=0"
          title="Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
        
      
    </div>
  );
};

export default Arcki;





       
