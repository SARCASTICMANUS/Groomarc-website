import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";

import { ChevronUpIcon } from "@heroicons/react/24/outline";
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap" rel="stylesheet"></link>;

const faqData = [
  {
    id: 1,
    question: "Alright, but what exactly do you do?",
    answer:"As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
  },
  {
    id: 2,
    question:
      "I don't need a brand strategist but I need help executing an upcoming campaign?",
    answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design",
  },
  {
    id: 3,
    question: "Are your rates competitive?",
    answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design",
  },
  {
    id: 4,
    question: "Why do you have a monthly project cap?",
    answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaqSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">

      {/* Desktop and Laptop */}
      <div className="hidden sm:block  ">
      <section className="  ml-60 mr-60  font-[DM Sans]   ">
        {faqData.map((item, index) => (
          <details
            key={item.id}
            className="group p-4 transition-all duration-500 ease-in-out"
            open={index === 0}
          >
            <summary
              className="relative mb-10 cursor-pointer list-none h-10 place-content-center  pr-1 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden"
              onClick={() => toggleFaqSection(index)}
            >
              {/* Question number behind the text */}
              <span
                className={`question-number  absolute left-0  transform -translate-y-1/2 transition-all duration-300 ${
                  activeIndex === index ? " text-[150px] mt-3 text-[#A5D80A]  font-semibold opacity-60" : "top-0 -bottom-20 text-[50px]"
                }`}
                style={{ zIndex: 0 }}
              >
                0{item.id}
              </span>
              <span
                className={`ml-10 transition-all duration-300 ${
                  activeIndex === index ? "text-[20px]" : "text-[20px]"
                }`}
                style={{ zIndex: 1 }}
              >
                {item.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-3 h-4 w-4 inline-block  align-middle  shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3.5"
                aria-labelledby={`title-${item.id} desc-${item.id}`}
              >
                <title id={`title-${item.id}`}>Open icon</title>
                <desc id={`desc-${item.id}`}>
                  Icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            {activeIndex === index && (
              <p className="m-12 text-[17px] text-black">{item.answer}</p>
            )}
          </details>
        ))}
      </section>
      </div>

      {/* Mobile Display */}
      <div className="block sm:hidden  ml-6 mr-6 h-110 ">
      <section className=" font-[DM Sans]   ">
        {faqData.map((item, index) => (
          <details
            key={item.id}
            className="group p-4  transition-all duration-500 ease-in-out"
            open={index === 0}
          >
            <summary
              className="relative mb-10 cursor-pointer list-none h-10 place-content-center  pr-1 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden"
              onClick={() => toggleFaqSection(index)}
            >
              {/* Question number behind the text */}
              <span
                className={`question-number  absolute  left-0  transform -translate-y-1/2 transition-all duration-300 ${
                  activeIndex === index ? " text-[65px] mt-3 text-[#A5D80A]  font-semibold opacity-60" : " text-[40px]"
                }`}
                style={{ zIndex: 0 }}
              >
                0{item.id}
              </span>
              <span
                className={`  transition-all duration-300  ${
                  activeIndex === index ? "ml-18 text-[16px]" : "ml-12 text-[16px]"
                }`}
                style={{ zIndex: 1 }}
              >
                {item.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-3 h-4 w-4 inline-block  align-middle  shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3.5"
                aria-labelledby={`title-${item.id} desc-${item.id}`}
              >
                <title id={`title-${item.id}`}>Open icon</title>
                <desc id={`desc-${item.id}`}>
                  Icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            {activeIndex === index && (
              <p className="m-2 text-[14px] text-black">{item.answer}</p>
            )}
          </details>
        ))}
      </section>
      </div>
    </div>
  );
};

export default FaqSection;
