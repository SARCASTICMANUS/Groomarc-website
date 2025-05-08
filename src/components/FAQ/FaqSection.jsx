import React, { useState } from "react";

// DM Sans: Ensure this is added to your HTML <head> or in your main CSS
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap" rel="stylesheet" />

const faqData = [
  {
    id: 1,
    question: "Alright, but what exactly do you do?",
    answer:
      "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
  },
  {
    id: 2,
    question:
      "I don't need a brand strategist but I need help executing an upcoming campaign?",
    answer:
      "We can absolutely help execute campaigns, handling creative direction, design, and rollout strategies tailored to your needs.",
  },
  {
    id: 3,
    question: "Are your rates competitive?",
    answer:
      "Yes. We offer flexible packages based on project scope, and we ensure value through strategic creativity and execution.",
  },
  {
    id: 4,
    question: "Why do you have a monthly project cap?",
    answer:
      "This ensures we dedicate focused creative energy and consistent quality to each project. It's about impact over quantity.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const QuestionItem = ({ item, index, isMobile }) => (
    <div
      className={`relative mb-12  transition-all duration-300 ${
        isMobile ? "px-3 py-1" : "px-6 py-4"
      }`}
    >
      {/* Big Number Behind */}
      <span
        className={`absolute left-0  top-1/2 transform -translate-y-1/2 transition-all duration-300 text-[#A5D80A]  font-semibold ${
          isMobile ? (activeIndex === index ? "text-[50px]  top-7 " : "text-[30px] ml-5 top-6 ") : activeIndex === index ? "text-[150px] top-2 ml-14 opacity-80 " : "text-[40px] ml-18 opacity-40 -bottom-22"
        }`}
        style={{ zIndex: 0 }}
      >
        0{item.id}
      </span>

      {/* Question Container */}
      <div
        onClick={() => toggleFaq(index)}
        className={`relative  z-10 flex justify-between items-start cursor-pointer ${
          isMobile ? "ml-14 text-[16px]" : "ml-20  text-[20px]"
        } font-medium text-slate-700 hover:text-slate-900`}
        style={{ fontFamily: "DM Sans" }}
      >
        <span>{item.question}</span>
        <span
          className={`transition-transform duration-300 ${
            activeIndex === index ? "rotate-45" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </div>

      {/* Answer */}
      {activeIndex === index && (
        <div
          className={`relative  z-10 ${
            isMobile ? "ml-14 mt-2 text-[14px]  " : "ml-20 mt-4 font-light text-[17px]"
          } text-black`}
        >
          {item.answer}
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* Desktop */}
      <div className="hidden sm:block">
        <section className="ml-60 mr-60 py-6" style={{ fontFamily: "DM Sans" }}>
          {faqData.map((item, index) => (
            <QuestionItem
              key={item.id}
              item={item}
              index={index}
              isMobile={false}
            />
          ))}
        </section>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden px-4 py-6">
        <section style={{ fontFamily: "DM Sans" }}>
          {faqData.map((item, index) => (
            <QuestionItem
              key={item.id}
              item={item}
              index={index}
              isMobile={true}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default FaqSection;
