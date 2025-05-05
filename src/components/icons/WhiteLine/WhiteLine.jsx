import React from "react";
import "./WhiteLine.css";

const whiteLine = () => {
  return (
    <div className="relative">
    <div
      className="absolute w-full flex items-center justify-center top-[100px] z-[-10]"
    >
      <svg
        width="1785"
        height="381"
        viewBox="0 0 1785 381"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.158203 9C172.216 9.06489 257.76 30.0663 381.959 184.454C796.319 699.53 677.337 -26.02 1000.71 122.58C1377.73 295.834 1722.24 60.1103 1779.63 19.7571"
          stroke="white"
          stroke-width="17"
        />
      </svg>
      </div>
    </div>
  );
};

export default whiteLine;
