import React, { useState } from "react";

// DM Sans: Ensure this is added to your HTML <head> or in your main CSS
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap" rel="stylesheet" />

const faqData = [
  {
    id: 1,
    question: "What exactly does Groomarc do?",
    answer:
      "We help you discover your personal style through 1-on-1 sessions with real fashion coaches and grooming experts — based on your body type, skin tone, and lifestyle.",
  },
  {
    id: 2,
    question: "I'm not into trends. Can Groomarc still help me?",
    answer:
      "Absolutely! Groomarc is built for real people. Whether you love fashion or just want to feel confident in what you wear, we guide you to find what suits you, not the internet.",
  },
  {
    id: 3,
    question: "Is Groomarc free to use?",
    answer:
      "Yes! You can explore content and watch style videos for free. And right now — 1-on-1 expert sessions are also free for early users. (Limited time only.)",
  },
  {
    id: 4,
    question: "Can I trust the experts on Groomarc?",
    answer:
      "Definitely. All our fashion coaches, image consultants, and grooming pros are verified, rated, and experienced in real styling work.",
  },
  {
    id: 5,
    question: "Will Groomarc recommend styles based on my body and skin tone?",
    answer:
      "Yes! That’s what makes Groomarc different. Every recommendation is based on your profile — body fit, color tone, and comfort level.",
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
