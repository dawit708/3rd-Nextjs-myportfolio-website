"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
   Data
   Edit `years`, `level` and `note` so they reflect your real
   experience. These are placeholders.
   ============================================================ */
type Level = "Expert" | "Advanced" | "Working";

type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
  years: number;
  level: Level;
  note: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  techs: Tech[];
};

const LEVEL_SEGMENTS: Record<Level, number> = {
  Expert: 3,
  Advanced: 2,
  Working: 1,
};

const CATEGORIES: Category[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces, design systems and client-side performance.",
    techs: [
      {
        name: "React",
        icon: <SiReact />,
        color: "#61DAFB",
        years: 4,
        level: "Expert",
        note: "Component architecture, custom hooks, state management and performance tuning.",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "#FFFFFF",
        years: 3,
        level: "Expert",
        note: "App Router, server components, SSR/ISR, route handlers and SEO.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#3178C6",
        years: 3,
        level: "Advanced",
        note: "Strict typing, generics and shared types between client and API.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "#06B6D4",
        years: 3,
        level: "Expert",
        note: "Design tokens, responsive layouts and reusable UI primitives.",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "#F7DF1E",
        years: 5,
        level: "Expert",
        note: "Modern ES features, async patterns and browser APIs.",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        color: "#E34F26",
        years: 5,
        level: "Expert",
        note: "Semantic, accessible markup.",
      },
      {
        name: "CSS3",
        icon: <SiCss />,
        color: "#1572B6",
        years: 5,
        level: "Advanced",
        note: "Grid, flexbox, animations and custom properties.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "APIs, databases and the services behind the UI.",
    techs: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "#339933",
        years: 4,
        level: "Advanced",
        note: "REST APIs, authentication, background jobs and integrations.",
      },
      {
        name: "Express",
        icon: <SiExpress />,
        color: "#FFFFFF",
        years: 3,
        level: "Advanced",
        note: "Middleware design, validation and error handling.",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi />,
        color: "#009688",
        years: 2,
        level: "Advanced",
        note: "Typed Python APIs with automatic OpenAPI docs.",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#4169E1",
        years: 3,
        level: "Advanced",
        note: "Schema design, indexing and query optimization.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47A248",
        years: 3,
        level: "Advanced",
        note: "Document modelling and aggregation pipelines.",
      },
      {
        name: "Python",
        icon: <SiPython />,
        color: "#3776AB",
        years: 3,
        level: "Advanced",
        note: "Services, scripting and data work.",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        color: "#777BB4",
        years: 2,
        level: "Working",
        note: "Maintaining and extending existing PHP applications.",
      },
    ],
  },
  {
    id: "tools",
    title: "Tooling & Mobile",
    description: "Workflow, delivery, design handoff and cross-platform work.",
    techs: [
      {
        name: "Docker",
        icon: <SiDocker />,
        color: "#2496ED",
        years: 2,
        level: "Advanced",
        note: "Containerized dev environments and production images.",
      },
      {
        name: "Git",
        icon: <SiGit />,
        color: "#F05032",
        years: 5,
        level: "Expert",
        note: "Branching strategies, rebasing and clean commit history.",
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
        color: "#FFFFFF",
        years: 5,
        level: "Expert",
        note: "Pull request reviews, Actions CI/CD and project boards.",
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        color: "#F24E1E",
        years: 3,
        level: "Advanced",
        note: "Turning designs into components and collaborating with designers.",
      },
      {
        name: "Flutter",
        icon: <SiFlutter />,
        color: "#02569B",
        years: 2,
        level: "Working",
        note: "Cross-platform mobile apps from a single codebase.",
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow />,
        color: "#FF6F00",
        years: 1,
        level: "Working",
        note: "Training and serving small machine learning models.",
      },
    ],
  },
];

/* ============================================================
   Level indicator (3 segments)
   ============================================================ */
