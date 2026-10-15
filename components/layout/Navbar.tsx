"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, ArrowUpRight, Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export const Navbar = () => {
  const [isLight, setIsLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // ===== Track scroll, active section, and progress =====
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      setScrollProgress(scrolled);

      // Active section detection
      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "resume",
        "contact",
      ];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== Lock body scroll when mobile menu is open =====
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  // ===== Navigation Items =====
  const navItems = [
    { label: "Home", id: "home", type: "scroll" as const },
    { label: "About", id: "about", type: "scroll" as const },
    { label: "Services", id: "services", type: "scroll" as const },
    { label: "Projects", id: "projects", type: "scroll" as const },
    { label: "Resume", id: "resume", type: "scroll" as const },
    { label: "Blog", id: "/blog", type: "link" as const },
    { label: "Contact", id: "contact", type: "scroll" as const },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a12]/85 backdrop-blur-xl border-b border-[#1f2937] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* ===== Scroll Progress Bar ===== */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* ===== Logo ===== */}
                    {/* ===== Logo — Amber outlined style ===== */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 border-2 border-amber-500 flex items-center justify-center"
            >
              <span className="text-amber-500 font-bold text-sm tracking-wider font-mono">
                DT
              </span>
            </motion.div>
            <span className="text-white font-mono text-lg whitespace-nowrap group-hover:text-amber-300 transition-colors">
              dawit.tsgie
            </span>
          </Link>

          {/* ===== Desktop Nav Links ===== */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((item) => {
              const isActive = item.type === "scroll" && activeSection === item.id;

              if (item.type === "link") {
                return (
                  <Link
                    key={item.label}
                    href={item.id}
                    className="relative px-4 py-2 rounded-lg font-medium text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 rounded-lg bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-all duration-300" />
                  </Link>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Hover background */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-indigo-500/10"
                        : "bg-indigo-500/0 group-hover:bg-indigo-500/10"
                    }`}
                  />

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ===== Right Actions ===== */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-[var(--foreground)] hover:border-indigo-500/40 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isLight ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isLight ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Hire Me Button (Desktop only) */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center justify-center gap-2 h-10 px-5 text-sm rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 transition-all cursor-pointer group"
            >
              Hire Me
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-[var(--foreground)] transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Menu Overlay ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0a0a12] border-l border-[#1f2937] z-50 md:hidden overflow-y-auto flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#1f2937]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
                    dt.
                  </div>
                  <span className="text-white font-semibold">Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="p-6 space-y-1 flex-1">
                {navItems.map((item, index) => {
                  const isActive =
                    item.type === "scroll" && activeSection === item.id;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      {item.type === "link" ? (
                        <Link
                          href={item.id}
                          onClick={() => setMobileMenuOpen(false)}
                          className="group w-full flex items-center justify-between py-4 px-4 rounded-xl text-left hover:bg-indigo-500/10 transition-colors cursor-pointer"
                        >
                          <span className="text-lg font-medium text-[var(--foreground)] group-hover:text-indigo-300 transition-colors">
                            {item.label}
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                          />
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={`group w-full flex items-center justify-between py-4 px-4 rounded-xl text-left transition-colors cursor-pointer ${
                            isActive
                              ? "bg-indigo-500/10"
                              : "hover:bg-indigo-500/10"
                          }`}
                        >
                          <span
                            className={`text-lg font-medium transition-colors ${
                              isActive
                                ? "text-indigo-300"
                                : "text-[var(--foreground)] group-hover:text-indigo-300"
                            }`}
                          >
                            {item.label}
                          </span>
                          <div className="flex items-center gap-2">
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            )}
                            <ArrowUpRight
                              size={18}
                              className="text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                            />
                          </div>
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-[#1f2937]">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 cursor-pointer"
                >
                  Hire Me <ArrowUpRight size={18} />
                </button>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-center text-xs text-gray-500">
                    Available for work · Injibara, Ethiopia
                  </p>
                </div>

                {/* Social Icons */}
                <div className="h-px bg-[#1f2937] my-6" />
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://github.com/dawit708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all cursor-pointer"
                    aria-label="GitHub"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1da1f2] hover:border-[#1da1f2] transition-all cursor-pointer"
                    aria-label="Twitter"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};