"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Quote,
} from "lucide-react";

const experienceData = [
  {
    year: "2025 — Present",
    role: "Full-Stack Developer",
    company: "Freelance & Independent Practice",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Built and deployed 12+ production web applications using React, Next.js, and TypeScript.",
      "Designed REST APIs, relational data models, and automated CI/CD deployment workflows.",
      "Collaborated with local businesses and founders on product discovery and delivery.",
    ],
  },
  {
    year: "2026",
    role: "Full-Stack Developer (Contract)",
    company: "Dejene Animal Clinic",
    location: "Remote · Contract",
    points: [
      "Delivered a full production website for a veterinary clinic, launched live on Vercel.",
      "Implemented 24/7 emergency response system, service catalog, and appointment booking.",
      "Achieved 100% client satisfaction and live deployment within project timeline.",
    ],
  },
  {
    year: "2024",
    role: "Frontend Developer",
    company: "Open Source & Self-Taught Projects",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Developed 20+ GitHub projects including Netflix Clone, YouTube Clone, Weather App, and Snake Game.",
      "Mastered modern tooling: Vite, Tailwind CSS, Framer Motion, and REST API integration.",
      "Collaborated with other developers through GitHub pull requests and code reviews.",
    ],
  },
  {
    year: "2026",
    role: "Junior Web Developer",
    company: "Personal & Academic Projects",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Built responsive marketing sites and content management integrations for local clients.",
      "Completed hands-on training in HTML, CSS, JavaScript, PHP, and MySQL.",
      "Learned software fundamentals through self-paced learning and structured testing.",
    ],
  },
];

const educationData = [
  {
    icon: <GraduationCap size={22} />,
    title: "Bsc, Software Engineering",
    institution: "Injibara University",
    year: "2022 — Present",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Award size={22} />,
    title: "Full-Stack Web Development",
    institution: "Evangadi Bootcamp & Online Training",
    year: "2023 · Professional Certification",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Cloud Architecture Foundations",
    institution: "Professional Learning Program",
    year: "2024 · Certification",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Flutter Mobile Development",
    institution: "Self-Paced Learning & Projects",
    year: "2025 · Ongoing",
    gradient: "from-purple-500 to-pink-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const Journey = () => {
  return (
    <section id="resume" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      {/* CENTERED HEADER */}
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
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          04 / The Journey So Far
        </motion.span>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            The Journey So Far
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
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Experience grounded in building, learning, and collaboration.
        </motion.p>

        <motion.a
          href="/cv.pdf"
          download="Dawit_Tsegie_CV.pdf"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 cursor-pointer"
        >
          Download Resume <Download size={18} />
        </motion.a>
      </motion.div>

      {/* TWO COLUMNS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: EXPERIENCE */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-2 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-600" />
            Experience
          </motion.h3>

          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-[var(--border)] group"
              >
                <motion.span
                  className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[var(--background)] shadow-lg shadow-indigo-500/50"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                />

                <span className="inline-block text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-3">
                  {job.year}
                </span>

                <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {job.role}
                </h4>

                <p className="text-sm text-gray-400 mb-1">
                  {job.company} <span className="text-gray-600">·</span>{" "}
                  {job.location}
                </p>

                <ul className="space-y-2 mt-4">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 leading-relaxed text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: EDUCATION & QUOTE */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-2 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-teal-600" />
            Education & Certifications
          </motion.h3>

          <motion.div
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-indigo-500/50 transition-colors duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                  >
                    {edu.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-xs text-gray-600 tracking-wider uppercase">
                      {edu.year}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${edu.gradient} transition-all duration-500`}
                />
              </motion.div>
            ))}

            {/* QUOTE CARD */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 mt-6 overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-indigo-500/20">
                <Quote size={60} />
              </div>

              <p className="relative text-lg md:text-xl text-white font-medium italic leading-relaxed mb-4">
                "The best code makes room for the people who use it."
              </p>
              <div className="relative flex items-center gap-2">
                <span className="w-6 h-px bg-gradient-to-r from-indigo-500 to-purple-500" />
                <p className="text-gray-400 text-sm tracking-wider uppercase">
                  A guiding principle
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};