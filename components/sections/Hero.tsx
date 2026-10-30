"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

/* ============================================================
   Constants
   ============================================================ */
const EASE = [0.22, 1, 0.36, 1] as const;

type Role = { text: string; gradient: string };

const ROLES: Role[] = [
  {
    text: "Full-stack Engineer",
    gradient: "from-indigo-400 via-purple-400 to-pink-400",
  },
  {
    text: "TypeScript Specialist",
    gradient: "from-sky-400 via-blue-400 to-indigo-400",
  },
  {
    text: "Product-minded Developer",
    gradient: "from-amber-300 via-orange-400 to-rose-400",
  },
];

type TerminalEntry = {
  prompt: string;
  command: string;
  output: React.ReactNode;
  tone?: "success";
};

const TERMINAL: TerminalEntry[] = [
  {
    prompt: "~/dawit",
    command: "whoami",
    output: (
      <span>
        <span className="text-white">Dawit Tsegie</span>
        <span className="text-neutral-600"> · </span>
        <span className="text-neutral-400">Full-stack Engineer</span>
      </span>
    ),
  },
  {
    prompt: "~/dawit",
    command: "cat ~/.stack",
    output: (
      <div className="space-y-0.5">
        <div>
          <span className="text-indigo-300">frontend</span>
          <span className="text-neutral-600">: </span>
          <span className="text-neutral-400">
            TypeScript · React · Next.js · Tailwind
          </span>
        </div>
        <div>
          <span className="text-indigo-300">backend </span>
          <span className="text-neutral-600">: </span>
          <span className="text-neutral-400">
            Node · Express · PostgreSQL · MongoDB
          </span>
        </div>
        <div>
          <span className="text-indigo-300">tooling </span>
          <span className="text-neutral-600">: </span>
          <span className="text-neutral-400">Docker · Git · Figma</span>
        </div>
      </div>
    ),
  },
  {
    prompt: "~/dawit",
    command: "git log --oneline -3",
    output: (
      <div className="space-y-0.5">
        <div>
          <span className="text-amber-300/90">9f3a2c1</span>
          <span className="ml-2 text-neutral-500">feat(ai):</span>
          <span className="ml-1.5 text-neutral-400">streaming Gemini chat</span>
        </div>
        <div>
          <span className="text-amber-300/90">8e1b7f4</span>
          <span className="ml-2 text-neutral-500">perf:</span>
          <span className="ml-1.5 text-neutral-400">
            42% LCP reduction via image pipeline
          </span>
        </div>
        <div>
          <span className="text-amber-300/90">7d2c9a8</span>
          <span className="ml-2 text-neutral-500">refactor:</span>
          <span className="ml-1.5 text-neutral-400">
            PHP monolith → Next.js App Router
          </span>
        </div>
      </div>
    ),
  },
  {
    prompt: "~/dawit",
    command: "./availability",
    output: "● Available for new work — remote-first",
    tone: "success",
  },
];

/* ============================================================
   Motion variants
   ============================================================ */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ============================================================
   Hooks
   ============================================================ */
function useTypewriter(enabled: boolean) {
  const [state, setState] = useState({
    entryIndex: enabled ? 0 : TERMINAL.length,
    charIndex: 0,
    phase: (enabled ? "typing" : "done") as "typing" | "output" | "done",
  });

  useEffect(() => {
    if (!enabled || state.phase === "done") return;
    const entry = TERMINAL[state.entryIndex];
    if (!entry) {
      setState((s) => ({ ...s, phase: "done" }));
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    if (state.phase === "typing") {
      if (state.charIndex < entry.command.length) {
        timer = setTimeout(
          () => setState((s) => ({ ...s, charIndex: s.charIndex + 1 })),
          40
        );
      } else {
        timer = setTimeout(
          () => setState((s) => ({ ...s, phase: "output" })),
          220
        );
      }
    } else if (state.phase === "output") {
      timer = setTimeout(() => {
        if (state.entryIndex + 1 < TERMINAL.length) {
          setState((s) => ({
            entryIndex: s.entryIndex + 1,
            charIndex: 0,
            phase: "typing",
          }));
        } else {
          setState((s) => ({
            entryIndex: TERMINAL.length,
            charIndex: 0,
            phase: "done",
          }));
        }
      }, 380);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [enabled, state]);

  return state;
}

/* ============================================================
   Rotating role — bigger, blinking, unique gradient per role
   ============================================================ */
function RotatingRole() {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 3600);
    return () => clearInterval(id);
  }, [prefersReduced]);

  const role = ROLES[index];

  return (
    <div className="flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: EASE }}
          className={`inline-block whitespace-nowrap bg-gradient-to-r ${role.gradient} bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl lg:text-4xl`}
        >
          {role.text}
        </motion.span>
      </AnimatePresence>

      {/* Blinking cursor */}
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block h-6 w-[3px] rounded-sm bg-indigo-400 sm:h-7 lg:h-9"
      />
    </div>
  );
}

