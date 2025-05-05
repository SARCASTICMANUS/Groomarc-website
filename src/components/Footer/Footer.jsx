import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Groomarc from "../../assets/Icons/White-logo.svg";
import FooterCard from "../FooterCard/FooterCard";

export default function Footer() {
  return (
    <footer className="bg-[#242C07]  text-white  px-6 mt-60 lg:h-140 h-180  py-10 ">
      <FooterCard />
      <div className="max-w-[1200px] mx-auto  lg:mt-[80px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
        {/* Logo & Description */}
        <div>
          <img
            src={Groomarc}
            alt="GroomArc Logo"
            className="w-[280px] mx-auto lg:mx-0 mb-3"
          />
          <p className="mb-3 text-[15px] text-gray-300">
            Passionate about exploration, we curate unforgettable grooming
            experiences.
          </p>
          <div className="flex justify-center lg:justify-start gap-5 mt-3">
            <FaFacebook className="text-[20px] cursor-pointer hover:text-lime-400 transition duration-300" />
            <FaInstagram className="text-[20px] cursor-pointer hover:text-lime-400 transition duration-300" />
            <FaTwitter className="text-[20px] cursor-pointer hover:text-lime-400 transition duration-300" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Mobile</li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="text-lg  font-bold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Help/FAQ</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="hover:underline cursor-pointer">Affiliates</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg  font-bold mb-2">Newsletter</h3>
          <p className="text-[15px] text-gray-300 mb-3">Stay up to date</p>
          <div className="flex hidden sm:block justify-center lg:justify-end items-center gap-2 relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-3 px-5 rounded-[12px] text-sm text-[#333] bg-[#F8FFDE] outline-none"
            />
            <button className="mt-1 absolute right-1 bg-black text-white px-4 py-2 rounded-[10px] text-sm hover:bg-gray-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-400">
        &copy; 2025 GroomArc. All Rights Reserved
      </div>
    </footer>

  );
}