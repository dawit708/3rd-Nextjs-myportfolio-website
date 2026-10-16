"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  gradient: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  gradient,
  icon,
  description,
  details,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[var(--card)] border border-[var(--border)] rounded-3xl overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Gradient Header */}
              <div
                className={`relative h-32 bg-gradient-to-br ${gradient} flex items-center justify-center`}
              >
                {/* Decorative circles */}
                <div className="absolute top-4 left-6 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-4 right-8 w-20 h-20 rounded-full bg-white/10 blur-xl" />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl"
                >
                  {icon}
                </motion.div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                  {category}
                </span>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-4">
                  {title}
                </h3>

                {/* Main Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {description}
                </p>

                {/* Details List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
                    What This Includes
                  </h4>
                  {details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`}
                      />
                      <span className="text-sm leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={onClose}
                  className={`w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r ${gradient} hover:opacity-90 transition-opacity shadow-lg cursor-pointer`}
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};