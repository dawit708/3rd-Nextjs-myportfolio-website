"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [stage, setStage] = useState(0);

  const stages = [
    { at: 0, text: "initializing" },
    { at: 25, text: "loading components" },
    { at: 50, text: "fetching assets" },
    { at: 75, text: "optimizing" },
    { at: 95, text: "ready" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const increment = prev < 30 ? 8 : prev < 70 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentStage = stages.reduce(
      (acc, s) => (progress >= s.at ? s : acc),
      stages[0]
    );
    setStage(stages.indexOf(currentStage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed inset-0 z-[9999] bg-[#0a0a12] flex items-center justify-center overflow-hidden"
        >
          {/* Ambient Gradient Orbs */}
          <motion.div
            className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[160px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[15%] right-[15%] w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-[160px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Code Symbols */}
          {["fn()", "=>", "{ }", "</>", "&&", "[ ]", "0x1F", "npm i"].map(
            (sym, i) => (
              <motion.div
                key={i}
                className="absolute font-mono text-xs text-amber-200/20 select-none pointer-events-none"
                style={{
                  left: `${10 + ((i * 11) % 80)}%`,
                  top: `${15 + ((i * 23) % 70)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                {sym}
              </motion.div>
            )
          )}

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Rotating Rings with YOUR PHOTO */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-10">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, #6366f1 25%, #a855f7 50%, transparent 75%)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 0%, #f59e0b 30%, transparent 60%)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* YOUR PHOTO in the center */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/40">
                <motion.img
                  src="/about.jpg"
                  alt="Dawit Tsegei"
                  className="w-full h-full object-cover object-center"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.34, 1.56, 0.64, 1] as const,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent" />
              </div>

              {/* Pulsing glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-indigo-400/40"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2"
            >
              Dawit Tsegei
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-mono text-[10px] md:text-xs text-gray-500 tracking-[0.4em] uppercase mb-12"
            >
              Full-Stack Developer
            </motion.p>

            {/* Percentage + Progress */}
            <div className="w-[240px] md:w-[280px]">
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={stage}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 tracking-widest uppercase"
                  >
                    {stages[stage].text}
                  </motion.span>
                </AnimatePresence>

                <motion.span
                  key={progress}
                  className="text-white font-bold tabular-nums"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  {String(progress).padStart(3, "0")}%
                </motion.span>
              </div>

              <div className="relative h-[3px] w-full bg-[#1f2937] rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-0 h-full w-8 bg-white/40 blur-md rounded-full"
                  animate={{ left: `${Math.max(0, progress - 4)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-center font-mono text-[10px] text-gray-600 tracking-[0.3em] uppercase"
              >
                {progress === 100 ? "entering portfolio" : "please wait"}
              </motion.div>
            </div>
          </div>

          {/* Corner coordinates */}
          <div className="hidden md:block absolute top-6 right-6 text-right font-mono text-[10px] text-amber-200/30 tracking-widest">
            <div>9.03°N 38.74°E</div>
            <div className="mt-1">ADDIS ABABA</div>
          </div>

          {/* Version tag */}
          <div className="hidden md:block absolute bottom-6 left-6 font-mono text-[10px] text-gray-700 tracking-widest">
            v1.0.0 — 2026
          </div>

          {/* Status indicator */}
          <div className="hidden md:flex absolute bottom-6 right-6 items-center gap-2 font-mono text-[10px] text-gray-600 tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            system online
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};