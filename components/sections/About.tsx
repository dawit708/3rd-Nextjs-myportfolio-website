"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Layers, Telescope, ArrowUpRight } from "lucide-react";

// ====== ANIMATION VARIANTS ======
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  },
};

// ====== SENIOR PRINCIPLES DATA ======
const principles = [
  {
    icon: <Layers className="w-5 h-5 text-indigo-400" />,
    title: "Systems over Hacks",
    description: "I build scalable architectures that are easy to maintain, not just quick fixes that break later.",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: "Performance by Default",
    description: "Every millisecond counts. I optimize for fast load times, smooth interactions, and great Core Web Vitals.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    title: "Design-Driven Engineering",
    description: "I care about the 1px details. I bridge the gap between Figma designs and pixel-perfect code.",
  },
];

export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 relative z-10">
      <motion.div
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* ===== LEFT COLUMN: IMAGE ===== */}
        <motion.div variants={imageVariants} className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0">
          <div className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/[0.08] bg-white/[0.02]">
            <img
              src="/dev.jpg"
              alt="Dawit Tsegie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle gradient overlay to ground the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* ===== RIGHT COLUMN: TEXT & PRINCIPLES ===== */}
        <div className="w-full lg:w-7/12 space-y-5">
          
          {/* Header */}
          <motion.div variants={itemVariants}>
            <div className="mb-3 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-400">
              <span className="h-px w-8 bg-indigo-400/50" />
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
              Engineering with intent.
            </h2>
          </motion.div>

          {/* Bio Text Block - Grouped so the gap applies evenly to all sentences */}
          <motion.div variants={itemVariants} className="space-y-2.5 text-neutral-400 text-sm sm:text-base leading-relaxed">
            <p>
              I'm Dawit Tsegie, a Full-Stack Developer based in Ethiopia. I specialize in building 
              production-grade web applications end-to-end — from the database schema to the final pixel.
            </p>
            <p>
              My approach goes beyond just writing code. I thrive in environments where I can solve 
              complex problems, architect scalable systems, and collaborate closely with teams to bring 
              ambitious ideas to life. 
            </p>
            <p>
              Whether it's optimizing a database query or refining a UI component, I focus on delivering 
              work that is fast, reliable, and visually polished.
            </p>
          </motion.div>

          {/* Engineering Principles */}
          <motion.div variants={itemVariants} className="space-y-3 pt-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              How I Build
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="flex flex-col gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5 transition-colors hover:border-white/[0.12] hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      {principle.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white">{principle.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}

              {/* Currently Exploring Block */}
              <div className="flex flex-col gap-1.5 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.04] p-3.5 transition-colors hover:border-indigo-500/40">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <Telescope className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Currently Exploring</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Diving deep into <span className="text-indigo-300 font-medium">AI integrations</span> and advanced <span className="text-indigo-300 font-medium">Next.js App Router</span> patterns.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="pt-0.5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400"
            >
              Let's build something together
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};