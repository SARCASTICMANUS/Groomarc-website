import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const reviews = [
  {
    id: 1,
    text: "I always felt confused about what suits my body type. Groomarc’s 1-on-1 session literally changed the way I dress — now I feel confident and comfortable in my own style.",
    name: "Priya S.",
    role: "College Student, Delhi",
    avatar: "/user3.jpg",
  },
  {
    id: 2,
    text: "I used to waste hours scrolling through fashion videos. Groomarc made it simple — I swiped, found my vibe, and booked a free session. The advice was real and super helpful!",
    name: "Karan M.",
    role: "Marketing Executive, Bengaluru",
    avatar: "/user8.jpg",
  },
  {
    id: 3,
    text: "What I love about Groomarc is the personal connection with users. It’s not just styling — it’s helping people discover their identity through fashion.",
    name: "Simran Taneja",
    role: "Fashion Coach on Groomarc",
    avatar: "/user5.jpg",
  },
  {
    id: 4,
    text: "I had totally lost track of fashion after becoming a mom. Groomarc helped me build a simple wardrobe that makes me feel ‘me’ again.",
    name: "Ayesha R.",
    role: "New Mom, Mumbai",
    avatar: "/user2.jpg",
  },
  {
    id: 5,
    text: "Groomarc is filling a real gap. Most platforms focus on trends — this one focuses on people. I love working with users who want style that fits them, not the feed.",
    name: "Aditya Verma",
    role: "Certified Image Consultant",
    avatar: "/user6.jpg",
  },
];

const ReviewSection = () => {
  const desktopGlideRef = useRef(null);
  const mobileGlideRef = useRef(null);
  const desktopSliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  useEffect(() => {
    if (desktopGlideRef.current) {
      desktopSliderRef.current = new Glide(desktopGlideRef.current, {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        breakpoints: {
          1024: {
            perView: 2,
            gap: 16,
          },
          640: {
            perView: 1,
            gap: 12,
          },
        },
      });
      desktopSliderRef.current.mount();
    }

    if (mobileGlideRef.current) {
      mobileSliderRef.current = new Glide(mobileGlideRef.current, {
        type: "carousel",
        focusAt: "center",
        perView: 1,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
      });
      mobileSliderRef.current.mount();
    }

    return () => {
      if (desktopSliderRef.current) {
        desktopSliderRef.current.destroy();
      }
      if (mobileSliderRef.current) {
        mobileSliderRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      {/* Desktop view */}
      <section>
        <div className="hidden mb-5 sm:block">
          <div className="glide" ref={desktopGlideRef}>
            {/* Slides */}
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {reviews.map((review) => (
                  <li
                    key={review.id}
                    className="glide__slide  p-2 flex justify-center"
                  >
                    <div className="max-w-md w-110 h-70  rounded-2xl p-4 text-center text-white bg-gradient-to-r from-[#F8FCED] to-[#F8FCED]">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-16 h-16 rounded-full mx-auto mb-4 ring-5 shadow-md"
                      />
                      <p className="text-gray-700 italic mb-4">“{review.text}”</p>
                      <h4 className="text-2xl font-bold text-black mb-1">{review.name}</h4>
                      <p className="text-base text-gray-600 font-medium">{review.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls */}
            <div
              className="absolute hidden left-0 top-1/2 flex w-full justify-between px-4 -translate-y-1/2"
              data-glide-el="controls"
            >
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border shadow hover:scale-105 transition"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                ‹
              </button>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border shadow hover:scale-105 transition"
                data-glide-dir=">"
                aria-label="next slide"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Display */}
      <section>
        <div className="block mt-5 items-center  sm:hidden">
          <div className="glide" ref={mobileGlideRef}>
            {/* Slides */}
            <div className="glide__track  " data-glide-el="track">
              <ul className="glide__slides">
                {reviews.map((review) => (
                  <li
                    key={review.id}
                    className="glide__slide m-4 flex justify-center items-center"
                  >
                    <div className="w-85 h-100 rounded-2xl p-6 text-center text-white bg-gradient-to-r from-[#F8FCED] to-[#F8FCED]">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-26 h-26 mt-8 rounded-full mx-auto mb-4 ring-2 ring-gray-300 shadow-md"
                      />
                      <p className="text-gray-700 italic mb-4">“{review.text}”</p>
                      <h4 className="text-2xl font-bold text-black mb-1">{review.name}</h4>
                      <p className="text-base text-gray-600 font-medium">{review.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls */}
            <div
              className="hidden absolute left-0 top-1/2 flex w-full justify-between px-4 -translate-y-1/2"
              data-glide-el="controls"
            >
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border shadow hover:scale-105 transition"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                ‹
              </button>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border shadow hover:scale-105 transition"
                data-glide-dir=">"
                aria-label="next slide"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
