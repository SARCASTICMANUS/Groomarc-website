import React from "react";
import LeftMockup from "../../../assets/Icons/LeftMock.svg";
import CenterMockup from "../../../assets/Icons/CenterMock.svg";
import RightMockup from "../../../assets/Icons/RightMock.svg";

const ExpertCards = () => {
  return (
    // <div className="relative  ">
    <div className="lg:w-full  flex row lg:m-40 lg:gap-10 gap-2 p-5 absolute z-[1] mt-[15%]  justify-center items-center overflow-hidden">
    
      <div className="bg-white mt-6 rounded-[15px] shadow-md text-center h-[595px] sm:h-[400px]   left-0 flex flex-col items-center justify-center sm:w-[300px] sm:h-auto sm:mt-[8%] sm:p-0 md:w-[340px] md:h-[500px] max-sm:w-[100%] max-sm:h-[240px]">
        <h2 className="text-2xl  text-[#333] mb-2 max-sm:text-sm max-sm:leading-4 max-sm:p-[11%] max-sm:mb-0 p-1 sm:p-2 font-bold">Join the groups</h2>
        <p className="text-base  text-[#666] font-semibold max-sm:text-xs max-sm:leading-4 max-sm:p-1 max-sm:mb-0 p-1 sm:p-2">
          Regular feed with every new post waiting for your interaction.
        </p>
        <img
          src={LeftMockup}
          alt="Card 1"
          className="w-[347.83px]  h-[501.46px] max-sm:w-[80%] max-sm:h-auto overflow-hidden"
        /></div>

      <div className="bg-white  rounded-[15px] shadow-md text-center h-[595px] sm:h-[400px] w-[375px] left-0 flex flex-col items-center justify-center sm:w-[300px] sm:h-auto sm:mt-[8%] sm:p-0 md:w-[340px] md:h-[500px] max-sm:w-[100%] max-sm:h-[240px] overflow-hidden">
        <img
          src={CenterMockup}
          alt="Card 2"
          className="w-[347.83px]  h-[501.46px] max-sm:w-[80%] max-sm:h-auto overflow-hidden "
        />
        <h2 className="text-2xl  text-[#333] mb-2 max-sm:text-sm max-sm:leading-4 max-sm:p-[11%] max-sm:mb-0 p-1 sm:p-2 font-bold">
          Unleash Your Style Potential
        </h2>
        <p className="text-base  text-[#666] font-semibold max-sm:text-xs max-sm:leading-4 max-sm:p-1 max-sm:mb-0 p-1 sm:p-2">
          Discover, share, and redefine your fashion game with every swipe
        </p>
      </div>

      <div className=" mt-6 bg-white rounded-[15px] shadow-md text-center h-[595px] sm:h-[400px] w-[375px] left-0 flex flex-col items-center justify-center sm:w-[300px] sm:h-auto sm:mt-[8%] sm:p-0 md:w-[340px] md:h-[500px] max-sm:w-[100%] max-sm:h-[240px]">
        <h2 className="text-2xl text-[#333] mb-2 max-sm:text-sm max-sm:leading-4 max-sm:p-[11%] max-sm:mb-0 p-1 sm:p-2 font-bold">
          Content Personalization
        </h2>
        <p className="text-base  text-[#666] font-semibold max-sm:text-xs max-sm:leading-4 max-sm:p-1 max-sm:mb-0 p-1 sm:p-2">
          Regular feed with every new post waiting for your interaction
        </p>
        <img
          src={RightMockup}
          alt="Card 3"
          className="w-[347.83px] h-[501.46px] max-sm:w-[80%] max-sm:h-auto overflow-hidden"
        />
      </div>
    </div>
    // </div>
  );
};

export default ExpertCards;