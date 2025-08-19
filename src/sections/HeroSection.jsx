"use client";

import React, { useState, useEffect } from "react";
import bgImage from "../assets/hero.png"; // 👈 Your background image

export default function HeroSection() {
  const sentences = [
    "Leadership, Experience, Opportunity.",
    "We serve the community with passion.",
    "Empowering youth to create positive change.",
    "Together, we make the world a better place.",
  ];

  const [currentText, setCurrentText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 120;

    const timeout = setTimeout(() => {
      const fullSentence = sentences[sentenceIndex];

      if (isDeleting) {
        setCurrentText(fullSentence.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(fullSentence.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === fullSentence.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSentenceIndex((sentenceIndex + 1) % sentences.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Static Welcome Text */}
      <div className="absolute bottom-20 w-full text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="text-white">Welcome to </span>
          <span className="text-green-400 drop-shadow-[0_0_10px_#22c55e]">
            LEO Club
          </span>
        </h1>
      </div>

      {/* Typing effect below */}
      <div className="absolute bottom-10 w-full text-center">
        <h2 className="text-white text-xl md:text-3xl font-semibold max-w-4xl mx-auto px-4">
          {currentText}
          <span className="animate-blink">|</span>
        </h2>
      </div>

      {/* Blink animation */}
      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
