import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/new-logo.svg";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="relative z-20 w-full lg:border-slate-200 lg:backdrop-blur-sm">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-7xl xl:max-w-7xl 2xl:max-w-[100rem]">
        <nav className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700">
          {/* Logo */}
          <div className="flex items-center lg:-mt-4 gap-2 whitespace-nowrap py-3 text-lg lg:flex-1">
            <Link to="/" aria-label="Groomarc Logo">
              <img className="lg:w-50 w-40" src={Logo} alt="Groomarc Logo" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
              isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                : ""
            }`}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
              <span className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
              <span className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
            </div>
          </button>

          {/* Navigation Links */}
          <ul
            className={`absolute left-0 top-0 z-[-1] h-[26.5rem] md:h-[100.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-4 pt-24 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
              isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
            }`}
          >
            <li className="flex items-stretch">
              <Link
                to="/"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:outline-none lg:px-8"
              >
                Home
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link
                to="/Categories"
                className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:outline-none lg:px-8"
              >
                Categories
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link
                to="/download"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:outline-none lg:px-8"
              >
                Downloading
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link
                to="/contact"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:outline-none lg:px-8"
              >
                Contact Us
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link
                to="/get-started"
                className="flex items-center gap-2 py-2 text-white hover:text-black hover:bg-white border border-black bg-black my-5 rounded-3xl transition duration-300 lg:px-8 md:px-12 sm:mx-16"
              >
                <span className="px-4">Get Started</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
