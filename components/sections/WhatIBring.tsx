"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Zap, Target, Heart, Award } from 'lucide-react';

const qualities = [
  {
    icon: <Rocket size={28} />,
    title: 'Fast Learner',
    description: 'I pick up new technologies in days, not weeks. Self-taught in React, Next.js, MERN, and Flutter.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: <Users size={28} />,
    title: 'Team Player',
    description: 'I collaborate through GitHub, pair programming, and code reviews. I communicate clearly and often.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: <Zap size={28} />,
    title: 'Reliable',
    description: 'I deliver on time, every time. Across 12+ projects, I have never missed a deadline.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: <Target size={28} />,
    title: 'Problem Solver',
    description: 'I break complex problems into small, manageable tasks and find clean, elegant solutions.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: <Heart size={28} />,
    title: 'Passionate',
    description: 'I genuinely love building software. I code on weekends, learn on holidays, and ship constantly.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <Award size={28} />,
    title: 'Detail-Oriented',
    description: 'I care about the small things — animation timing, accessibility, and pixel-perfect design.',
    gradient: 'from-indigo-500 to-purple-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const WhatIBring = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <motion.span
          className="inline-block text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I Bring
        </motion.span>
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            To Your Team
          </span>
        </motion.h2>
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
        <motion.p
          className="text-gray-400 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Beyond code — here's the kind of developer and teammate I am.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {qualities.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 overflow-hidden hover:border-indigo-500/50 transition-colors"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <motion.div
              className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
              whileHover={{
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              {item.icon}
            </motion.div>

            <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              {item.title}
            </h3>

            <p className="relative text-gray-400 leading-relaxed text-sm">
              {item.description}
            </p>

            <motion.div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient}`}
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};