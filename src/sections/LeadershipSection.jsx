import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const leaders = [
  {
    id: 1,
    name: "Leo Nilusha Chamindu",
    role: "Treasurer",
    img: "https://via.placeholder.com/300x350",
    position: "top-left",
  },
  {
    id: 2,
    name: "Leo Lion Avishka Perera",
    role: "President",
    img: "https://via.placeholder.com/300x350",
    position: "top-right",
  },
  {
    id: 3,
    name: "Leo Navodya Senarathne",
    role: "Secretary",
    img: "https://via.placeholder.com/300x350",
    position: "bottom-left",
  },
];

export default function LeadershipSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-gray-900 to-black py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="px-4 py-1 rounded-full bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-sm font-semibold tracking-wider">
            EXECUTIVE BOARD
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-snug">
            We Are Leaders Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
              Work Together!
            </span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            We believe in youth leadership through service. Our executive team
            guides and empowers Leos to become tomorrow’s leaders—together.
          </p>
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 hover:opacity-90 text-black font-semibold rounded-xl shadow-lg transition">
            View Our Leadership ↗
          </button>
        </motion.div>

        {/* RIGHT SIDE - Team cards */}
        <div className="relative h-[500px] flex justify-center lg:justify-end">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`absolute ${
                leader.position === "top-left" ? "top-0 left-0" : ""
              } ${
                leader.position === "top-right" ? "top-10 right-0 z-10" : ""
              } ${
                leader.position === "bottom-left" ? "bottom-0 left-12" : ""
              } bg-gray-800 rounded-2xl overflow-hidden shadow-xl w-48 sm:w-56`}
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="text-white font-semibold">{leader.name}</h3>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-black rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
                  {leader.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