function LevelMeter({ level, color }: { level: Level; color: string }) {
  const filled = LEVEL_SEGMENTS[level];
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1 w-5 rounded-full"
            style={{
              backgroundColor: i < filled ? color : "rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>
      <span className="w-[4.5rem] text-xs text-neutral-400">{level}</span>
    </div>
  );
}

/* ============================================================
   Row
   ============================================================ */
function TechRow({
  tech,
  isActive,
  onToggle,
  reduceMotion,
}: {
  tech: Tech;
  isActive: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  return (
    <li
      className="relative transition-colors duration-200 hover:bg-white/[0.025]"
      style={
        isActive
          ? {
              backgroundColor: `color-mix(in srgb, ${tech.color} 7%, transparent)`,
            }
          : undefined
      }
    >
      {/* Active marker */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-0.5 transition-opacity duration-200"
        style={{ backgroundColor: tech.color, opacity: isActive ? 1 : 0 }}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        className="flex w-full items-center gap-4 px-4 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-400/70 sm:px-5"
      >
        {/* Icon tile */}
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-xl transition-colors duration-200"
          style={{ color: isActive ? tech.color : "#a3a3a3" }}
        >
          {tech.icon}
        </span>

        {/* Name */}
        <span
          className={`flex-1 text-[15px] font-medium transition-colors duration-200 ${
            isActive ? "text-white" : "text-neutral-300"
          }`}
        >
          {tech.name}
        </span>

        {/* Years */}
        <span className="w-14 text-right text-sm tabular-nums text-neutral-400">
          {tech.years} {tech.years === 1 ? "yr" : "yrs"}
        </span>

        {/* Level (hidden on small screens) */}
        <span className="hidden sm:block">
          <LevelMeter level={tech.level} color={tech.color} />
        </span>
      </button>

      {/* Details — expands in response to the click */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-[4.5rem] pr-5 sm:pl-[4.75rem]">
              <p className="max-w-md text-sm leading-relaxed text-neutral-400">
                {tech.note}
              </p>
              <div className="mt-3 sm:hidden">
                <LevelMeter level={tech.level} color={tech.color} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ============================================================
   Section
   ============================================================ */
export function TechStack() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORIES[0].id
  );
  const [activeTech, setActiveTech] = useState<string | null>(
    CATEGORIES[0].techs[0].name
  );

  const category =
    CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  const selectCategory = (id: string) => {
    const next = CATEGORIES.find((c) => c.id === id);
    setActiveCategory(id);
    setActiveTech(next ? next.techs[0].name : null);
  };

  return (
    <section
      id="stack"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Left: heading + category tabs */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tech stack
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-400">
            The languages, frameworks and tools I use to design, build and ship
            production software.
          </p>

          <div
            role="tablist"
            aria-label="Technology categories"
            className="-mx-6 mt-10 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {CATEGORIES.map((c) => {
              const isCurrent = c.id === activeCategory;
              return (
                <button
                  key={c.id}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={isCurrent}
                  aria-controls={`panel-${c.id}`}
                  onClick={() => selectCategory(c.id)}
                  className={`shrink-0 rounded-xl border px-4 py-3 text-left outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-400/70 lg:w-full ${
                    isCurrent
                      ? "border-white/[0.12] bg-white/[0.05]"
                      : "border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-6">
                    <span
                      className={`text-[15px] font-medium ${
                        isCurrent ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      {c.title}
                    </span>
                    <span className="text-sm tabular-nums text-neutral-500">
                      {c.techs.length}
                    </span>
                  </span>
                  <span className="mt-1 hidden text-sm leading-snug text-neutral-500 lg:block">
                    {c.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: technology list */}
        <div
          role="tabpanel"
          id={`panel-${category.id}`}
          aria-labelledby={`tab-${category.id}`}
          className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={category.id}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.15 }}
              className="divide-y divide-white/[0.06]"
            >
              {category.techs.map((tech) => (
                <TechRow
                  key={tech.name}
                  tech={tech}
                  isActive={activeTech === tech.name}
                  reduceMotion={reduceMotion}
                  onToggle={() =>
                    setActiveTech((prev) =>
                      prev === tech.name ? null : tech.name
                    )
                  }
                />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
