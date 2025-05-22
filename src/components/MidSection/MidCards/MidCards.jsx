import React from "react";
import MidHeading from "../MidHeading/MidHeading";
import GreenWithBlack from "../../../assets/GreenWithBlack.svg";

const CardGrid = () => {
  const cards = [
    { isHighlighted: true },
    { text: "Find Your Color Tone", isHighlighted: false },
    { text: "Know Your Fit Type", isHighlighted: false },
    { text: "1:1 Fashion Guidance", isHighlighted: false },
    { text: "Define Your Style Personality", isHighlighted: false },
    { text: "Community That Gets You", isHighlighted: false },
  ];

  return (
    <div className="flex items-center  justify-center">
      <div>
        <MidHeading />
        {/* <MidHeading /> */}

        <div className="grid grid-cols-2  sm:grid-cols-3 xl:gap-5  gap-[10px] sm:gap-[30px] mt-[10%] xl:mt-[1px] sm:mt-0 px-16  sm:px-0 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col  items-center justify-center lg:rounded-0  rounded-[7px]  xl:w-[210px] w-[90px]  sm:w-[160px] xl:h-[168px] h-[60px] sm:h-[100px] px-2 py-3 text-center font-sans
               sm:rounded-[18.9px]
              ${
                card.isHighlighted
                  ? "text-black bg-[#D5FF3C]"
                  : " bg-white border border-gray-300  text-[10px] sm:text-[16px] font-medium shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105"
              }
            `}
            >
              {card.isHighlighted && (
                <div className="flex items-center -mb-2 justify-center bg-[#D5FF3C] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-115 rounded-2xl">
                  <img
                    src={GreenWithBlack}
                    alt=""
                    className="sm:rounded-[18.9px]"
                  />
                </div>
              )}
              <p>{card?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
