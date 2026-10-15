"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  stackImage: string;
  stackLabel: string;
  tags: string[];
  gradient: string;
  githubLink: string;
  demoLink?: string;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  image,
  stackImage,
  stackLabel,
  tags,
  gradient,
  githubLink,
  demoLink = "#",
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-[#0d0d16] border border-[#1f2937] transition-all duration-500 hover:border-amber-300/40 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
    >
      {/* ===== TOP: Project Screenshot ===== */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111116]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* FULL CARD GRADIENT OVERLAY ON HOVER */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
        />

        {/* Subtle dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* ===== BOTTOM: Tech Stack Icon (smaller, centered) ===== */}
      <div className="relative h-24 md:h-28 overflow-hidden bg-[#0a0a12] flex items-center justify-center">
        <img
          src={stackImage}
          alt={stackLabel}
          loading="lazy"
          className="h-14 md:h-16 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
        />

        {/* FULL CARD GRADIENT OVERLAY ON HOVER */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
        />
      </div>

      {/* ===== CATEGORY BADGE (top-left) ===== */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 z-20 transition-opacity duration-300 group-hover:opacity-0">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/90">
          {category}
        </span>
      </div>

      {/* ===== HOVER CONTENT (covers entire card) ===== */}
      <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto flex flex-col justify-center items-center text-center p-6">
        {/* Category (top of overlay) */}
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/80 mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-white font-bold text-xl leading-tight mb-3 drop-shadow-lg">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-white/40 rounded-full mb-4" />

        {/* Description */}
        <p className="text-white/95 text-xs leading-relaxed mb-5 max-w-[90%] drop-shadow-md">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-6">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {demoLink !== "#" && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-white text-black text-xs font-bold rounded-lg px-4 py-2 hover:bg-white/90 transition-colors cursor-pointer shadow-lg"
            >
              Live Demo
              <ArrowUpRight size={12} />
            </a>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-lg px-4 py-2 hover:bg-black/80 transition-colors cursor-pointer shadow-lg"
          >
            <FaGithub size={12} />
            GitHub
          </a>
        </div>
      </div>

      {/* ===== Corner accent ===== */}
      <div
        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40`}
      />
    </motion.div>
  );
};