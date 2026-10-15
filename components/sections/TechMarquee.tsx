"use client";

import React from 'react';

const techs = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Express',
  'Flutter', 'Python', 'Figma', 'Docker'
];

export const TechMarquee = () => {
  return (
    <section className="py-10 border-y border-[var(--border)] overflow-hidden relative z-10">
      
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="text-2xl font-bold text-gray-600 hover:text-indigo-400 transition-colors duration-300 whitespace-nowrap px-8"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};