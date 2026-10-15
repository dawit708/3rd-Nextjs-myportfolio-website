"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dawit delivered our clinic website ahead of schedule, and it exceeded every expectation. He understood our business needs instantly and translated them into a beautiful, functional product.",
    name: "Dejene Abera",
    role: "Owner, Dejene Animal Clinic",
    initials: "DA",
    gradient: "from-emerald-500 to-teal-600",
    rating: 5,
  },
  {
    quote:
      "Working with Dawit was a pleasure. He is a fast learner, communicates clearly, and takes real ownership of his work. Any team would be lucky to have him.",
    name: "Sample Mentor",
    role: "Senior Developer, Evangadi Bootcamp",
    initials: "SM",
    gradient: "from-indigo-500 to-purple-600",
    rating: 5,
  },
  {
    quote:
      "Dawit built our Employee Management System from scratch. Professional, on time, and always ready to help. Highly recommended.",
    name: "Sample Client",
    role: "HR Manager, Tech Company",
    initials: "SC",
    gradient: "from-pink-500 to-rose-600",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 2000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const current = testimonials[index];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
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
          What clients, mentors, and collaborators say about working with me.
        </motion.p>
      </motion.div>

      {/* ===== CAROUSEL ===== */}
      <div className="relative max-w-3xl mx-auto">
        {/* Card container */}
        <div className="relative min-h-[380px] md:min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className={`absolute inset-0 bg-[#0d0d16] border border-[#1f2937] rounded-3xl p-8 md:p-12 overflow-hidden`}
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-5`}
              />

              {/* Decorative quote icon */}
              <div className="absolute top-6 right-6 text-indigo-500/10">
                <Quote size={80} />
              </div>

              <div className="relative flex flex-col items-center text-center">
                {/* Big quote icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20`}
                >
                  <Quote size={24} />
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-2xl font-light italic"
                >
                  "{current.quote}"
                </motion.p>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {current.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold">{current.name}</p>
                    <p className="text-gray-500 text-sm">{current.role}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== NAVIGATION BUTTONS ===== */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === index
                    ? "w-8 h-2 bg-gradient-to-r from-indigo-500 to-purple-500"
                    : "w-2 h-2 bg-[var(--border)] hover:bg-indigo-500/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};