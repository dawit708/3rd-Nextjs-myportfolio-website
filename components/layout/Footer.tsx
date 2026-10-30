"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Fixed the import here 👇
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
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
  { icon: <FaGithub size={18} />, href: 'https://github.com/dawit708', color: 'hover:bg-white/10' },
  { icon: <FaLinkedin size={18} />, href: '#', color: 'hover:bg-[#0a66c2]/80' },
  { icon: <FaXTwitter size={18} />, href: '#', color: 'hover:bg-white/10' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06] overflow-hidden bg-[#09090b]">
      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Bio */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                  dt.
                </div>
                <span className="text-white font-semibold text-lg tracking-tight">
                  Dawit Tsegie
                </span>
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
              className="text-neutral-400 text-sm leading-relaxed max-w-sm"
            >
              Full-Stack Developer building thoughtful code and meaningful digital experiences — from Ethiopia to the world.
            </motion.p>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
              className="space-y-2.5 pt-2"
            >
              <a href="mailto:dawittsigie3@gmail.com" className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors w-fit">
                <FaEnvelope size={14} className="text-indigo-400" />
                dawittsigie3@gmail.com
              </a>
              <a href="tel:+25154329763" className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors w-fit">
                <FaPhone size={14} className="text-indigo-400" />
                +251 54 32 97 63
              </a>
              <p className="flex items-center gap-2.5 text-sm text-neutral-400">
                {/* Fixed Icon usage here 👇 */}
                <FaLocationDot size={14} className="text-indigo-400" />
                Injibara, Ethiopia
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
              className="flex items-center gap-3 pt-2"
            >
              {socialIcons.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* COLUMN 2: Explore */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
            className="col-span-1 lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-indigo-400 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Connect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
            className="col-span-1 lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link, i) => (
                <li key={i}>
                  {link.isScroll ? (
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-indigo-400 transition-all duration-300" />
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-indigo-400 transition-all duration-300" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: Let's Talk */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
            className="col-span-2 md:col-span-4 lg:col-span-3 space-y-4 pt-4 md:pt-0"
          >
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Let's Talk
            </h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Available for freelance, full-time roles, and thoughtful collaborations.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full md:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-semibold text-sm transition-colors hover:bg-neutral-200"
            >
              Start a Project <ArrowUpRight size={16} />
            </motion.button>

            <div className="flex items-center gap-2 text-xs text-neutral-500 pt-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              Currently available for work
            </div>
          </motion.div>

        </div>

        {/* ===== DIVIDER ===== */}
        <div className="h-px w-full bg-white/[0.06] mb-6" />

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-neutral-500 text-xs sm:text-sm order-2 md:order-1"
          >
            © {new Date().getFullYear()} Dawit Tsegie. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 text-neutral-500 text-xs sm:text-sm order-1 md:order-2"
          >
            <span>Built with</span>
            <Heart size={12} className="text-indigo-400 fill-indigo-400" />
            <span>in Ethiopia</span>
            <span className="text-neutral-700">·</span>
            <span>Next.js & Tailwind</span>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};