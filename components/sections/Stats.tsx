"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ====== STATS DATA (with optional links) ======
const statsData = [
  { 
    value: 50, 
    suffix: '+', 
    label: 'Projects', 
   link: 'https://github.com/dawit708'
  },
  { 
    value: 3, 
    suffix: '+', 
    label: 'Clients', 
    link: 'https://dawittsigie.onrender.com/' 
  },
  { 
    value: 2, 
    suffix: '+', 
    label: 'Years', 
    link: null 
  },
  { 
    value: 4, 
    suffix: '', 
    label: 'Awards', 
    link: 'https://drive.google.com/file/d/1TuNwkyJQfN1yUW1iLEEnbyUJk3jDnkmH/view?usp=sharing' 
  },
];

// ====== Animated Counter Component ======
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ====== ANIMATION VARIANTS ======
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const Stats = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
      <motion.div
        className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Subtle gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
          {statsData.map((stat, index) => {
            // Determine if this stat is clickable
            const isClickable = stat.link !== null;

            // The inner content (shared between link and non-link versions)
            const StatContent = (
              <motion.div
                whileHover={isClickable ? { y: -5, scale: 1.03 } : { y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`group relative flex flex-col items-center text-center px-4 py-6 rounded-2xl transition-colors duration-300 ${
                  isClickable 
                    ? 'hover:bg-[var(--background)]/50 cursor-pointer' 
                    : 'cursor-default'
                }`}
              >
                {/* Vertical Divider (except last) */}
                {index < statsData.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent"></div>
                )}

                {/* Number with Gradient */}
                <h3 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:from-indigo-300 group-hover:to-purple-400 transition-all duration-500">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>

                {/* Label */}
                <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-gray-500 group-hover:text-indigo-400 transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Glow underline on hover */}
                <motion.div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* External link icon (only for clickable stats) */}
                {isClickable && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-indigo-400"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                )}
              </motion.div>
            );

            // If clickable, wrap in <a>. Otherwise return plain div.
            return isClickable ? (
              <a
                key={index}
                href={stat.link!}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {StatContent}
              </a>
            ) : (
              <div key={index}>{StatContent}</div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};