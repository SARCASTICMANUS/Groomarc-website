import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const reviews = [
  {
    id: 1,
    text: "My dream of becoming an influencer and helping people has become a reality. My clients love me with my services mentioned @groomarc. Really loved the platform.",
    name: "Sonika",
    role: "Influencer",
    avatar: "/user2.jpg",
  },
  {
    id: 2,
    text: "My dream of becoming an influencer and helping people has become a reality. My clients love me with my services mentioned @groomarc. Really loved the platform.",
    name: "Radhika",
    role: "Influencer",
    avatar: "/user4.jpg",
  },
  {
    id: 3,
    text: "My dream of becoming an influencer and helping people has become a reality. My clients love me with my services mentioned @groomarc. Really loved the platform.",
    name: "Aman",
    role: "Influencer",
    avatar: "/user1.jpg",
  },
  {
    id: 4,
    text: "My dream of becoming an influencer and helping people has become a reality. My clients love me with my services mentioned @groomarc. Really loved the platform.",
    name: "Rahul",
    role: "Influencer",
    avatar: "/user6.jpg",
  },
  {
    id: 5,
    text: "My dream of becoming an influencer and helping people has become a reality. My clients love me with my services mentioned @groomarc. Really loved the platform.",
    name: "Simon",
    role: "Influencer",
    avatar: "/user7.jpg",
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
                      <h4 className="text-lg font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
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
                      <h4 className="text-black text-2xl font-semibold">{review.name}</h4>
                      <p className="text-xl text-gray-500">{review.role}</p>
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
