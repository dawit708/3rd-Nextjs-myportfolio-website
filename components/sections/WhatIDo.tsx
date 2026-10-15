"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    label: 'END-TO-END ENGINEERING',
    title: 'Full-stack development',
    description: 'From responsive interfaces to robust backends. Fast, accessible products built to grow.',
    link: 'Learn more',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    icon: <Layers size={32} />,
    label: 'DESIGN THAT WORKS',
    title: 'UI/UX & design systems',
    description: 'Clear journeys and cohesive interfaces. Design systems that bridge pixels and production.',
    link: 'Learn more',
    gradient: 'from-purple-500 to-fuchsia-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const WhatIDo = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-indigo-500 text-xs font-semibold tracking-widest uppercase mb-3 block">
          02 / What I Do
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          What I Do
        </h2>
        <p className="text-lg text-gray-400">
          Thoughtful solutions, from the interface to the infrastructure.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-[var(--card)] border border-[var(--border)] rounded-3xl p-10 overflow-hidden cursor-pointer hover:border-indigo-500/50 transition-colors duration-300"
          >
            {/* Background gradient glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            {/* Icon with animation */}
            <motion.div 
              className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 shadow-lg`}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            >
              {service.icon}
            </motion.div>

            {/* Label */}
            <span className="relative text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4 block">
              {service.label}
            </span>

            {/* Title */}
            <h3 className="relative text-3xl font-bold text-white mb-6 group-hover:text-indigo-300 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative text-gray-400 leading-relaxed text-lg mb-8">
              {service.description}
            </p>

            {/* Link */}
            <a 
              href="#contact" 
              className="relative inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group/link"
            >
              {service.link}
              <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>

            {/* Bottom gradient line on hover */}
            <motion.div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};