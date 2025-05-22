import React from "react";
import { Link } from "react-router-dom";
import Stack from "../../../assets/Icons/StackMock.svg";

const StackProfile = () => {
  return (
    <div className="flex ml-16  flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[25%] ">
      {/* Left Section - hidden on small screens */}
      <div className="hidden lg:block  xl:w-150 max-w-[50%]">
        <h1 className="text-4xl lg:text-5xl text-[#2e2e2e] mb-5 font-bold">
          Wanna Know More About Categories!
        </h1>
        <p className="text-[#6d6d6d] text-lg mb-5 max-w-[75%]">
          Standardised categories for all who deserve to be a groomer.
        </p>
        <Link to="/categories">
          <button className="border-2 border-[#90c73e] text-[#90c73e] hover:bg-[#90c73e] hover:text-white px-5 py-2 rounded-md text-base font-medium flex items-center gap-1 transition">
            Explore more <span className="text-xl">→</span>
          </button>
        </Link>
      </div>

      {/* Right Section - image centered on small screens */}
      <div className="flex mr-15 lg:w-100 w-90 justify-center items-center ">
        <img src={Stack} alt="Stack" className="" />
      </div>

      {/* Small screen categories - only visible on small screens */}
      <div className="grid   grid-cols-[30%_70%] w-full lg:hidden text-xs mt-4">
        <p className="text-5xl font-bold text-[#A5D80A] flex items-center justify-center ">
          50+
        </p>
        <h1 className="text-base font-medium text-[#2e2e2e] flex items-center justify-center p-0 m-0">
          Available categories for making your journey perfect in order to make your lifestyle fit in perfectly.
        </h1>
      </div>
    </div> 
  );
};

export default StackProfile;
