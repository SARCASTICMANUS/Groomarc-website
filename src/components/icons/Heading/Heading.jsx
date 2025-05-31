import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, syncIndex, isDeleting }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isDeleting && syncIndex < text.length) {
      setDisplayedText(text.slice(0, syncIndex + 1));
    } else if (isDeleting && syncIndex >= 0) {
      setDisplayedText(text.slice(0, syncIndex));
    }
  }, [syncIndex, isDeleting, text]);

  return <span className="text-[#A5D80A] md:text-[#A5D80A] ">{displayedText}</span>;
};

const Heading = () => {
  const [syncIndex, setSyncIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    if (!isDeleting && syncIndex < "Fashion".length) {
      const timeout = setTimeout(() => setSyncIndex((prev) => prev + 1), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && syncIndex > 0) {
      const timeout = setTimeout(() => setSyncIndex((prev) => prev - 1), deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && syncIndex === "Fashion".length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && syncIndex === 0) {
      const timeout = setTimeout(() => setIsDeleting(false), pauseTime);
      return () => clearTimeout(timeout);
    }
  }, [syncIndex, isDeleting]);

  return (
    <div>
      {/* Desktop/Laptop screens (md and up) */}
      <div className="hidden md:block leading-12 ml-32 lg:ml-112 mb-5 text-4xl lg:text-6xl relative top-0 z-11 font-bold my-6">
        <h1 className="py-3">
          Make Your
          <span className="pl-2">
            <TypingAnimation text="Fashion" syncIndex={syncIndex} isDeleting={isDeleting} />
          </span>
        </h1>
        <h1 className="py-3">
          Look More
          <span className="pl-2">
            <TypingAnimation text="Charming" syncIndex={syncIndex} isDeleting={isDeleting} />
          </span>
        </h1>
      </div>

      {/* Mobile/Tablet screens (below md) */}
      <div className="block md:hidden leading-4 ml-9 mb-25 mt-1 text-3xl relative top-0 z-11 font-bold my-6">
        <h1 className="flex mb-0 py-4">
          Make Your&nbsp;
          <div className="w-22 ">
            <span className="m-0 ">
              <TypingAnimation text="Fashion" syncIndex={syncIndex} isDeleting={isDeleting} />
            </span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;Look
        </h1>
        <h1 className="ml-15 ">
          More
          <span className="">
            <TypingAnimation text="Charming" syncIndex={syncIndex} isDeleting={isDeleting} />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Heading;
