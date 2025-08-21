"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,     // ✅ fixed
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1320] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="Leo Logo" className="w-10 h-10" />
            <h2 className="text-lg font-semibold text-white">Leo Club of SLTC</h2>
          </div>
          <p className="text-sm">
            Lions International, District 306 D6
          </p>
          <p className="text-sm mt-3">
            Fueling leadership. Empowering youth. Leo Club of SLIIT stands tall as a trailblazer in Leo District 306 D6 and Leo Multiple District 306, delivering years of impact, innovation, and excellence. Join the pride that shapes tomorrow!
          </p>
          <p className="text-xs text-gray-400 mt-4">
            © 2019–2025 Leo Club of SLTC.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Reach Us</h3>
          <p className="text-sm">
            WhatsApp: <span className="text-gray-400">num</span>
          </p>
          <p className="text-sm">
            Email: <span className="text-gray-400">email</span>
          </p>
          <p className="text-sm">
            Address: <span className="text-gray-400">Address</span>
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Socials</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTiktok /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a> {/* ✅ Fixed */}
            <a href="#" className="hover:text-white"><FaYoutube /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaPinterestP /></a>
            <a href="#" className="hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
        All Rights Reserved. Redesigned and Developed by{" "}
        <span className="text-yellow-500">Kaveesha Dilshan.</span>
      </div>
    </footer>
  );
}
