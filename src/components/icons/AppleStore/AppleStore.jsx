import React from "react";
import AppleStoreIcon from "../../../assets/Icons/AppleStore.svg"


const AppleStore = ({className}) => {
  return (
    <a
      href="https://apps.apple.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-auto transition-transform duration-200 hover:scale-105 lg:mt-0 -mt-20 relative top-0 z-11 block"
    >
      <img className={className} src={AppleStoreIcon} alt="Download on the Apple App Store" />
    </a>
  );
};

export default AppleStore;
