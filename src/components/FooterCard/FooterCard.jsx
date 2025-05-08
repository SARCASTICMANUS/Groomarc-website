import React from "react"
import LeftVector from "../../assets/left-vector.svg"
import RightVector from "../../assets/right-vector.svg"
import AppStore from "../../assets/App Store.svg"
import GooglePlay from "../../assets/Google Play.svg"

export default function FooterCard() {
  return (
    <div className="hidden  sm:block flex justify-center items-center   h-100vh ">
      <div className="flex justify-center items-center w-full">
        <section className="relative bg-[#F8FFDE] text-center w-[1236px] h-[400px] rounded-[15px] z-[1] flex items-center justify-center">
          
          <img
            src={LeftVector}
            alt=""
            className="absolute left-0 w-[400px] h-[400px] z-[2] rounded-[15px]"
          />
          <img
            src={RightVector}
            alt=""
            className="absolute right-0 w-[400px] h-[400px] z-[2] rounded-[15px]"
          />
          <div className="flex flex-col items-center justify-center px-5 py-10 z-[3]">
            <h2 className="text-[40px] font-bold text-black mb-2">
              Download The App Now!
            </h2>
            <p className="text-[20px] text-gray-600">
              Unlock Your Grooming Potential With Us.
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <a href="#" className="transition-transform duration-200 hover:scale-105">
                <img src={AppStore} alt="Download on the App Store" className="h-[50px]" />
              </a>
              <a href="#" className="transition-transform duration-200 hover:scale-105">
                <img src={GooglePlay} alt="Download on Google Play" className="h-[50px]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
