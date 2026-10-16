"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutGrid, 
  BookOpen, 
  Users, 
  Rocket, 
  Palette, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { InfoModal } from '@/components/ui/InfoModal';

// ====== 6 CARDS DATA ======
const doingItems = [
  {
    icon: <LayoutGrid size={28} />,
    title: 'Building',
    description: 'Thoughtful interfaces and resilient APIs that scale with your product.',
    gradient: 'from-indigo-500 to-purple-600',
    details: [
      'Design and develop production-ready web applications from scratch.',
      'Build RESTful APIs and microservices with Node.js, Express, and PostgreSQL.',
      'Ensure scalability, performance, and reliability in every deployment.',
      'Write clean, maintainable code that follows industry best practices.',
    ],
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Learning',
    description: 'Exploring distributed systems, AI tooling, and emerging tech stacks.',
    gradient: 'from-cyan-500 to-blue-600',
    details: [
      'Currently exploring distributed systems architecture and design patterns.',
      'Learning AI integration — OpenAI APIs, LangChain, and vector databases.',
      'Deep-diving into Flutter for cross-platform mobile development.',
      'Studying cloud architecture on AWS and Vercel for scalable deployments.',
    ],
  },
  {
    icon: <Users size={28} />,
    title: 'Sharing',
    description: 'Writing notes, mentoring developers, and giving back to the community.',
    gradient: 'from-pink-500 to-rose-600',
    details: [
      'Mentoring junior developers in React, Next.js, and TypeScript.',
      'Writing technical notes and tutorials on modern web development.',
      'Active in GitHub open-source contributions and community projects.',
      'Sharing knowledge through blog posts and developer meetups in Ethiopia.',
    ],
  },
  {
    icon: <Rocket size={28} />,
    title: 'Shipping',
    description: 'Turning ideas into production-ready features with speed and precision.',
    gradient: 'from-orange-500 to-red-600',
    details: [
      '10+ production projects successfully deployed and running live.',
      'Rapid prototyping — from idea to live demo in days, not weeks.',
      'Comfortable with CI/CD pipelines and automated deployments.',
      'Every project ships with responsive design and performance optimization.',
    ],
  },
  {
    icon: <Palette size={28} />,
    title: 'Designing',
    description: 'Crafting clean, accessible, and delightful user experiences.',
    gradient: 'from-purple-500 to-fuchsia-600',
    details: [
      'Designing interfaces in Figma with pixel-perfect attention to detail.',
      'Building reusable design systems and component libraries.',
      'Ensuring WCAG accessibility standards in every project.',
      'Creating smooth animations and micro-interactions with Framer Motion.',
    ],
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Optimizing',
    description: 'Improving performance, accessibility, and developer experience.',
    gradient: 'from-emerald-500 to-teal-600',
    details: [
      'Optimizing Lighthouse scores for performance, accessibility, and SEO.',
      'Reducing bundle size and improving Core Web Vitals.',
      'Refactoring legacy code for maintainability and scalability.',
      'Setting up testing frameworks — Jest, React Testing Library, and Playwright.',
    ],
  },
];

// ====== ANIMATION VARIANTS ======
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const }
  }
};

export const WhatsDoing = () => {
  const [selectedItem, setSelectedItem] = useState<typeof doingItems[0] | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">

      {/* ===== CENTERED HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 max-w-3xl mx-auto"
      >
        <motion.span
          className="inline-block text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          What I'm Doing
        </motion.span>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            What I'm Doing
          </span>
        </motion.h2>

        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 128, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        <motion.p
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          A mix of craft, curiosity, and continuous improvement — here's what fills my days.
        </motion.p>
      </motion.div>

      {/* ===== 6-Card Grid ===== */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {doingItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 overflow-hidden transition-colors duration-300 hover:border-indigo-500/50"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            <div className="absolute top-6 right-6 text-xs font-bold text-gray-700 group-hover:text-indigo-500 transition-colors duration-300">
              {String(index + 1).padStart(2, '0')}
            </div>

            <motion.div
              className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
              whileHover={{
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            >
              {item.icon}
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-gray-500 leading-relaxed text-sm mb-5">
              {item.description}
            </p>

            {/* READ MORE BUTTON */}
            <button
              onClick={() => setSelectedItem(item)}
              className="relative inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/btn"
            >
              Read More
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <motion.div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ===== MODAL ===== */}
      <InfoModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
        category="What I'm Doing"
        gradient={selectedItem?.gradient || ''}
        icon={selectedItem?.icon}
        description={selectedItem?.description || ''}
        details={selectedItem?.details || []}
      />

    </section>
  );
};