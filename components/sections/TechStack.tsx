"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFlutter,
  SiPhp,
  SiDocker,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss,
  SiPython,
  SiTensorflow,
} from "react-icons/si";

const techStack = [
  { icon: <SiReact />, name: "React", color: "#61DAFB", level: 92 },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff", level: 88 },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6", level: 85 },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E", level: 90 },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#339933", level: 88 },
  { icon: <SiExpress />, name: "Express", color: "#ffffff", level: 85 },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248", level: 82 },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1", level: 85 },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4", level: 92 },
  { icon: <SiFlutter />, name: "Flutter", color: "#02569B", level: 75 },
  { icon: <SiPhp />, name: "PHP", color: "#777BB4", level: 80 },
  { icon: <SiPython />, name: "Python", color: "#3776AB", level: 80 },
  {
    icon: <SiTensorflow />,
    name: "Machine Learning",
    color: "#FF6F00",
    level: 75,
  },
  { icon: <SiDocker />, name: "Docker", color: "#2496ED", level: 70 },
  { icon: <SiGit />, name: "Git", color: "#F05032", level: 88 },
  { icon: <SiFigma />, name: "Figma", color: "#F24E1E", level: 80 },
  { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26", level: 95 },
  { icon: <SiCss />, name: "CSS3", color: "#1572B6", level: 92 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

export const TechStack = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      {/* ===== Header ===== */}
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
          My Toolkit
        </motion.span>

        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            Tech Stack
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
          Tools and technologies I use daily to build modern web applications.
        </motion.p>
      </motion.div>

      {/* ===== Grid ===== */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer hover:border-indigo-500/50 transition-colors"
          >
            {/* Icon */}
            <div
              className="text-4xl transition-transform duration-500 group-hover:scale-125"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>

            {/* Name */}
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors text-center">
              {tech.name}
            </span>

            {/* Proficiency bar (shows on hover) */}
            <div className="w-full h-1 bg-[var(--background)] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.div
                className="h-full rounded-full"
                style={{ background: tech.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.03, duration: 1 }}
              />
            </div>

            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--background)] border border-[var(--border)] rounded-lg px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {tech.level}%
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};