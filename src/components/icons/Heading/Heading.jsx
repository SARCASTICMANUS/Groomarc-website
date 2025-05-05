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
      {/* Laptop screen */}
        <div className="hidden leading-7 ml-145 mb-5 sm:block text-4xl relative top-0 z-11 font-bold my-6">
      {/* Desktop Heading */}
      {/* <div className="flex items-center justify-center"> */}
        <h1 className=" py-3">
          Make Your{" "}
          <span className=" pl-2">
            <TypingAnimation text="Fashion" syncIndex={syncIndex} isDeleting={isDeleting} />
          </span>
        </h1>
        <h1 className="py-3  ">
          Look More{" "}
          <span className="  pl-2">
            <TypingAnimation text="Charming" syncIndex={syncIndex} isDeleting={isDeleting} />
          </span>
        </h1>
      {/* </div> */}
    </div>

    {/* Mobile screen */}

    <div className=" block leading-4 ml-10 mb-25 sm:hidden mt-1 text-2xl relative top-0 z-11 sm:text-5xl md:text-6xl  font-bold my-6">
      {/* Desktop Heading */}
      {/* <div className="flex items-center justify-center"> */}
        <h1 className=" mb-0 py-4">
          Make Your{" "} 
          <span className="fixed ">
            <TypingAnimation text="Fashion" syncIndex={syncIndex} isDeleting={isDeleting} />
          </span>
          <span className="ml-23" >Look</span>
          
        </h1> 
        <h1 className="ml-15 ">
          More{" "}
          <span className="">
            <TypingAnimation text="Charming" syncIndex={syncIndex} isDeleting={isDeleting} />
          </span>
        </h1>
      {/* </div> */}
    </div>
    </div>
  );
};

export default Heading;
