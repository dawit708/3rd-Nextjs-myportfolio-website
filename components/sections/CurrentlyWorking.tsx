"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowUpRight } from 'lucide-react';

const currentProjects = [
  {
    title: 'Flutter Mobile App for Injibara Businesses',
    description: 'Building a mobile app that helps local businesses manage inventory, customers, and orders.',
    progress: 70,
    lastUpdated: '2 days ago',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Next.js E-Commerce Platform',
    description: 'A production-ready e-commerce site with Stripe integration, cart, and admin dashboard.',
    progress: 45,
    lastUpdated: '5 days ago',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export const CurrentlyWorking = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={20} />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-white">Currently Working On</h3>
              <p className="text-sm text-gray-500">Live projects I'm actively building</p>
            </div>
            <span className="ml-auto flex items-center gap-2 text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Active now
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--border)] rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 tracking-widest uppercase font-semibold">
                      Progress
                    </span>
                    <span className="text-indigo-400 font-bold">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[var(--card)] rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${project.gradient}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={12} />
                    Updated {project.lastUpdated}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};