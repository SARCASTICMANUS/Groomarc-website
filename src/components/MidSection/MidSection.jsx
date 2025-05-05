import React from "react";
import MidCards from "./MidCards/MidCards";
import SideMockComponent from "../MidSection/SideMock/SideMock";


const MidSection = () => {
  return (
    
    <div className="w-full ">
      {/* Show SideMockComponent above MidCards on md and below */}
      {/* <MidHeading/> */}
     

      <div className="grid grid-cols-1 lg:ml-32   lg:grid-cols-2 items-center ">
        <div className="col   ">
          <MidCards />
        </div>
        
        {/* Show SideMockComponent beside MidCards on lg and up */}
        <div className="hidden   lg:block ">
          <SideMockComponent />
        </div>
      </div>

      {/* Show SideMockComponent below MidCards on md and below */}
      <div className="block lg:hidden  mt-4">
        <SideMockComponent />
      </div>
    </div>
  );
};

export default MidSection;
