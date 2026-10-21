"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
  rating: number;
  project: string;
};

/* ===== 6 TESTIMONIALS ===== */
const testimonials: Testimonial[] = [
  {
    quote:
      "Dawit built our animal health website from scratch — front-end, Express API and all. He delivered ahead of schedule and the result exceeded every expectation.",
    name: "Dejene Abera",
    role: "Owner, Dejene Animal Clinic",
    initials: "DA",
    gradient: "from-emerald-400 to-teal-600",
    rating: 5,
    project: "Animal Health Website",
  },
  {
    quote:
      "Our student portal now handles registration, records and results in one place. Dawit understood the requirements instantly and shipped a clean, reliable system.",
    name: "Selam Tadesse",
    role: "Registrar, Bright Future Academy",
    initials: "ST",
    gradient: "from-blue-400 to-indigo-600",
    rating: 5,
    project: "Student Portal System",
  },
  {
    quote:
      "Dawit built our Employee Management System end-to-end. The Express backend is well structured, documented, and easy for our team to maintain.",
    name: "Hana Girma",
    role: "HR Manager, Tech Company",
    initials: "HG",
    gradient: "from-pink-400 to-rose-600",
    rating: 5,
    project: "Employee Management",
  },
  {
    quote:
      "He designed and shipped the REST API with Express and Node that our whole product runs on. Professional, on time, and always ready to help.",
    name: "Yonas Bekele",
    role: "Product Lead, Startup",
    initials: "YB",
    gradient: "from-purple-400 to-fuchsia-600",
    rating: 5,
    project: "Fullstack • Express API",
  },
  {
    quote:
      "Working with Dawit was a pleasure. He is a fast learner, communicates clearly, and takes real ownership of his work. Any team would be lucky to have him.",
    name: "Adugna",
    role: "Senior Developer, Evangadi",
    initials: "SM",
    gradient: "from-orange-400 to-red-600",
    rating: 5,
    project: "Fullstack Development",
  },
  {
    quote:
      "Clean UI, responsive on every screen, and delivered on schedule. Dawit turns a vague idea into a polished, working product.",
    name: "Meron Alemu",
    role: "Founder, Small Business",
    initials: "MA",
    gradient: "from-amber-400 to-orange-600",
    rating: 5,
    project: "Business Website",
  },
];

/* ===== PREMIUM CARD DESIGN (Based on your screenshot) ===== */
const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <article className="w-[340px] sm:w-[380px] shrink-0 flex">
    {/* 
      Outer wrapper creates the thin gradient border. 
      Inner div is the dark background. 
    */}
    <div className="w-full rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/40 via-white/5 to-transparent">
      <div className="bg-[#0d0d16] rounded-[23px] p-7 flex flex-col h-full min-h-[320px]">
        
        {/* Top Row: Icon & Rating */}
        <div className="flex items-center justify-between mb-6">
          {/* Rounded Gradient Icon (Replaces the mobile icon) */}
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} 
                        flex items-center justify-center text-white font-bold text-sm shadow-lg`}
          >
            {t.initials}
          </div>

          {/* Star Rating */}
          <div className="flex gap-1">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Quote Content */}
        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-gray-300">
            &ldquo;{t.quote}&rdquo;
          </p>
        </div>

        {/* Bottom Section: Author & Project Tag */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-4">
          <div>
            <p className="text-white font-bold text-base">{t.name}</p>
            <p className="text-gray-400 text-sm mt-0.5">{t.role}</p>
          </div>

          {/* Yellow "Read More" Style Tag */}
          <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-bold tracking-wider uppercase group cursor-default">
            <span>{t.project}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>
    </div>
  </article>
);

export const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10 overflow-hidden">
      {/* ===== CSS FOR THE MARQUEE ===== */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-left 45s linear infinite;
          will-change: transform;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      {/* ===== HEADER ===== */}
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
        >
          What People Say
        </motion.span>

        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            Testimonials
          </span>
        </motion.h2>

        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        <motion.p
          className="text-gray-400 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Real feedback from clients, mentors and collaborators I&apos;ve built
          fullstack projects with.
        </motion.p>
      </motion.div>

      {/* ===== LEFT-MOVING MARQUEE ===== */}
      <div
        className="marquee-wrap relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max py-4">
          {/* Rendered twice for infinite loop */}
          {[0, 1].map((half) => (
            <div
              key={half}
              className="flex gap-6 pr-6"
              aria-hidden={half === 1}
            >
              {testimonials.map((t, i) => (
                <TestimonialCard key={`${half}-${i}`} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== HINT ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-500 text-xs tracking-widest uppercase mt-10"
      >
        Hover to pause · {testimonials.length} testimonials
      </motion.p>
    </section>
  );
};