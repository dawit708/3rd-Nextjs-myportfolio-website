"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* ============================================================
   Types
   ============================================================ */
type Category = "All" | "Full Stack" | "Frontend" | "AI" | "Backend" | "Games";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
  year: string;
  category: Exclude<Category, "All">;
  featured?: boolean;
}

/* ============================================================
   Data — same 14 projects, now categorised + 3 featured
   ============================================================ */
const projectsData: Project[] = [
  {
    title: "Gemini AI Clone",
    description:
      "Full-stack AI chat app with streaming responses, multimodal uploads, Imagen 3, JWT auth, and a custom tier/usage limiter.",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1200&auto=format&fit=crop",
    tags: ["React.js", "Express.js", "MySQL", "Gemini API", "Tailwind", "JWT"],
    githubLink: "https://github.com/dawit708/Gimini-clone-app.git",
    demoLink: "#",
    year: "2026",
    category: "AI",
    featured: true,
  },
  {
    title: "Animal Health Management",
    description:
      "MERN veterinary platform with RBAC, real-time scheduling, and an intuitive medical-supplies inventory system.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/dawit708/fullstack-for-animal-clinical-managemnt-systems-for-backend-and-frontend.git",
    demoLink: "#",
    year: "2026",
    category: "Full Stack",
  },
  {
    title: "Hospital Management System",
    description:
      "Enterprise hospital administration with secure patient data, automated billing, and indexed doctor scheduling.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/dawit708/clinical-management-system-for-backend-with-frontend.git",
    demoLink: "#",
    year: "2024",
    category: "Full Stack",
  },
  {
    title: "Student Portal",
    description:
      "Next.js + Nest.js academic portal with JWT auth, course enrollment, and real-time grade tracking.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Next.js", "Nest.js", "TypeScript"],
    githubLink: "https://github.com/dawit708/type-script-project-for-Student-Enrollement.git",
    demoLink: "#",
    year: "2026",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "E-Commerce Website",
    description:
      "Production digital storefront on the Next.js App Router with Redux Toolkit and secure payment integration.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind", "Redux"],
    githubLink: "https://github.com/dawit708/Ecommerce-website-in-Next.js-app.git",
    demoLink: "#",
    year: "2025",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Enterprise Resource Planning",
    description:
      "JavaFX desktop ERP handling complex employee registration, payroll generation, and MySQL sync.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Java", "JavaFX", "MySQL"],
    githubLink: "https://github.com/dawit708/employee-registrations-systems-in-javafx",
    demoLink: "#",
    year: "2025",
    category: "Full Stack",
  },
  {
    title: "Employee Management",
    description:
      "PHP & MySQL HR portal with secure sessions, full CRUD, and automated payroll reporting.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/dawit708/fullsatack-project-for-Employee-mangment-systems",
    demoLink: "#",
    year: "2025",
    category: "Full Stack",
  },
  {
    title: "Evangadi Form Actions",
    description:
      "Full-stack form engine with rate-limiting middleware, Joi validation, and encrypted Mongo persistence.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/dawit708/Evangadi-backend-Form-action",
    demoLink: "#",
    year: "2024",
    category: "Backend",
  },
  {
    title: "Netflix Clone",
    description:
      "Streaming platform clone with TMDB playback, Firebase OAuth, and responsive skeleton states.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Firebase", "TMDB", "Tailwind"],
    githubLink: "https://github.com/dawit708/netflix-clone-project",
    demoLink: "#",
    year: "2025",
    category: "Frontend",
  },
  {
    title: "YouTube Clone",
    description:
      "Video-sharing UI with React Query infinite scroll, lazy components, and YouTube Data API v3.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "YouTube API", "MUI"],
    githubLink: "https://github.com/dawit708/youtube-clone-website",
    demoLink: "https://eclectic-cocada-c9ea57.netlify.app",
    year: "2025",
    category: "Frontend",
  },
  {
    title: "Apple Website Replica",
    description:
      "High-fidelity Apple.com clone focused on advanced CSS Grid and scroll-triggered motion.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind", "Framer Motion"],
    githubLink: "https://github.com/dawit708/API-key-for-apple-website.git",
    demoLink: "#",
    year: "2024",
    category: "Frontend",
  },
  {
    title: "Weather Forecast",
    description:
      "Geolocation-based dashboard pulling live OpenWeather data with a 7-day predictive UI.",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "OpenWeather API", "Tailwind"],
    githubLink: "https://github.com/dawit708/Weather-Forecast-in-React.js",
    demoLink: "#",
    year: "2025",
    category: "Frontend",
  },
  {
    title: "Snake Game",
    description:
      "Classic arcade revival on HTML5 Canvas — 60fps animations, progressive difficulty, local high scores.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Canvas", "Game Logic"],
    githubLink: "https://github.com/dawit708/LAST-GAME-PROJECT-IN-REACT.JS",
    demoLink: "https://effervescent-crisp-7a0e6.netlify.app/",
    year: "2024",
    category: "Games",
  },
];

const CATEGORIES: Category[] = ["All", "Full Stack", "Frontend", "AI", "Backend", "Games"];

/* ============================================================
   Motion
   ============================================================ */
const EASE = [0.22, 1, 0.36, 1] as const;

const listContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

/* ============================================================
   Sub-components
   ============================================================ */
function FilterPills({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-center gap-2">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`relative rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors ${
              isActive
                ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
                : "border-white/[0.06] text-neutral-500 hover:border-white/[0.12] hover:text-neutral-300"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-1.5 text-[10px] opacity-60">
                {projectsData.filter((p) => p.category === cat).length}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------
   Desktop: single list item
   ------------------------------------------------------------ */
function ProjectListItem({
  project,
  index,
  isActive,
  onActivate,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.button
      type="button"
      variants={listItem}
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      aria-current={isActive ? "true" : undefined}
      className={`group relative flex w-full flex-col gap-1.5 border-b border-white/[0.06] px-5 py-5 text-left transition-colors ${
        isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.015]"
      }`}
    >
      {/* Active indicator bar */}
      <span
        className={`absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-400 to-purple-500 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-[11px] tracking-wider transition-colors ${
            isActive ? "text-indigo-400" : "text-neutral-600"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[11px] tracking-wider text-neutral-600">
          {project.year}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <h3
          className={`text-xl font-semibold transition-all duration-300 sm:text-2xl ${
            isActive
              ? "translate-x-1 text-white"
              : "text-neutral-400 group-hover:text-neutral-200"
          }`}
        >
          {project.title}
        </h3>
        {project.featured && (
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-indigo-300">
            Featured
          </span>
        )}
        <ArrowUpRight
          size={14}
          className={`shrink-0 text-indigo-400 transition-all duration-300 ${
            isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
          }`}
        />
      </div>

      <div
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] tracking-wide transition-colors ${
          isActive ? "text-neutral-500" : "text-neutral-700"
        }`}
      >
        {project.tags.map((tag, i) => (
          <React.Fragment key={tag}>
            <span>{tag}</span>
            {i < project.tags.length - 1 && <span className="text-neutral-800">·</span>}
          </React.Fragment>
        ))}
      </div>
    </motion.button>
  );
}

/* ------------------------------------------------------------
   Desktop: sticky preview
   ------------------------------------------------------------ */
function ProjectPreview({ project, index }: { project: Project; index: number }) {
  return (
    <div className="sticky top-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: EASE }}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-[300px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-4 font-mono text-[11px] tracking-[0.2em] text-white/70">
              {String(index + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
            </div>
            <div className="absolute bottom-3 right-4 font-mono text-[11px] tracking-[0.2em] text-white/70">
              {project.year}
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold leading-tight text-white">
                {project.title}
              </h3>
              <div className="flex shrink-0 gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Source for ${project.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-neutral-400 transition-colors hover:border-white/[0.16] hover:text-white"
                >
                  <FaGithub size={14} />
                </a>
                {project.demoLink !== "#" && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-neutral-400 transition-colors hover:border-indigo-500/40 hover:text-indigo-300"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-indigo-500/20 bg-indigo-500/[0.06] px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------
   Mobile: clean card
   ------------------------------------------------------------ */
function MobileCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-52 w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest text-white/70">
          {String(index + 1).padStart(2, "0")} — {project.year}
        </div>
        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full border border-indigo-400/40 bg-indigo-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-indigo-200 backdrop-blur">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-indigo-500/20 bg-indigo-500/[0.06] px-2 py-0.5 font-mono text-[10px] text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.demoLink !== "#" && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-white py-2.5 text-xs font-bold tracking-wide text-black transition-opacity hover:opacity-90"
            >
              <ArrowUpRight size={13} /> Live Demo
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] py-2.5 text-xs font-bold tracking-wide text-neutral-300 transition-colors hover:border-white/[0.16] hover:text-white"
          >
            <FaGithub size={13} /> Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
   Main
   ============================================================ */
export function Projects() {
  const prefersReduced = useReducedMotion();
  const [category, setCategory] = useState<Category>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(
    () =>
      category === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === category),
    [category]
  );

  const safeIndex = Math.min(activeIndex, filtered.length - 1);
  const activeProject = filtered[safeIndex];

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/[0.06] blur-[120px]"
      />

      {/* Header */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-14 max-w-2xl"
      >
        <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-400">
          <span className="h-px w-8 bg-indigo-400/50" />
          Selected Work
        </div>

        <h2 className="mb-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
          Production apps, AI experiments, and interactive experiences — built end to end.
        </p>
      </motion.div>

      {/* Filters */}
      <FilterPills
        active={category}
        onChange={(c) => {
          setCategory(c);
          setActiveIndex(0);
        }}
      />

      {/* ============ DESKTOP ============ */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={listContainer}
          className="border-t border-white/[0.06]"
        >
          {filtered.map((project, i) => (
            <ProjectListItem
              key={project.title}
              project={project}
              index={i}
              isActive={i === safeIndex}
              onActivate={() => setActiveIndex(i)}
            />
          ))}
        </motion.div>

        {/* Sticky preview */}
        <div className="group">
          <ProjectPreview
            project={activeProject}
            index={safeIndex}
          />
        </div>
      </div>

      {/* ============ MOBILE ============ */}
      <div className="flex flex-col gap-6 lg:hidden">
        {filtered.map((project, i) => (
          <MobileCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}