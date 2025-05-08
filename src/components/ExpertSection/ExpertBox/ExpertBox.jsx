import React from "react";
import Line from "../../../assets/line.svg";

const ExpertBox = () => {
  return (
    <div
      className="bg-[#242C07]  text-white text-center lg:rounded-3xl rounded-2xl h-[539px] max-[640px]:h-[200px] max-[768px]:h-[400px] lg:w-[1236px] w-117 flex justify-center font-sans relative max-[480px]:h-[250px] max-[480px]:w-[366px] max-[480px]:rounded-[12px]"
    >
      {/* Background line image */}
      <div className="absolute z-[1] flex items-center justify-center w-full">
        <img src={Line}  />
      </div>

      {/* Heading text */}
      <div className="lg:mt-[75px] m-7 lg:leading-8  max-[480px]:mt-[20px] max-[480px]:leading-[0.7rem] z-[2]">
        <h1 className="text-[24px] mt-0 mb-0 p-0 max-[480px]:text-[20px] font-medium xl:text-[60px] md:text-[30px] sm:text-[20px] xs:text-[20px]">
          World-Class <span className="text-[#d4ff00] ">Experts</span>
        </h1>
        <br />
        <h1 className="xl:text-6xl text-[24px] mt-0  mb-0 max-[480px]:text-[20px] font-medium  md:text-[30px] sm:text-[20px] xs:text-[20px]">At Fingertips!</h1>
      </div>
    </div>
  );
};

export default ExpertBox;

