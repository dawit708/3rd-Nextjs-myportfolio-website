"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { scrollToSection } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const terminalVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface TermLine {
  type: "command" | "output" | "success";
  prompt?: string;
  command?: string;
  output?: string;
}

const terminalLines: TermLine[] = [
  { type: "command", prompt: "➜  ~", command: "whoami" },
  { type: "output", output: "dawit.tsegei — full-stack developer" },
  { type: "command", prompt: "➜  ~", command: "cat stack.txt" },
  {
    type: "output",
    output:
      "TypeScript.js · React.js · Next.js · Node.js · Express · PostgreSQL",
  },
  { type: "command", prompt: "➜  ~", command: "./status --experience" },
  { type: "output", output: "3+ years · production systems · MERN" },
  { type: "command", prompt: "➜  ~", command: "./availability.sh" },
  { type: "success", output: "● open to new opportunities" },
];

export const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => typeLine(0), 800);
    return () => clearTimeout(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typeLine = (index: number) => {
    if (index >= terminalLines.length) {
      setDone(true);
      return;
    }
    const line = terminalLines[index];

    if (line.type === "command" && line.command) {
      let i = 0;
      const iv = setInterval(() => {
        if (i <= line.command!.length) {
          setCurrentText(line.command!.slice(0, i));
          i++;
        } else {
          clearInterval(iv);
          setTimeout(() => {
            setVisibleLines(index + 1);
            setCurrentText("");
            typeLine(index + 1);
          }, 350);
        }
      }, 55);
    } else {
      setTimeout(() => {
        setVisibleLines(index + 1);
        typeLine(index + 1);
      }, 300);
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-screen relative z-10"
    >
      {/* ===== LEFT CONTENT ===== */}
      <motion.div
        className="flex-1 space-y-6 lg:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hello badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-lg shadow-indigo-500/10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          <span className="text-lg font-semibold text-[var(--foreground)] tracking-wide">
            Hello, I'm
          </span>
        </motion.div>

        {/* Animated gradient name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Dawit Tsegie
          </span>
        </motion.h1>

        {/* Animated role text */}
        <motion.div variants={itemVariants}>
          <AnimatedText />
        </motion.div>

        {/* Currently working on */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Currently building a Flutter app for local businesses
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 max-w-xl leading-relaxed"
        >
          I turn ambitious ideas into thoughtful digital products — from the
          first interface to the last API.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              View Projects <ArrowUpRight size={18} />
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/CV.pdf"
              download="Dawit_Tsegie_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-[var(--card)] text-white border border-[var(--border)] hover:bg-[var(--background)] transition-colors cursor-pointer"
            >
              Download CV <Download size={18} />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 pt-4 text-gray-500"
        >
          <a
            href="https://github.com/dawit708"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            <FaGithub size={24} />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors cursor-pointer">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors cursor-pointer">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors cursor-pointer">
            <FaDribbble size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* ===== RIGHT: TERMINAL WINDOW ===== */}
      <motion.div
        className="flex-1 w-full max-w-xl relative"
        variants={terminalVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative bg-[#0d0d16]/85 backdrop-blur-md border border-[#1f2937] rounded-lg overflow-hidden shadow-2xl shadow-indigo-500/20">
          {/* Terminal top bar */}
          <div className="flex items-center px-4 py-3 bg-[#0a0a12]/90 border-b border-[#1f2937]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-gray-400 tracking-wide">
              dawit@dev: ~/portfolio — zsh
            </div>
            <div className="w-14" />
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-6 font-mono text-xs md:text-sm leading-relaxed min-h-[340px]">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <TerminalLine key={i} line={line} />
            ))}

            {/* Currently typing */}
            {!done && visibleLines < terminalLines.length && (
              <div className="flex items-start gap-2 mt-2">
                <span className="text-emerald-400 font-bold flex-shrink-0">➜</span>
                <span className="text-cyan-400 font-bold flex-shrink-0">~</span>
                <span className="text-white">
                  {currentText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-amber-300 ml-0.5 align-middle"
                  />
                </span>
              </div>
            )}

            {/* Final blinking cursor */}
            {done && (
              <div className="flex items-start gap-2 mt-2">
                <span className="text-emerald-400 font-bold flex-shrink-0">➜</span>
                <span className="text-cyan-400 font-bold flex-shrink-0">~</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-amber-300 ml-0.5"
                />
              </div>
            )}
          </div>
        </div>

        {/* Tagline below terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-4 font-mono text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase"
        >
          live shell — types on load, blinks forever
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ===== Individual terminal line ===== */
const TerminalLine = ({ line }: { line: TermLine }) => {
  if (line.type === "command") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-start gap-2 mt-3 first:mt-0"
      >
        <span className="text-emerald-400 font-bold flex-shrink-0">➜</span>
        <span className="text-cyan-400 font-bold flex-shrink-0">~</span>
        <span className="text-white">{line.command}</span>
      </motion.div>
    );
  }

  if (line.type === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-start gap-2 mt-1 pl-6"
      >
        <span className="text-emerald-400 font-bold">{line.output}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="text-gray-300 mt-1 pl-6 whitespace-pre-wrap"
    >
      {line.output}
    </motion.div>
  );
};