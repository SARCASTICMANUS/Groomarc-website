import React from "react";
import ExpertBox from "./ExpertBox/ExpertBox";
import ExpertCards from "./ExpertCards/ExpertCards";
// /* flex justify-center pt-[50px] h-[130vh]  max-[480px]:pt-0 max-[480px]:h-[30vh] sm:h-[40vh]
const ExpertSection = () => {
  return (
    <div className="flex justify-center  pt-[50px] h-[130vh] max-[480px]:pt-0 max-[480px]:h-[60vh] max-[640px]:h-[450px] max-[768px]:h-[900px]"> 
      <ExpertBox />
      {/* <div className=""> */}
        <ExpertCards />
      {/* </div> */}
    </div>
  );
};

export default ExpertSection;
