import React from "react";
// import HeroGroup from "../../assets/HeroGroup.svg";
// import GroomingLeft from "../../assets/GroomingLeft.svg";
// import Community from "../../assets/community.svg";
import HeroImg from "../../assets/Icons/HeroImg.svg"

export default function HeroMain() {
  return (
    <div className="relative   w-full flex flex-col items-center justify-center z-10">
  
  {/* Gradient Circle behind */}
  <div className="absolute  not-only:-top-70 lg:mt-0 mt-20 z-0 lg:h-350 lg:w-350 h-95 w-95 rounded-full bg-[radial-gradient(circle,_rgba(180,222,51,.2)40%,_rgba(255,255,255,.1)60%)] "></div>



  {/* Hero Image on Top */}
  <img 
    src={HeroImg} 
    alt="Hero Group" 
    className="relative z-10 lg:-mt-0 -mt-12 w-[90%] max-w-[1000px]" 
  />
  
</div>


  );
}