/* ============================================================
   Magnetic button
   ============================================================ */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.18,
      y: (e.clientY - rect.top - rect.height / 2) * 0.18,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   Terminal
   ============================================================ */
function TerminalRow({
  entry,
  command,
  showOutput,
}: {
  entry: TerminalEntry;
  command: string;
  showOutput: boolean;
}) {
  const isSuccess = entry.tone === "success";
  return (
    <div className="mt-3 first:mt-0">
      <div className="flex items-start gap-2 font-mono text-[13px] leading-relaxed">
        <span className="shrink-0 text-emerald-400">➜</span>
        <span className="shrink-0 text-indigo-300">{entry.prompt}</span>
        <span className="text-white">{command}</span>
      </div>
      {showOutput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className={`mt-1 pl-6 font-mono text-[13px] leading-relaxed ${
            isSuccess ? "text-emerald-400" : ""
          }`}
        >
          {entry.output}
        </motion.div>
      )}
    </div>
  );
}

function TerminalWindow() {
  const prefersReduced = useReducedMotion();
  const { entryIndex, charIndex, phase } = useTypewriter(!prefersReduced);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-indigo-500/[0.08] blur-3xl"
      />
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a12]/95 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
          </div>
          <span className="font-mono text-[11px] tracking-wide text-neutral-500">
            dawit@portfolio — zsh
          </span>
          <span className="w-12" />
        </div>
        <div className="min-h-[320px] p-5 sm:p-6">
          {TERMINAL.slice(0, entryIndex).map((entry, i) => (
            <TerminalRow
              key={i}
              entry={entry}
              command={entry.command}
              showOutput
            />
          ))}
          {phase !== "done" && TERMINAL[entryIndex] && (
            <TerminalRow
              entry={TERMINAL[entryIndex]}
              command={TERMINAL[entryIndex].command.slice(0, charIndex)}
              showOutput={phase === "output"}
            />
          )}
          <div className="mt-3 flex items-center gap-2 font-mono text-[13px]">
            <span className="text-emerald-400">➜</span>
            <span className="text-indigo-300">~/dawit</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block h-4 w-2 bg-neutral-400"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Hero
   ============================================================ */
export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-16 px-6 pb-20 pt-32 lg:flex-row lg:items-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[120px]"
      />

      {/* ===== LEFT ===== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6"
      >
        {/* Name — reduced size */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Dawit Tsegie
          </span>
        </motion.h1>

        {/* Rotating role — bigger, colorful, blinking */}
        <motion.div variants={itemVariants}>
          <RotatingRole />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg"
        >
          Full-stack engineer building production web applications end to end 
          from data models and APIs to polished interfaces. Currently focused on
          TypeScript and AI-integrated products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-100"
            >
              View Work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/CV.pdf"
              download="Dawit_Tsegie_CV.pdf"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-white/[0.2] hover:bg-white/[0.04] hover:text-white"
            >
              Résumé
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Socials + location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-5 pt-4"
        >
          <a
            href="https://github.com/dawit708"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#"
            aria-label="X / Twitter"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <FaXTwitter size={18} />
          </a>
          <span className="h-3 w-px bg-white/[0.08]" />
          <span className="font-mono text-[11px] tracking-wide text-neutral-600">
            Addis Ababa · Remote-first
          </span>
        </motion.div>
      </motion.div>

      {/* ===== RIGHT: Terminal ===== */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="w-full flex-1 lg:max-w-xl"
      >
        <TerminalWindow />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}