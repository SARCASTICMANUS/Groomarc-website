import React from "react";
import "./Creators.css";
// import creator1 from "../../../assets/creator1.svg";
// import creator2 from "../../../assets/creator2.svg";
// import creator3 from "../../../assets/creator3.svg";
// import creator4 from "../../../assets/creator4.svg";
// import creator5 from "../../../assets/creator5.svg";



const Creators = () => {
  const professions = [
    {
      title: "Barbers",
      image: "/creator1.svg",
      icon: "✂️", // Replace with an SVG or icon as needed
      // width:"297px",
    },
    {
      title: "Makeup Artists",
      image: "/creator2.svg",
      icon: "💄",
      // width:"298px",
    },
    {
      title: "Personal Styling",
      image: "/creator3.svg",
      icon: "👗",
      // width:"298px",
    },
    {
      title: "Skin Professionals",
      image: "/creator4.svg",
      icon: "🧴",
      // width:"323px",
      // height:"540px"

    },
    {
      title: "Fashion Designer",
      image: "/creator5.svg",
      icon: "✂️",
      // width:"287px",
      // overflow:"hidden",
      // objectfit:"cover"

    },
  ];

  return (
    <div className="profession-grid">
      {professions.map((profession, index) => (
        <div key={index} className="profession-card">
          <div className="icon">{profession.icon}</div>
          <h3 className="profession-title">{profession.title}</h3>
          <img
            src={profession.image}
            // alt={profession.title}
            className="profession-image"
            style={{
              // width: profession.width,
              // height: profession.height,
              // overflow:profession.overflow,
              // objectFit:profession.objectFit
            }}
          />
          
        </div>
      ))}
    </div>
  );
};

export default Creators;


