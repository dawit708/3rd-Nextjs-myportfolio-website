"use client";

import React from 'react';
import { motion } from 'framer-motion';

const codeSymbols = [
  { text: 'fn()', x: '8%', y: '15%', delay: 0, size: 'text-base' },
  { text: '=>', x: '15%', y: '45%', delay: 1, size: 'text-xl' },
  { text: '</>', x: '5%', y: '75%', delay: 2, size: 'text-lg' },
  { text: '{ }', x: '25%', y: '8%', delay: 0.5, size: 'text-sm' },
  { text: '01', x: '40%', y: '55%', delay: 1.5, size: 'text-2xl' },
  { text: '&&', x: '55%', y: '35%', delay: 2.5, size: 'text-base' },
  { text: '[ ]', x: '68%', y: '65%', delay: 1.2, size: 'text-lg' },
  { text: 'npm i', x: '88%', y: '55%', delay: 0.8, size: 'text-xs' },
  { text: '0x1F', x: '78%', y: '12%', delay: 2.2, size: 'text-sm' },
  { text: '()=>{}', x: '50%', y: '82%', delay: 1.8, size: 'text-sm' },
  { text: 'async', x: '20%', y: '30%', delay: 3, size: 'text-xs' },
  { text: 'await', x: '70%', y: '25%', delay: 0.3, size: 'text-xs' },
  { text: 'const', x: '35%', y: '72%', delay: 2.8, size: 'text-sm' },
  { text: '=>', x: '60%', y: '88%', delay: 1.6, size: 'text-base' },
];

export const FloatingCode = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {codeSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono ${symbol.size} text-amber-200/30 select-none`}
          style={{ left: symbol.x, top: symbol.y }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            y: [0, -30, -15, -40, -60],
            x: [0, 15, -10, 20, 0],
          }}
          transition={{
            duration: 12,
            delay: symbol.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {symbol.text}
        </motion.div>
      ))}

      {/* Small glowing dots scattered around */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-amber-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};