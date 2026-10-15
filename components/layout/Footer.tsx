"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ArrowUpRight, Heart } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const exploreLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
];

const connectLinks = [
  { label: 'Contact', href: '#contact', isScroll: true },
  { label: 'GitHub', href: 'https://github.com/dawit708', isExternal: true },
  { label: 'LinkedIn', href: '#', isExternal: true },
  { label: 'Twitter', href: '#', isExternal: true },
];

const socialIcons = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/dawit708', color: 'hover:bg-[#333]' },
  { icon: <FaLinkedin size={18} />, href: '#', color: 'hover:bg-[#0a66c2]' },
  { icon: <FaTwitter size={18} />, href: '#', color: 'hover:bg-[#1da1f2]' },
  { icon: <FaDribbble size={18} />, href: '#', color: 'hover:bg-[#ea4c89]' },
];

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-[var(--border)] overflow-hidden">

      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* ===== COLUMN 1: Logo + Bio (Larger) ===== */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                  dt.
                </div>
                <span className="text-white font-bold text-xl">Dawit Tsegei</span>
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-gray-400 leading-relaxed max-w-sm"
            >
              Full-Stack Developer building thoughtful code and meaningful digital experiences — from Ethiopia to the world.
            </motion.p>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2"
            >
              <a href="mailto:dawittsigie3@gmail.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                <FaEnvelope size={14} className="text-indigo-500" />
                dawittsigie3@gmail.com
              </a>
              <a href="tel:+25154329763" className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                <FaPhone size={14} className="text-indigo-500" />
                +251 54 32 97 63
              </a>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt size={14} className="text-indigo-500" />
                Injibara, Ethiopia
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              {socialIcons.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ===== COLUMN 2: Explore ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">
              Explore
            </h4>
            <ul className="space-y-4">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-indigo-500 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== COLUMN 3: Connect ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">
              Connect
            </h4>
            <ul className="space-y-4">
              {connectLinks.map((link, i) => (
                <li key={i}>
                  {link.isScroll ? (
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-indigo-500 transition-all duration-300" />
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-indigo-500 transition-all duration-300" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== COLUMN 4: Newsletter / CTA ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">
              Let's Talk
            </h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Available for freelance, full-time roles, and thoughtful collaborations.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow"
            >
              Start a Project <ArrowUpRight size={16} />
            </motion.button>

            <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Currently available for work
            </div>
          </motion.div>

        </div>

        {/* ===== DIVIDER ===== */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-8" />

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-sm"
          >
            © 2026 Dawit Tsegei. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3 text-gray-600 text-sm"
          >
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>in Ethiopia</span>
            <span className="text-gray-700">·</span>
            <span>Next.js & Tailwind CSS</span>
          </motion.div>

        </div>

      </div>

      {/* ===== Decorative bottom gradient line ===== */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

    </footer>
  );
};