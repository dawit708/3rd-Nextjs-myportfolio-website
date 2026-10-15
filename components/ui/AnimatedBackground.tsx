"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Top Left Blob - Indigo */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/15 blur-[120px]"
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom Right Blob - Deep Blue */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-700/15 blur-[120px]"
        animate={{
          x: [0, -100, 0, 50, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center Blob - Purple */}
      <motion.div
        className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-purple-700/10 blur-[100px]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
    </div>
  );
};