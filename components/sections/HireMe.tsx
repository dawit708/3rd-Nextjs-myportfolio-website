"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Download, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const availabilities = [
  "Available for Full-Time Roles",
  "Available for Freelance Projects",
  "Available for Remote Worldwide",
  "Open to Relocation in Ethiopia",
];

export const HireMe = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-3xl p-10 md:p-16 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative text-center max-w-3xl mx-auto">
          <motion.span
            className="inline-block text-indigo-400 text-xs font-bold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-white">Ready to </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work With You
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm ready to bring my skills, energy, and passion to a team that's
            building something meaningful.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {availabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 bg-[var(--card)]/50 backdrop-blur-sm border border-[var(--border)] rounded-xl p-4"
              >
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-green-400" />
                </div>
                <span className="text-sm text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="/cv.pdf"
              download="Dawit_Tsegie_CV.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-colors shadow-xl cursor-pointer"
            >
              <Download size={18} />
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity shadow-xl shadow-indigo-500/30 cursor-pointer"
            >
              <Calendar size={18} />
              Schedule a Call
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <Clock size={14} className="text-green-400" />
            <span>Average response time:</span>
            <span className="text-white font-semibold">Within 24 hours</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};