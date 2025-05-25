import React from 'react';
import { Link } from 'react-router-dom';
// import PdfSlideshow from '../components/Pdf/PdfViewer';


function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#F8FFDE] py-24 flex items-center justify-center">
        {/* Removed clothing/fashion SVGs */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_rgba(180,222,51,.2)40%,_rgba(255,255,255,.1)60%)]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 tracking-tight relative">
            <span className="inline-block animate-gradient-x bg-gradient-to-r from-[#A5D80A] via-[#242C07] to-[#A5D80A] bg-clip-text text-transparent">About Groomarc</span>
            {/* <span className="inline-block ml-2 animate-bounce">👚</span> */}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto animate-fade-in-up">
            Empowering individuals to discover and express their unique style through expert guidance and community support.
          </p>
        </div>
        {/* Keyframes for gradient and fade-in animation only (no float) */}
        <style>{`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease-in-out infinite; }
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both; }
        `}</style>
      </div>

      {/* Mission Section */}
      <div className="py-10 px-2 sm:py-16 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Modern Mission Card */}
            <div className="relative bg-gradient-to-br from-[#F8FFDE] via-white to-[#A5D80A]/10 rounded-3xl shadow-lg p-6 sm:p-10 flex flex-col items-start overflow-hidden min-h-[320px] mb-6 md:mb-0">
              <div className="absolute -top-8 -left-8 opacity-10 text-[7rem] select-none pointer-events-none">👗</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#242C07] flex items-center gap-2">
                <span className="inline-block bg-[#A5D80A]/20 text-[#A5D80A] px-3 py-1 rounded-full text-base font-semibold mr-2">Our Mission</span>
                {/* <span className="text-2xl">✨</span> */}
              </h2>
              <p className="text-gray-700 mb-3 text-base sm:text-lg font-medium">
                <span className="font-bold text-[#A5D80A]">At Groomarc,</span> we believe everyone should feel confident, comfortable, and authentic in their own style.
              </p>
              <p className="text-gray-700 mb-3 text-base sm:text-lg">
                Our mission is to make <span className="text-[#A5D80A] font-semibold">professional fashion and grooming advice</span> easy and personal — for everyone. Through <span className="font-semibold">1-on-1 sessions</span>, <span className="font-semibold">short videos</span>, and <span className="font-semibold">smart recommendations</span>, we help people discover what truly suits them — not just what’s trending.
              </p>
              <p className="text-gray-700 mb-3 text-base sm:text-lg">
                We're building a platform where <span className="text-[#A5D80A] font-semibold">style meets guidance</span>, creators connect with people, and every swipe brings you closer to your best look.
              </p>
              <p className="text-gray-700 text-base sm:text-lg italic">
                Because real style isn’t about following trends — it’s about <span className="text-[#A5D80A] font-semibold">finding your own</span>.
              </p>
            </div>
            {/* Why Choose Groomarc - Modern Card */}
            <div className="relative bg-[#242C07] text-white rounded-3xl shadow-lg p-6 sm:p-10 flex flex-col items-start overflow-hidden min-h-[320px]">
              <div className="absolute -top-8 -right-8 opacity-10 text-[7rem] select-none pointer-events-none">👜</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-block bg-[#A5D80A]/20 text-[#A5D80A] px-3 py-1 rounded-full text-base font-semibold mr-2">Why Choose Groomarc?</span>
              </h3>
              <ul className="space-y-4 w-full">
                <li className="font-medium">1-on-1 sessions with <span className="text-[#A5D80A]">fashion coaches</span>, grooming experts, and verified creators</li>
                <li className="font-medium">Personalized style advice based on your <span className="text-[#A5D80A]">body type</span>, skin tone, and comfort</li>
                <li className="font-medium">Swipe & discover <span className="text-[#A5D80A]">short, relatable fashion videos</span> made just for you</li>
                <li className="font-medium">Build your wardrobe with expert help — <span className="text-[#A5D80A]">no confusion, no FOMO</span></li>
                <li className="font-medium">Supportive fashion community focused on <span className="text-[#A5D80A]">real people</span>, not just trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#F8FFDE] py-10 px-2 sm:py-16 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {/* Innovation */}
            <div className="group bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-start min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-t hover:from-[#A5D80A]/20 hover:to-white relative overflow-hidden cursor-pointer">
              <div className="flex items-center mb-2">
                <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🧠</span>
                <span className="ml-2 text-[10px] sm:text-xs bg-[#A5D80A]/10 text-[#A5D80A] px-2 py-1 rounded-full font-semibold tracking-wide group-hover:bg-[#A5D80A] group-hover:text-white transition-colors duration-300">Think Big</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#A5D80A] group-hover:text-[#242C07] transition-colors duration-300">Innovation</h3>
              <p className="text-gray-700 group-hover:text-[#242C07] transition-colors duration-300 text-sm sm:text-base">
                We use smart ideas and new technology to make fashion advice easy, fast, and personal for everyone.
              </p>
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-20 text-[4.5rem] sm:text-[7rem] transition-opacity duration-300 select-none pointer-events-none">🧠</div>
            </div>
            {/* Inclusivity */}
            <div className="group bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-start min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-t hover:from-[#A5D80A]/20 hover:to-white relative overflow-hidden cursor-pointer">
              <div className="flex items-center mb-2">
                <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">🤝</span>
                <span className="ml-2 text-[10px] sm:text-xs bg-[#A5D80A]/10 text-[#A5D80A] px-2 py-1 rounded-full font-semibold tracking-wide group-hover:bg-[#A5D80A] group-hover:text-white transition-colors duration-300">All Welcome</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#A5D80A] group-hover:text-[#242C07] transition-colors duration-300">Inclusivity</h3>
              <p className="text-gray-700 group-hover:text-[#242C07] transition-colors duration-300 text-sm sm:text-base">
                Groomarc is for everyone — all body types, all styles, all backgrounds. We celebrate real people and real fashion.
              </p>
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-20 text-[4.5rem] sm:text-[7rem] transition-opacity duration-300 select-none pointer-events-none">🤝</div>
            </div>
            {/* Authenticity */}
            <div className="group bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-start min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-t hover:from-[#A5D80A]/20 hover:to-white relative overflow-hidden cursor-pointer">
              <div className="flex items-center mb-2">
                <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">🌟</span>
                <span className="ml-2 text-[10px] sm:text-xs bg-[#A5D80A]/10 text-[#A5D80A] px-2 py-1 rounded-full font-semibold tracking-wide group-hover:bg-[#A5D80A] group-hover:text-white transition-colors duration-300">Be Real</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#A5D80A] group-hover:text-[#242C07] transition-colors duration-300">Authenticity</h3>
              <p className="text-gray-700 group-hover:text-[#242C07] transition-colors duration-300 text-sm sm:text-base">
                We believe style should be real, not fake. We help people find looks that match their true self, not just trends.
              </p>
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-20 text-[4.5rem] sm:text-[7rem] transition-opacity duration-300 select-none pointer-events-none">🌟</div>
            </div>
            {/* Simplicity */}
            <div className="group bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-start min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-t hover:from-[#A5D80A]/20 hover:to-white relative overflow-hidden cursor-pointer">
              <div className="flex items-center mb-2">
                <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">🎯</span>
                <span className="ml-2 text-[10px] sm:text-xs bg-[#A5D80A]/10 text-[#A5D80A] px-2 py-1 rounded-full font-semibold tracking-wide group-hover:bg-[#A5D80A] group-hover:text-white transition-colors duration-300">Keep It Simple</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#A5D80A] group-hover:text-[#242C07] transition-colors duration-300">Simplicity</h3>
              <p className="text-gray-700 group-hover:text-[#242C07] transition-colors duration-300 text-sm sm:text-base">
                From 1-on-1 sessions to swiping through videos, everything on Groomarc is made simple and easy to use.
              </p>
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-20 text-[4.5rem] sm:text-[7rem] transition-opacity duration-300 select-none pointer-events-none">🎯</div>
            </div>
            {/* Connection */}
            <div className="group bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-start min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[220px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-t hover:from-[#A5D80A]/20 hover:to-white relative overflow-hidden cursor-pointer">
              <div className="flex items-center mb-2">
                <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-3">💬</span>
                <span className="ml-2 text-[10px] sm:text-xs bg-[#A5D80A]/10 text-[#A5D80A] px-2 py-1 rounded-full font-semibold tracking-wide group-hover:bg-[#A5D80A] group-hover:text-white transition-colors duration-300">Stay Connected</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#A5D80A] group-hover:text-[#242C07] transition-colors duration-300">Connection</h3>
              <p className="text-gray-700 group-hover:text-[#242C07] transition-colors duration-300 text-sm sm:text-base">
                We connect people with expert stylists, fashion coaches, and a like-minded community — so no one feels lost or left out in the fashion world.
              </p>
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-20 text-[4.5rem] sm:text-[7rem] transition-opacity duration-300 select-none pointer-events-none">💬</div>
            </div>
          </div>
        </div>
      </div>

     


      {/* Social Media Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Find Us On Social Media</h2>
          <p className="text-gray-700 mb-8">
            Stay connected and get the latest style tips, updates, and inspiration. Follow Groomarc on your favorite platforms:
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://instagram.com/groomarc_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 group-hover:scale-110 transition-transform duration-200">
                <rect width="40" height="40" rx="12" fill="#A5D80A"/>
                <path d="M28 14.5C28 13.1193 26.8807 12 25.5 12H14.5C13.1193 12 12 13.1193 12 14.5V25.5C12 26.8807 13.1193 28 14.5 28H25.5C26.8807 28 28 26.8807 28 25.5V14.5Z" stroke="white" strokeWidth="2"/>
                <circle cx="20" cy="20" r="4.5" stroke="white" strokeWidth="2"/>
                <circle cx="25.5" cy="14.5" r="1" fill="white"/>
              </svg>
              <span className="text-sm font-medium text-[#242C07] group-hover:text-[#A5D80A]">Instagram</span>
            </a>
            {/* <a href="https://youtube.com/@groomarc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 group-hover:scale-110 transition-transform duration-200">
                <rect width="40" height="40" rx="12" fill="#FF0000"/>
                <path d="M26.5 20.0001L17.5 25.1962V14.8041L26.5 20.0001Z" fill="white"/>
              </svg>
              <span className="text-sm font-medium text-[#242C07] group-hover:text-[#FF0000]">YouTube</span>
            </a> */}
            <a href="https://youtube.com/@groomarc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 group-hover:scale-110 transition-transform duration-200">
                <rect width="40" height="40" rx="12" fill="#A5D80A"/>
                <g>
                  <path d="M27.8 16.1C27.6 15.3 27 14.7 26.2 14.5C24.7 14.1 20 14.1 20 14.1C20 14.1 15.3 14.1 13.8 14.5C13 14.7 12.4 15.3 12.2 16.1C11.8 17.6 11.8 20 11.8 20C11.8 20 11.8 22.4 12.2 23.9C12.4 24.7 13 25.3 13.8 25.5C15.3 25.9 20 25.9 20 25.9C20 25.9 24.7 25.9 26.2 25.5C27 25.3 27.6 24.7 27.8 23.9C28.2 22.4 28.2 20 28.2 20C28.2 20 28.2 17.6 27.8 16.1Z" fill="white"/>
                  <path d="M18.5 22.5V17.5L23 20L18.5 22.5Z" fill="#A5D80A" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
                </g>
              </svg>
              <span className="text-sm font-medium text-[#242C07] group-hover:text-[#A5D80A]">YouTube</span>
            </a>
            {/* <a href="https://facebook.com/groomarc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 group-hover:scale-110 transition-transform duration-200">
                <rect width="40" height="40" rx="12" fill="#A5D80A"/>
                <path d="M23.5 20H21V28H18V20H16V17.5H18V16C18 14.6193 19.1193 13.5 20.5 13.5H23.5V16H21.5C21.2239 16 21 16.2239 21 16.5V17.5H23.5V20Z" fill="white"/>
              </svg>
              <span className="text-sm font-medium text-[#242C07] group-hover:text-[#A5D80A]">Facebook</span>
            </a>
            <a href="https://twitter.com/groomarc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 group-hover:scale-110 transition-transform duration-200">
                <rect width="40" height="40" rx="12" fill="#A5D80A"/>
                <path d="M28 16.5C27.405 16.775 26.771 16.963 26.11 17.057C26.79 16.648 27.309 16.013 27.553 15.243C26.919 15.624 26.219 15.889 25.473 16.03C24.871 15.393 24.013 15 23.077 15C21.309 15 19.885 16.424 19.885 18.192C19.885 18.447 19.911 18.694 19.963 18.93C17.148 18.797 14.735 17.507 13.114 15.537C12.822 16.013 12.653 16.572 12.653 17.172C12.653 18.293 13.246 19.282 14.145 19.872C13.604 19.857 13.09 19.701 12.646 19.444V19.484C12.646 21.084 13.799 22.393 15.312 22.672C15.03 22.747 14.73 22.782 14.423 22.782C14.206 22.782 13.995 22.762 13.789 22.724C14.219 24.008 15.445 24.93 16.899 24.957C15.755 25.803 14.312 26.312 12.753 26.312C12.495 26.312 12.241 26.298 11.99 26.27C13.457 27.176 15.191 27.75 17.077 27.75C23.067 27.75 26.307 22.833 26.307 18.567C26.307 18.417 26.304 18.267 26.297 18.119C26.94 17.663 27.5 17.09 28 16.5Z" fill="white"/>
              </svg>
              <span className="text-sm font-medium text-[#242C07] group-hover:text-[#A5D80A]">Twitter</span>
            </a> */}
            <a href="https://linkedin.com/company/groomarc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 group-hover:scale-110 transition-transform duration-200">
                <rect width="40" height="40" rx="12" fill="#A5D80A"/>
                <path d="M16.5 17.5H13.5V28H16.5V17.5ZM15 16.25C16.1046 16.25 17 15.3546 17 14.25C17 13.1454 16.1046 12.25 15 12.25C13.8954 12.25 13 13.1454 13 14.25C13 15.3546 13.8954 16.25 15 16.25ZM28 21.5V28H25V22.25C25 21.8358 24.6642 21.5 24.25 21.5C23.8358 21.5 23.5 21.8358 23.5 22.25V28H20.5V17.5H23.5V18.75C23.9142 18.25 24.5858 17.5 25.5 17.5C26.8807 17.5 28 18.6193 28 20V21.5Z" fill="white"/>
              </svg>
              <span className="text-sm font-medium text-[#242C07] group-hover:text-[#A5D80A]">LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">@groomarc on all platforms</p>
        </div>
      </div>
    </div>
  );
}
export default About;
