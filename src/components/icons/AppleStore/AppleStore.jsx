import React from "react";
import AppleStoreIcon from "../../../assets/Icons/AppleStore.svg"


const AppleStore = ({className}) => {
  return (
    <div className="w-full h-auto transition-transform duration-200 hover:scale-105 lg:mt-0 -mt-20 relative top-0 z-11">
      <img className={className}
      src={AppleStoreIcon}
      />
           </div>
  );
};

export default AppleStore;
