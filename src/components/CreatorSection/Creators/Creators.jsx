
import React from "react";
// import crerr from "../../assests/Icons/creatorr.png"; // Adjust the path as necessary
import Creatorr from "../../../assets/Icons/creatorr.png"



function Creators() {
  return (
    <div className="flex justify-center items-center  h-[40rem] mb-10 -mt-[22px]">
      <img
        src={Creatorr}
        alt="creatorr"
        className=""
        style={{ height: "auto", width: "auto", maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}

export default Creators;


