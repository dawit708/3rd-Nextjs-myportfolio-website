"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiTensorflow,
  SiDocker,
  SiGit,
  SiFigma,
  SiFastapi,
  SiGithub,
} from "react-icons/si";

/* ============================================================
   Data — Grouped to match your image
   ============================================================ */
type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type Category = {
  id: string;
  title: string;
  techs: Tech[];
};

const CATEGORIES: Category[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    techs: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss />, color: "#1572B6" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    techs: [
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
    ],
  },
];

/* ============================================================
   Diamond Card Component
   ============================================================ */
function DiamondCard({
  tech,
  isActive,
  onClick,
}: {
  tech: Tech;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center outline-none"
    >
      {/* 
        The Rotated Background. 
        We use `rotate-45` to make it a diamond. 
      */}
      <div
        className={`absolute inset-2 rotate-45 rounded-2xl border-2 transition-all duration-300 ${
          isActive
            ? "border-[var(--tech-color)] bg-[var(--tech-color)]/10 shadow-[0_0_20px_var(--tech-color)]"
            : "border-white/[0.06] bg-[#0f0f13] group-hover:border-white/[0.15] group-hover:bg-[#15151a]"
        }`}
        style={{ "--tech-color": tech.color } as React.CSSProperties}
      />

      {/* 
        Circular Glow effect when clicked (The "Circulated" effect you asked for)
      */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-0 rounded-full bg-[var(--tech-color)] opacity-20 blur-xl"
            style={{ "--tech-color": tech.color } as React.CSSProperties}
          />
        )}
      </AnimatePresence>

      {/* 
        The Content (Upright). 
        Because the background is rotated 45deg, the text stays at 0deg.
      */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div
          className={`text-2xl sm:text-3xl transition-colors duration-300 ${
            isActive ? "text-white drop-shadow-md" : "text-neutral-400"
          }`}
          style={isActive ? { color: tech.color } : {}}
        >
          {tech.icon}
        </div>
        <span
          className={`text-[10px] sm:text-xs font-semibold tracking-wide transition-colors duration-300 ${
            isActive ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
          }`}
        >
          {tech.name}
        </span>
      </div>
    </motion.button>
  );
}

/* ============================================================
   Main Section
   ============================================================ */
export function TechStack() {
  const [activeTech, setActiveTech] = useState<string | null>("TypeScript");

  return (
    <section
      id="stack"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.03] blur-[120px]"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-400">
          <span className="h-px w-8 bg-indigo-400/50" />
          My Toolkit
          <span className="h-px w-8 bg-indigo-400/50" />
        </div>
        <h2 className="mb-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
          Click on any technology to highlight it.
        </p>
      </motion.div>

      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {CATEGORIES.map((category, colIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: colIndex * 0.15 }}
            className="relative flex flex-col rounded-3xl border border-white/[0.06] bg-[#09090b] p-6 shadow-2xl sm:p-8"
          >
            {/* Column Header */}
            <h3 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {category.title}
            </h3>

            {/* Diamond Grid (Staggered Layout) */}
            <div className="flex flex-1 flex-wrap justify-center gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-8">
              {category.techs.map((tech, i) => {
                // Stagger every second item to create the zig-zag diamond look
                const isStaggered = i % 2 !== 0;

                return (
                  <div
                    key={tech.name}
                    className={`${isStaggered ? "translate-y-6 sm:translate-y-8" : ""}`}
                  >
                    <DiamondCard
                      tech={tech}
                      isActive={activeTech === tech.name}
                      onClick={() =>
                        setActiveTech((prev) =>
                          prev === tech.name ? null : tech.name
                        )
                      }
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}