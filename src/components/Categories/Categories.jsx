
import React, { useState } from "react";
import Closet from "../../assets/Groomarc/Closet.svg";
import PersonalStyling from "../../assets/Groomarc/Personal_stylin.svg";
import HealthAndFitness from "../../assets/Groomarc/fitnes.svg";
import EventStyling from "../../assets/Groomarc/Event_stylin.svg";
import Grooming from "../../assets/Groomarc/Grooming.svg";  
import PersonalCare from "../../assets/Groomarc/Personal.svg";
import Skincare from "../../assets/Groomarc/Skincare.svg";  
import Fragrance from "../../assets/Groomarc/Fragrance.svg";
import PersonalBranding from "../../assets/Groomarc/Personal_branding.svg";
import Haircare from "../../assets/Groomarc/Haircare.svg";
import TravelStyling from "../../assets/Groomarc/Travel_stylin.svg";
import FashionDesigner from "../../assets/Groomarc/Fashion_Designer.svg";
import AccessoriesStyling from "../../assets/Groomarc/Accessories.svg";
import Modeling from "../../assets/Groomarc/Modeling.svg";  
import MakeupArtist from "../../assets/Groomarc/Makeup_Artist.svg";

const Categories = () => {
  const cards = [
    {
      text: "Closet-Setting",
      isHighlighted: true,
      image: Closet,
      subcategories: "Capsule wardrobe | Outfit coordination | Closet detox"
    },
    {
      text: "Personal-Styling",
      isHighlighted: false,
      image: PersonalStyling,
      subcategories: "Daily wear guide | Occasion styling | Mood-based outfits"
    },
    {
      text: "Health And Fitness",
      isHighlighted: false,
      image: HealthAndFitness,
      subcategories: "Nutrition | Fashion motivation | Workout looks"
    },
    {
      text: "Event Styling",
      isHighlighted: false,
      image: EventStyling,
      subcategories: "Red carpet looks | Theme styling | Fashion forecasting"
    },
    {
      text: "Grooming",
      isHighlighted: false,
      image: Grooming,
      subcategories: "Beard shaping | Skin revitalization | Nail care"
    },
    {
      text: "Personal Care",
      isHighlighted: false,
      image: PersonalCare,
      subcategories: "Lip care | Skin concerns | Hand care"
    },
    {
      text: "Skincare",
      isHighlighted: false,
      image: Skincare,
      subcategories: "Daily regimen | Skin detox | Product selection"
    },
    {
      text: "Fragrance",
      isHighlighted: false,
      image: Fragrance,
      subcategories: "Perfume layering | Scent pairing | Seasonal scents"
    },
    {
      text: "Personal Branding",
      isHighlighted: false,
      image: PersonalBranding,
      subcategories: "Style image | First impression | Public persona"
    },
    {
      text: "Haircare",
      isHighlighted: false,
      image: Haircare,
      subcategories: "Split-end repair | Hair hydration | Styling tips"
    },
    {
      text: "Travel Styling",
      isHighlighted: false,
      image: TravelStyling,
      subcategories: "Packing support | Tripwear outfits | Vacation looks"
    },
    {
      text: "Fashion Designer",
      isHighlighted: false,
      image: FashionDesigner,
      subcategories: "Draping techniques | Fabric selection | Illustration"
    },
    {
      text: "Accessories Styling",
      isHighlighted: false,
      image: AccessoriesStyling,
      subcategories: "Jewelry curation | Bag matching | Watch styling"
    },
    {
      text: "Modeling",
      isHighlighted: false,
      image: Modeling,
      subcategories: "Editorial shoots | Runway grooming | Model coaching"
    },
    {
      text: "Makeup Artist",
      isHighlighted: false,
      image: MakeupArtist,
      subcategories: "Face sculpt | Bridal makeup | Lipstick shades"
    },
  ];

  // Responsive: 3 columns on desktop, 2 on mobile
  const getRows = (arr, columns) => {
    const rows = [];
    for (let i = 0; i < arr.length; i += columns) {
      rows.push(arr.slice(i, i + columns));
    }
    return rows;
  };

  const [hoveredIdx, setHoveredIdx] = useState(null);

  // We'll render both layouts and use Tailwind's responsive classes to show/hide
  const cardRows2 = getRows(cards, 2); // mobile
  const cardRows3 = getRows(cards, 3); // desktop

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Heading above category cards */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mt-12 mb-4 text-gray-900 tracking-tight">Categories</h2>
      {/* Mobile: 2 columns */}
      <div className="flex flex-col gap-10 mt-10 w-full max-w-xl sm:hidden">
        {cardRows2.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-row gap-6 w-full justify-center">
            {row.map((card, colIdx) => {
              const absIdx = rowIdx * 2 + colIdx;
              const isFirstHighlighted = absIdx === 0 && hoveredIdx == null;
              const isHovered = hoveredIdx === absIdx;
              const shouldHighlight = isFirstHighlighted || isHovered;
              return (
                <div
                  key={colIdx}
                  className={`flex flex-col items-center justify-center rounded-2xl w-32 h-44 px-2 py-3 text-center font-sans text-[10px] font-medium shadow-md transition-all duration-300 sm:rounded-3xl sm:w-48 sm:h-56
                    ${
                      shouldHighlight
                        ? 'bg-[#A5D80A] text-white scale-105 shadow-lg -translate-y-1'
                        : 'bg-white text-black hover:bg-[#A5D80A] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1' + ' bg-gradient-to-t from-[#A5D80A]/20 via-white to-white'
                    }
                  `}
                  onMouseEnter={() => setHoveredIdx(absIdx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {isFirstHighlighted && (
                    <div className="flex items-center -mb-2 justify-center bg-[#A5D80A] overflow-hidden rounded-2xl"></div>
                  )}
                  <p className="font-bold mb-1 mt-4">{card?.text}</p>
                  <div className={`text-xs mt-1 mb-2 ${shouldHighlight ? 'text-white/80' : 'text-gray-700/80'}`}>{card.subcategories}</div>
                  <div className="flex-grow flex items-end w-full justify-center">
                    <img src={card.image} alt={card.text} className="w-32 h-32 object-contain mb-[-1px]" style={{marginBottom: '-1px'}} />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* Desktop: 3 columns */}
      <div className="hidden sm:flex flex-col gap-12 mt-10 mb-24 max-w-7xl">
        {cardRows3.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-row gap-8 w-full justify-center">
            {row.map((card, colIdx) => {
              const absIdx = rowIdx * 3 + colIdx;
              const isFirstHighlighted = absIdx === 0 && hoveredIdx == null;
              const isHovered = hoveredIdx === absIdx;
              const shouldHighlight = isFirstHighlighted || isHovered;
              return (
                <div
                  key={colIdx}
                  className={`flex flex-col items-center justify-center rounded-3xl w-65  h-80 px-4 py-6 text-center font-sans text-[20px] font-medium shadow-md transition-all duration-300
                    ${
                      shouldHighlight
                        ? 'bg-[#A5D80A] text-white scale-105 shadow-lg -translate-y-1'
                        : 'bg-white border border-gray-300 text-black hover:bg-[#A5D80A] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1' + ' bg-gradient-to-t from-[#A5D80A]/20 via-white to-white'
                    }
                  `}
                  style={{ minWidth: 0, flex: 1 }}
                  onMouseEnter={() => setHoveredIdx(absIdx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {isFirstHighlighted && (
                    <div className="flex items-center -mb-2 justify-center bg-[#A5D80A] overflow-hidden rounded-2xl"></div>
                  )}
                  <p className="font-bold mb-2 text-lg mt-6">{card?.text}</p>
                  <div className={`text-base mt-2 mb-4 ${shouldHighlight ? 'text-white/80' : 'text-gray-700/80'}`}>{card.subcategories}</div>
                  <div className="flex-grow flex items-end w-full justify-center">
                    {(() => {
                      // Custom image sizing and margin for each card
                      const customImgStyles = {
                        "Closet-Setting": "w-36 h-46 mb-[-10px]",
                        "Personal-Styling": "w-32 h-32 mb-[-2px]",
                        "Health And Fitness": "w-36 h-36 mb-[-8px]",
                        "Event Styling": "w-32 h-32 mb-[-2px]",
                        "Grooming": "w-36 h-36 mb-[-10px]",
                        "Personal Care": "w-32 h-32 mb-[-2px]",
                        "Skincare": "w-32 h-32 mb-[-2px]",
                        "Fragrance": "w-32 h-32 mb-[-2px]",
                        "Personal Branding": "w-32 h-32 mb-[-2px]",
                        "Haircare": "w-36 h-36 mb-[-8px]",
                        "Travel Styling": "w-32 h-32 mb-[-2px]",
                        "Fashion Designer": "w-36 h-36 mb-[-8px]",
                        "Accessories Styling": "w-32 h-32 mb-[-2px]",
                        "Modeling": "w-36 h-36 mb-[-8px]",
                        "Makeup Artist": "w-36 h-36 mb-[-8px]",
                      };
                      const imgClass = customImgStyles[card.text] || "w-32 h-32 mb-[-2px]";
                      return (
                        <img src={card.image} alt={card.text} className={`object-contain ${imgClass}`} style={{marginBottom: '-1px'}} />
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
