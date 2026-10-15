"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "Flutter Developer"
];

export const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[80px] md:h-[100px] overflow-hidden relative w-full">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent absolute left-0 whitespace-nowrap"
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};