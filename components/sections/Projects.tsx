"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

// ====== YOUR 12 PROJECTS ======
const projectsData = [
  {
    category: "Full-Stack · MERN",
    title: "Animal Health Management",
    description: "Full-stack animal healthcare system with patient records, appointments, and inventory.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png",
    stackLabel: "MERN Stack",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "from-emerald-600 to-green-900",
    githubLink: "https://github.com/dawit708/fullstack-for-animal-clinical-managemnt-systems-for-backend-and-frontend.git",
    demoLink: "#",
  },
  {
    category: "Full-Stack · MERN",
    title: "Hospital Management System",
    description: "Comprehensive hospital system with patient admission, doctor scheduling, and billing.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png",
    stackLabel: "MERN Stack",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "from-teal-500 to-cyan-800",
    githubLink: "https://github.com/dawit708/clinical-management-system-for-backend-with-frontend.git",
    demoLink: "#",
  },
   {
    category: "Full-Stack · MERN",
    title: "student portal management system",
    description: "Comprehensive student portal system with course registration, grade tracking, and communication.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png",
    stackLabel: "MERN Stack",
    tags: ["MongoDB", "Express", "Next.js", "Nest.js"],
    gradient: "from-teal-500 to-cyan-800",
    githubLink: "https://github.com/dawit708/type-script-project-for-Student-Enrollement.git",
    demoLink: "#",
  },
  {
    category: "Web App · Next.js",
    title: "E-Commerce Website",
    description: "Production-ready e-commerce platform with product catalog, cart, and checkout.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    stackLabel: "Next.js",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-green-600 to-emerald-800",
    githubLink: "https://github.com/dawit708/Ecommerce-website-in-Next.js-app.git",
    demoLink: "#",
  },
  {
    category: "Web App · Clone",
    title: "Netflix Clone",
    description: "Netflix clone with movie browsing, video playback, and user authentication.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    stackLabel: "React",
    tags: ["React", "Firebase", "TMDB"],
    gradient: "from-emerald-600 to-green-900",
    githubLink: "https://github.com/dawit708/netflix-clone-project",
    demoLink: "#",
  },
  {
    category: "Web App · Clone",
    title: "YouTube Clone",
    description: "YouTube clone with video search, playback, channel pages, and responsive layout.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    stackLabel: "React",
    tags: ["React", "YouTube API", "MUI"],
    gradient: "from-green-500 to-emerald-700",
    githubLink: "https://github.com/dawit708/youtube-clone-website",
    demoLink: "https://eclectic-cocada-c9ea57.netlify.app",
  },
  {
    category: "Web App · API",
    title: "Weather Forecast",
    description: "Real-time weather forecasts with search, 7-day predictions, and beautiful UI.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    stackLabel: "React",
    tags: ["React", "OpenWeather API"],
    gradient: "from-teal-500 to-cyan-700",
    githubLink: "https://github.com/dawit708/Weather-Forecast-in-React.js",
    demoLink: "#",
  },
  {
    category: "Full-Stack · Form",
    title: "Evangadi Form Actions",
    description: "Complete backend form handling with validation, submission, and data persistence.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    stackLabel: "Node.js",
    tags: ["Node.js", "Express", "MongoDB"],
    gradient: "from-emerald-500 to-green-700",
    githubLink: "https://github.com/dawit708/Evangadi-backend-Form-action",
    demoLink: "#",
  },
  {
    category: "Desktop · JavaFX",
    title: "Enterprise Resource Planning",
    description: "ERP system built with JavaFX for managing employee registrations and business.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    stackLabel: "Java",
    tags: ["Java", "JavaFX", "MySQL"],
    gradient: "from-lime-500 to-green-700",
    githubLink: "https://github.com/dawit708/employee-registrations-systems-in-javafx",
    demoLink: "#",
  },
  {
    category: "Full-Stack · PHP",
    title: "Employee Management",
    description: "Complete HR system for employee registration, attendance, and payroll management.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    stackLabel: "PHP",
    tags: ["PHP", "MySQL", "Bootstrap"],
    gradient: "from-green-600 to-teal-800",
    githubLink: "https://github.com/dawit708/fullsatack-project-for-Employee-mangment-systems",
    demoLink: "#",
  },

  {
    category: "Game · React",
    title: "Snake Game",
    description: "Classic Snake Game with modern graphics, score tracking, and difficulty levels.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    stackLabel: "JavaScript",
    tags: ["React", "Canvas", "Game Logic"],
    gradient: "from-green-500 to-emerald-700",
    githubLink: "https://github.com/dawit708/LAST-GAME-PROJECT-IN-REACT.JS",
    demoLink: "https://effervescent-crisp-7a0e6.netlify.app/",
  },
  {
    category: "UI Clone · React",
    title: "Apple Website Replica",
    description: "Faithful recreation of the Apple.com homepage with smooth scrolling.",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000",
    stackImage: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    stackLabel: "Next.js",
    tags: ["React", "Tailwind"],
    gradient: "from-teal-500 to-emerald-800",
    githubLink: "https://github.com/dawit708/API-key-for-apple-website.git",
    demoLink: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <motion.span
          className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="w-6 h-px bg-indigo-500" />
          Selected Work
          <span className="w-6 h-px bg-indigo-500" />
        </motion.span>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-white via-emerald-200 to-green-300 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 mx-auto rounded-full mb-6"
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
          {projectsData.length} projects — from full-stack systems to production-ready apps.{" "}
          <span className="text-amber-300 font-mono text-sm">// hover to explore</span>
        </motion.p>
      </motion.div>

      {/* ===== PROJECTS GRID: 3 columns × 4 rows ===== */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            category={project.category}
            title={project.title}
            description={project.description}
            image={project.image}
            stackImage={project.stackImage}
            stackLabel={project.stackLabel}
            tags={project.tags}
            gradient={project.gradient}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </motion.div>

      {/* ===== Bottom hint ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-12 font-mono text-xs text-gray-600 tracking-widest uppercase"
      >
        — click any card for source code —
      </motion.p>
    </section>
  );
};