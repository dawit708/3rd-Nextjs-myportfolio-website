"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Zap, Target, Heart, Award } from "lucide-react";

const qualities = [
  {
    number: "01",
    icon: <Rocket size={32} />,
    title: "Fast Learner",
    description: "I pick up new technologies in days, not weeks.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    number: "02",
    icon: <Users size={32} />,
    title: "Team Player",
    description: "I collaborate through GitHub, pair programming, and reviews.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    number: "03",
    icon: <Zap size={32} />,
    title: "Reliable",
    description: "I deliver on time, every time. Never missed a deadline.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    number: "04",
    icon: <Target size={32} />,
    title: "Problem Solver",
    description: "I break complex problems into clean, elegant solutions.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    number: "05",
    icon: <Heart size={32} />,
    title: "Passionate",
    description: "I genuinely love building software. I code on weekends.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    number: "06",
    icon: <Award size={32} />,
    title: "Detail-Oriented",
    description: "I care about animation timing, accessibility, and pixels.",
    gradient: "from-indigo-500 to-purple-600",
  },
];

export const WhatIBring = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 max-w-3xl mx-auto"
      >
        <span className="inline-block text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
          What I Bring
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            To Your Team
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Beyond code — here's the kind of developer and teammate I am.
        </p>
      </motion.div>

      {/* ===== Three Row Layout ===== */}
      <div className="space-y-4">
        {qualities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ x: 10 }}
            className="group relative grid grid-cols-12 gap-4 md:gap-8 items-center bg-[var(--card)]/40 backdrop-blur-sm border border-[var(--border)] rounded-2xl p-6 md:p-8 hover:border-amber-300/40 hover:bg-[var(--card)] transition-all duration-300 overflow-hidden"
          >
            {/* Hover gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            />

            {/* Left: Big Number */}
            <div className="relative col-span-2 md:col-span-1">
              <motion.span
                className={`text-3xl md:text-4xl font-black bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
              >
                {item.number}
              </motion.span>
            </div>

            {/* Middle: Icon */}
            <div className="relative col-span-2 md:col-span-1">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
            </div>

            {/* Center: Title */}
            <div className="relative col-span-8 md:col-span-4">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
            </div>

            {/* Right: Description */}
            <div className="relative col-span-12 md:col-span-6">
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>

            {/* Bottom accent line on hover */}
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500`}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-2xl md:text-3xl font-light italic text-gray-300 max-w-2xl mx-auto leading-relaxed">
          "Great developers write code.{" "}
          <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent font-semibold">
            Exceptional developers lift the whole team.
          </span>
          "
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mt-6" />
      </motion.div>
    </section>
  );
};