// src/pages/Home.jsx

import CombIcon from "../components/icons/CombIcon/CombIcon";
import ScissorsIcon from "../components/icons/ScissorsIcon/ScissorsIcon";
import Heading from "../components/icons/Heading/Heading";
import PlayStore from "../components/icons/PlayStore/PlayStore";
import AppleStore from "../components/icons/AppleStore/AppleStore";
import HeroMain from "../components/HeroMain/HeroMain";
import Arcki from "../components/Arcki/Arcki";
import MidSection from "../components/MidSection/MidSection";
import ExpertSection from "../components/ExpertSection/ExpertSection";
import StackSection from "../components/StackSection/StackSection";
import CreatorSection from "../components/CreatorSection/CreatorSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import FaqSection from "../components/FAQ/FaqSection";
import WhiteLine from "../components/icons/WhiteLine/WhiteLine";
import GreenLine from "../components/icons/GreenLine/GreenLine";
import GreenLight from "../assets/Icons/green-light.svg";

export default function Home() {
  return (
    <>
      <CombIcon />
      <ScissorsIcon />
      <Heading />

      <div className="flex flex-wrap justify-center items-center gap-2">
        <span className="w-20 sm:w-24 md:w-40 lg:w-48">
          <PlayStore className="w-full h-auto" />
        </span>
        <span className="w-20 sm:w-24 md:w-40 lg:w-48">
          <AppleStore className="w-full h-auto" />
        </span>
      </div>

      <div className="relative">
        <GreenLine />
        <WhiteLine />
        <HeroMain />
      </div>

      <Arcki />

      <div className="flex items-center justify-center">
        <MidSection />
      </div>

      <ExpertSection />

      <div className="relative">
        <StackSection />
      </div>

      <CreatorSection />
      <ReviewSection />

      <div className="hidden sm:block GreenLight absolute top-970 inset-y-0 right-0 -z-1 h-450">
        <img src={GreenLight} alt="" />
      </div>

      <FaqSection />
    </>
  );
}
