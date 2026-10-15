"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// ====== TOOLKIT DATA (with skill levels) ======
const toolkitCategories = [
  {
    title: 'Frontend',
    items: [
      { icon: 'HTML', label: 'HTML / CSS', color: 'text-orange-400 bg-orange-400/10', level: 95 },
      { icon: 'JS', label: 'JavaScript', color: 'text-yellow-400 bg-yellow-400/10', level: 90 },
      { icon: '⚛', label: 'React.js', color: 'text-cyan-400 bg-cyan-400/10', level: 92 },
      { icon: 'N', label: 'Next.js', color: 'text-white bg-white/10', level: 88 },
      { icon: 'TS', label: 'TypeScript', color: 'text-blue-400 bg-blue-400/10', level: 85 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: 'JS', label: 'Node.js', color: 'text-green-400 bg-green-400/10', level: 88 },
      { icon: 'EX', label: 'Express.js', color: 'text-gray-300 bg-gray-300/10', level: 85 },
      { icon: 'NST', label: 'Nest.js', color: 'text-red-400 bg-red-400/10', level: 80 },
      { icon: 'PY', label: 'Python', color: 'text-blue-300 bg-blue-300/10', level: 82 },
      { icon: 'PHP', label: 'PHP', color: 'text-indigo-400 bg-indigo-400/10', level: 80 },
    ],
  },
  {
    title: 'Database',
    items: [
      { icon: 'PG', label: 'PostgreSQL', color: 'text-sky-400 bg-sky-400/10', level: 88 },
      { icon: 'MY', label: 'MySQL', color: 'text-blue-500 bg-blue-500/10', level: 85 },
      { icon: 'MG', label: 'MongoDB', color: 'text-green-500 bg-green-500/10', level: 82 },
      { icon: 'RD', label: 'Redis', color: 'text-red-500 bg-red-500/10', level: 80 },
    ],
  },
];

// ====== ANIMATION VARIANTS ======
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const categoryCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  }
};

export const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 relative z-10">

      <motion.div
        className="flex flex-col lg:flex-row gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* Left Column - Image */}
        <motion.div variants={imageVariants} className="flex-1 w-full max-w-md">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[var(--border)] bg-[var(--card)]">
            <img
              src="/about.jpg"
              alt="Dawit working at his desk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <p className="mt-4 text-xs text-gray-500 font-medium italic">
            A little curiosity. A lot of craft.
          </p>
        </motion.div>

        {/* Right Column - Text & Toolkit */}
        <div className="flex-1 space-y-8">

          <motion.div variants={itemVariants}>
            <span className="text-indigo-500 text-xs font-semibold tracking-widest uppercase mb-3 block">
              01 / About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hi, I'm Dawit Tsigie
            </h2>
            <p className="text-base md:text-lg font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Web Developer based in Injibara, Ethiopia.
            </p>
          </motion.div>

          {/* Bio paragraphs - smaller, refined typography */}
          <motion.div variants={itemVariants} className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              I'm a passionate Full Stack Web Developer dedicated to crafting modern,
              high-performance web experiences. With several years of professional
              experience, I specialize in building responsive, user-friendly applications
              that meet the latest industry standards.
            </p>
            <p>
              I thrive in collaborative environments, interpreting design blueprints
              and working closely with teams to deliver exceptional results on schedule.
              My keen eye for detail ensures every project is polished and functional
              across all devices. Beyond coding, I'm a continuous learner — always
              exploring new technologies and refining my skills to stay ahead in this
              fast-paced field.
            </p>
          </motion.div>

          {/* Toolkit */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase">
              My Everyday Toolkit
            </h3>

            {/* 3 Columns side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {toolkitCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  variants={categoryCardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    borderColor: "var(--color-primary)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 cursor-pointer transition-all duration-300"
                >
                  {/* Category Title */}
                  <motion.h4
                    className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-5 text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.title}
                  </motion.h4>

                  {/* Vertical list of items with progress bars */}
                  <div className="flex flex-col gap-4">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="group cursor-pointer"
                      >
                        {/* Icon + Label + Percentage */}
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <motion.span
                              className={cn(
                                "font-mono text-xs px-2 py-1 rounded-md font-bold flex-shrink-0",
                                item.color
                              )}
                              whileHover={{
                                scale: 1.15,
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.4 }
                              }}
                            >
                              {item.icon}
                            </motion.span>
                            <span className="text-xs font-medium text-gray-300 group-hover:text-indigo-300 transition-colors">
                              {item.label}
                            </span>
                          </div>

                          {/* Percentage */}
                          <motion.span
                            className="text-xs font-bold text-indigo-400"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            {item.level}%
                          </motion.span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-[var(--background)] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: 0.3 + index * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom gradient line on hover */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};