import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CombIcon from "./components/icons/CombIcon/CombIcon";
import ScissorsIcon from "./components/icons/ScissorsIcon/ScissorsIcon";
import Heading from "./components/icons/Heading/Heading";
import PlayStore from "./components/icons/PlayStore/PlayStore";
import AppleStore from "./components/icons/AppleStore/AppleStore";
import HeroMain from "./components/HeroMain/HeroMain";
import Arcki from "./components/Arcki/Arcki";
import MidSection from "./components/MidSection/MidSection";
import ExpertSection from "./components/ExpertSection/ExpertSection";
import StackSection from "./components/StackSection/StackSection";
import CreatorSection from "./components/CreatorSection/CreatorSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import FaqSection from "./components/FAQ/FaqSection";
import Footer from "./components/Footer/Footer";

// import Arcki from './components/icons/Arcki/Arcki'
import WhiteLine from "./components/icons/WhiteLine/WhiteLine";
import GreenLine from "./components/icons/GreenLine/GreenLine";
import GreenLight from "./assets/Icons/green-light.svg";
// import Green from "./assets/Icons/GreenLight.svg"

function App() {
  const [count, setCount] = useState(0);

  return (
    < >
      
      <Navbar />
      <CombIcon />
      <ScissorsIcon />
      <Heading />
      <div className="flex flex-wrap justify-center items-center gap-2">
      
        <span className="w-20 sm:w-24 md:w-40 lg:w-48">
          <PlayStore className="w-full h-auto"/>
        </span>
        <span className="w-20 sm:w-24 md:w-40 lg:w-48">
          <AppleStore className="w-full h-auto" />
        </span>
      </div>
      {/* HERO GROUP */}
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
      <div className="hidden sm:block GreenLight absolute top-970 inset-y-0   right-0 -z-1 h-525  ">
      <img src={GreenLight} alt="" />
     </div>
      {/* <CommunitySection /> */}
      <FaqSection />
      {/* <div className=""> */}
      
      <Footer />
      
      {/* </div> */}
    </>
  );
}

export default App;
