"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// ====== YOUR PROJECTS ======
const projectsData = [
  {
    title: "Animal Health Management",
    description: "A robust MERN-stack veterinary management platform. Engineered with Role-Based Access Control (RBAC), real-time appointment scheduling, and an intuitive inventory system for medical supplies.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/dawit708/fullstack-for-animal-clinical-managemnt-systems-for-backend-and-frontend.git",
    demoLink: "#",
    year: "2026",
  },
  {
    title: "Hospital Management System",
    description: "An enterprise-grade hospital administration system. Features secure patient data handling, automated billing workflows, and dynamic doctor scheduling with optimized MongoDB indexing.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/dawit708/clinical-management-system-for-backend-with-frontend.git",
    demoLink: "#",
    year: "2024",
  },
  {
    title: "Student Portal",
    description: "A modern academic management portal powered by Next.js and Nest.js. Implements secure JWT authentication, seamless course enrollment, and real-time grade tracking for faculty and students.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "Next.js", "Nest.js"],
    githubLink: "https://github.com/dawit708/type-script-project-for-Student-Enrollement.git",
    demoLink: "#",
    year: "2026",
  },
   {
    title: "Employee Management",
    description: "A classic PHP & MySQL HR management portal. Features secure session management, comprehensive CRUD operations for employee records, and automated payroll report generation.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/dawit708/fullsatack-project-for-Employee-mangment-systems",
    demoLink: "#",
    year: "2025",
  },
   {
    title: "Evangadi Form Actions",
    description: "A secure full-stack form submission engine. Implements Express middleware for rate-limiting, Joi schema validation for data integrity, and encrypted MongoDB data persistence.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/dawit708/Evangadi-backend-Form-action",
    demoLink: "#",
    year: "2024",
  },
    {
    title: "Gemini AI Clone",
    description: "A full-stack AI chat application replicating the Google Gemini experience. Built with React.js and Express.js, it features real-time streaming text responses, multimodal file uploads (images, audio, PDFs), AI image generation (Imagen 3), and audio/music generation. The backend includes secure JWT authentication, a MySQL database for persistent chat history, and a custom usage-limiter middleware to enforce subscription tiers and daily limits.",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1200&auto=format&fit=crop", // Modern AI abstract image
    tags: ["React.js", "Express.js", "MySQL", "Gemini API", "Tailwind CSS", "JWT"],
    githubLink: "https://github.com/dawit708/Gimini-clone-app.git",
    demoLink: "#",
    year: "2026",
  },
   {
    title: "Enterprise Resource Planning",
    description: "A comprehensive JavaFX desktop application for enterprise resource planning. Handles complex employee registrations, payroll generation, and MySQL database synchronization seamlessly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Java", "JavaFX", "MySQL"],
    githubLink: "https://github.com/dawit708/employee-registrations-systems-in-javafx",
    demoLink: "#",
    year: "2025",
  },
  {
    title: "E-Commerce Website",
    description: "A production-ready digital storefront utilizing the Next.js App Router. Integrates secure payment gateways, Redux Toolkit for persistent cart state, and Framer Motion for fluid interactions.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind", "Redux"],
    githubLink: "https://github.com/dawit708/Ecommerce-website-in-Next.js-app.git",
    demoLink: "#",
    year: "2025",
  },
  {
    title: "Netflix Clone",
    description: "A pixel-perfect streaming platform clone. Features dynamic video playback via the TMDB API, Firebase OAuth authentication, and a responsive grid layout with skeleton loading states.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Firebase", "TMDB", "Tailwind"],
    githubLink: "https://github.com/dawit708/netflix-clone-project",
    demoLink: "#",
    year: "2025",
  },
  {
    title: "YouTube Clone",
    description: "High-performance video sharing interface replicating YouTube's core UX. Leverages React Query for infinite scrolling, lazy-loaded components, and the YouTube Data API v3 for real-time search.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "YouTube API", "MUI"],
    githubLink: "https://github.com/dawit708/youtube-clone-website",
    demoLink: "https://eclectic-cocada-c9ea57.netlify.app",
    year: "2025",
  },
  {
    title: "Weather Forecast",
    description: "A sleek meteorological dashboard featuring geolocation-based forecasting. Fetches real-time data from the OpenWeather API with animated icons and a 7-day predictive UI.",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "OpenWeather API", "Tailwind"],
    githubLink: "https://github.com/dawit708/Weather-Forecast-in-React.js",
    demoLink: "#",
    year: "2025",
  },
 
 
 
  {
    title: "Snake Game",
    description: "A modern take on the classic arcade game. Built entirely with HTML5 Canvas and React hooks, featuring smooth 60fps animations, progressive difficulty scaling, and local high-score storage.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Canvas", "Game Logic"],
    githubLink: "https://github.com/dawit708/LAST-GAME-PROJECT-IN-REACT.JS",
    demoLink: "https://effervescent-crisp-7a0e6.netlify.app/",
    year: "2024",
  },
  {
    title: "Apple Website Replica",
    description: "A high-fidelity, fully responsive clone of the Apple.com homepage. Focuses on advanced CSS Grid layouts, scroll-triggered Framer Motion animations, and optimal asset delivery.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind", "Framer Motion"],
    githubLink: "https://github.com/dawit708/API-key-for-apple-website.git",
    demoLink: "#",
    year: "2024",
  },
];

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  return (
    // Using var(--background) for the main section background
    <section id="projects" className="min-h-screen relative z-10 py-24 px-6 md:px-12 font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-4">
            Hover or click to <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">inspect.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl">
            A showcase of my recent full-stack applications, UI clones, and interactive web experiences.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* ===== MOBILE VIEW (Standard Cards) ====================== */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-10 lg:hidden">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              // Using var(--card) and var(--border) for mobile cards
              className="flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-lg transition-colors duration-300"
            >
              {/* Image Mockup */}
              <div className="relative border-b border-[var(--border)]">
                <div className="h-8 bg-black/5 dark:bg-black/40 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover object-top" />
                <div className="absolute bottom-2 right-3 text-[10px] font-mono text-white/90 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                  fig. {String(index + 1).padStart(2, '0')} — {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 text-xs font-semibold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] py-3 rounded-lg text-sm font-bold hover:opacity-80 transition-opacity">
                      <ArrowUpRight size={16} /> LIVE DEMO
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-black/5 dark:bg-white/10 text-[var(--foreground)] py-3 rounded-lg text-sm font-bold hover:bg-black/10 dark:hover:bg-white/20 transition-colors border border-[var(--border)]">
                    <FaGithub size={16} /> SOURCE CODE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* ===== DESKTOP VIEW (Split Screen) ======================= */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-2 gap-16">
          
          {/* Left Side: List */}
          <div className="flex flex-col">
            {projectsData.map((project, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex flex-col gap-2 p-6 cursor-pointer transition-all duration-300 border-b border-[var(--border)] ${
                    isActive ? "opacity-100 bg-black/[0.02] dark:bg-white/[0.02]" : "opacity-40 hover:opacity-80"
                  }`}
                >
                  {/* Active Left Border Accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-amber-500 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />

                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono transition-colors ${isActive ? "text-amber-500" : "text-gray-500"}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-xs font-mono transition-colors ${isActive ? "text-gray-500 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}`}>
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <h3 className={`text-3xl font-bold transition-all duration-300 ${
                      isActive ? "text-[var(--foreground)] translate-x-2" : "text-gray-400 dark:text-gray-500 group-hover:text-[var(--foreground)]"
                    }`}>
                      {project.title}
                    </h3>
                    <div className={`w-8 h-8 rounded-full border border-amber-500 flex items-center justify-center transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                      <ArrowUpRight size={14} className="text-amber-500" />
                    </div>
                  </div>

                  <div className={`flex flex-wrap items-center gap-2 text-xs font-mono transition-all duration-300 ${
                    isActive ? "text-gray-500 dark:text-gray-400 translate-x-2" : "text-gray-400 dark:text-gray-600"
                  }`}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-2">
                        {tag} {i !== project.tags.length - 1 && <span className="text-gray-300 dark:text-gray-700">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Sticky Preview */}
          <div className="relative">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  {/* Image Mockup */}
                  <div className="relative rounded-t-xl overflow-hidden border border-[var(--border)] border-b-0 bg-[var(--card)] group transition-colors duration-300">
                    <div className="h-8 bg-black/5 dark:bg-black/40 flex items-center px-4 gap-2 relative z-10 border-b border-[var(--border)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      <div className="ml-4 text-[10px] font-mono text-gray-500 dark:text-gray-400">{activeProject.title.toLowerCase().replace(/\s+/g, '-')}.app</div>
                    </div>
                    
                    <div className="overflow-hidden">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-[340px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Dark gradient overlay for text visibility on image (always black regardless of theme) */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3 right-4 text-xs font-mono text-white/90 tracking-widest z-10">
                      fig. {String(activeIndex + 1).padStart(2, '0')} — {activeProject.year}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-0 border-x border-b border-[var(--border)] rounded-b-xl overflow-hidden mb-8 bg-[var(--card)] transition-colors duration-300">
                    {activeProject.demoLink !== "#" && (
                      <a
                        href={activeProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors py-3.5 text-xs font-bold font-mono tracking-widest text-[var(--foreground)] border-r border-[var(--border)]"
                      >
                        <ArrowUpRight size={14} /> LIVE PREVIEW
                      </a>
                    )}
                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors py-3.5 text-xs font-bold font-mono tracking-widest text-[var(--foreground)]"
                    >
                      <FaGithub size={14} /> VIEW SOURCE
                    </a>
                  </div>

                  {/* Description & Tags */}
                  <div>
                    <h3 className="text-4xl font-bold mb-4 text-[var(--foreground)] leading-tight">{activeProject.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {activeProject.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-1.5 bg-[#38bdf8]/10 text-[#0ea5e9] dark:text-[#38bdf8] border border-[#38bdf8]/30 font-semibold text-xs rounded-full tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};