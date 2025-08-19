"use client";
import { motion } from "framer-motion";

export default function LeoClub() {
  return (
    <div className="bg-black text-neon-green px-6 py-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Welcome to <span className="text-neon-green">Leo Club of SLTC</span>
      </motion.h1>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(0, 140, 255, 0.8)",
          background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)",
        }}
        className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-blue-500 mb-6 cursor-pointer transition-all duration-300"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-3 text-white"
        >
          About Us
        </motion.h2>
        <p className="text-gray-300 leading-relaxed">
          The Leo Club of SLTC is a youth-led movement that empowers students to
          engage in social service, leadership, and personal development. We
          organize impactful community projects, leadership programs, and events
          that create a lasting difference in society. Guided by the values of
          Lions Clubs International, we strive to develop responsible leaders
          and inspire meaningful change.
        </p>
      </motion.div>

      {/* Mission & Vision Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(0, 140, 255, 0.8)",
            background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)",
          }}
          className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-blue-500 cursor-pointer transition-all duration-300"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold mb-3 text-white"
          >
            Our Mission
          </motion.h3>
          <p className="text-gray-300 leading-relaxed">
            To cultivate leadership, promote community service, and empower
            young individuals to work together for the betterment of society.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(0, 140, 255, 0.8)",
            background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)",
          }}
          className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-blue-500 cursor-pointer transition-all duration-300"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold mb-3 text-white"
          >
            Our Vision
          </motion.h3>
          <p className="text-gray-300 leading-relaxed">
            To be recognized as a leading youth organization that creates
            positive change through service, leadership, and innovation—driving
            impactful transformation in our community and beyond.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
