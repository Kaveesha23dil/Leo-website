import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About Us", "Services", "Projects", "Contact Us"];

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-green-400 font-bold text-2xl drop-shadow-[0_0_8px_#22c55e]">
          Leo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-green-400 font-medium"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-green-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-400 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-green-400 font-medium"
              whileHover={{ scale: 1.1, color: "#22c55e" }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
