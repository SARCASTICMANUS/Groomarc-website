import React from 'react';
import G from '../../../assets/G.svg';
import R from '../../../assets/R.svg';
import O from '../../../assets/O.svg';
import O1 from '../../../assets/O-1.svg';
import M from '../../../assets/M.svg';
import A from '../../../assets/A.svg';
import R1 from '../../../assets/R-1.svg';
import C from '../../../assets/C.svg';

const AlphaSection = () => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center relative">
      {/* Left Section */}
      <div className="flex justify-center items-center relative">
        <img src={R1} alt="" />
        <img src={O1} alt="" className="absolute -mt-[26%] -ml-[10%]" />
        <img src={A} alt="" />
        <img src={M} alt="" />
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center relative">
        <img src={C} alt="" />
        <img src={G} alt="" className="absolute -mt-[29%] -ml-[7%]" />
        <img src={R} alt="" />
        <img src={O} alt="" />
      </div>
    </div>
  );
};

export default AlphaSection;
