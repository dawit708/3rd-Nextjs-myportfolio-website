"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, PenTool, Clock, Rocket, Headphones, ArrowRight } from 'lucide-react';
import { InfoModal } from '@/components/ui/InfoModal';

const myServices = [
  {
    icon: <Code2 size={28} />,
    title: 'Web Development',
    description: 'Full-stack web applications built with modern frameworks.',
    gradient: 'from-cyan-400 to-blue-500',
    details: [
      'Full-stack development with React, Next.js, Node.js, and PostgreSQL.',
      'RESTful API design and integration with third-party services.',
      'Database design and optimization for high-performance applications.',
      'Deployment on Vercel, Netlify, and cloud platforms.',
    ],
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Fully Responsive',
    description: 'Pixel-perfect on every device.',
    gradient: 'from-purple-400 to-fuchsia-500',
    details: [
      'Mobile-first design approach — starts with the smallest screen.',
      'Cross-browser testing on Chrome, Safari, Firefox, and Edge.',
      'Touch-friendly UI with proper tap targets and gestures.',
      'Optimized images and lazy loading for mobile performance.',
    ],
  },
  {
    icon: <PenTool size={28} />,
    title: 'Beautiful Code',
    description: 'Clean, readable, well-documented.',
    gradient: 'from-purple-500 to-pink-500',
    details: [
      'TypeScript for type safety and fewer runtime errors.',
      'Component-based architecture with clean separation of concerns.',
      'Consistent naming conventions and code formatting.',
      'Well-documented code with clear comments and README files.',
    ],
  },
  {
    icon: <Clock size={28} />,
    title: 'On Time',
    description: 'Reliable delivery, every project.',
    gradient: 'from-violet-500 to-purple-600',
    details: [
      'Agile development with clear milestones and deliverables.',
      'Regular progress updates and transparent communication.',
      'Meeting deadlines without compromising on quality.',
      'Flexible with timezones — work with clients worldwide.',
    ],
  },
  {
    icon: <Rocket size={28} />,
    title: 'Quick Learner',
    description: 'Adapts to new tech fast.',
    gradient: 'from-purple-500 to-indigo-500',
    details: [
      'Self-taught in multiple stacks — React, Next.js, MERN, Flutter.',
      'Fast onboarding — able to join existing codebases quickly.',
      'Comfortable with new tools and frameworks within days.',
      'Continuous learner — always exploring new technologies.',
    ],
  },
  {
    icon: <Headphones size={28} />,
    title: 'Always Online',
    description: 'Easy to reach, happy to help.',
    gradient: 'from-fuchsia-500 to-purple-600',
    details: [
      'Respond to messages within 24 hours, usually much faster.',
      'Available via email, LinkedIn, and GitHub.',
      'Happy to jump on a call or video meeting when needed.',
      'Open to freelance, contract, and full-time opportunities.',
    ],
  },
];

export const MyServices = () => {
  const [selectedItem, setSelectedItem] = useState<typeof myServices[0] | null>(null);

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
      {/* ===== Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <span className="inline-block text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
          My Services
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            What I Offer
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Professional services built on years of hands-on experience.
        </p>
      </motion.div>

      {/* ===== 6-Card Uniform Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative bg-[var(--card)]/60 backdrop-blur-sm border border-[var(--border)] rounded-3xl p-8 overflow-hidden hover:border-amber-300/40 transition-all duration-300"
          >
            {/* Gradient glow on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            />

            {/* Top gradient bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Icon */}
            <motion.div
              className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg mb-6`}
              whileHover={{
                rotate: [0, -8, 8, 0],
                scale: 1.08,
                transition: { duration: 0.5 },
              }}
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative text-gray-400 leading-relaxed text-sm mb-6">
              {service.description}
            </p>

            {/* Read More */}
            <button
              onClick={() => setSelectedItem(service)}
              className="relative inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-300 hover:text-amber-200 transition-colors group/btn cursor-pointer"
            >
              READ MORE
              <ArrowRight
                size={12}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>

            {/* Bottom gradient line on hover */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-500`}
            />
          </motion.div>
        ))}
      </div>

      {/* ===== Modal ===== */}
      <InfoModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
        category="My Services"
        gradient={selectedItem?.gradient || ''}
        icon={selectedItem?.icon}
        description={selectedItem?.description || ''}
        details={selectedItem?.details || []}
      />
    </section>
  );
};