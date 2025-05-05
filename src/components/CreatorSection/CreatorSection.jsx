import React from 'react';
import Creator from './Creators/Creators';
import AlphaSection from './AlphaSection/AlphaSection';
import CreatorSmall from '../../assets/creator-small.svg';

const CreatorSection = () => {
    return (
    
    <div className="w-full  ">
      {/* Desktop / Large screens */}
      <div className="hidden sm:flex flex-col justify-center">
        <AlphaSection />
        <Creator />
      </div>

      {/* Mobile only */}
      <div className="flex sm:hidden w-full ">
        <div className="w-full flex justify-center -mt-10 items-center">
          <img src={CreatorSmall} alt="Creators" className=" w-full " />
        </div>
      </div>
    </div>
    );
};

export default CreatorSection;