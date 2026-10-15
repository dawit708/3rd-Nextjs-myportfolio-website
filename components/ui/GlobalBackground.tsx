"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ==================== FLOATING CODE SYMBOLS ====================
const codeSymbols = [
  { text: 'fn()', x: '5%', y: '12%', delay: 0, size: 'text-base' },
  { text: '=>', x: '12%', y: '40%', delay: 1, size: 'text-xl' },
  { text: '</>', x: '3%', y: '72%', delay: 2, size: 'text-lg' },
  { text: '{ }', x: '22%', y: '8%', delay: 0.5, size: 'text-sm' },
  { text: '01', x: '38%', y: '55%', delay: 1.5, size: 'text-2xl' },
  { text: '&&', x: '52%', y: '32%', delay: 2.5, size: 'text-base' },
  { text: '[ ]', x: '65%', y: '62%', delay: 1.2, size: 'text-lg' },
  { text: 'npm i', x: '88%', y: '50%', delay: 0.8, size: 'text-xs' },
  { text: '0x1F', x: '78%', y: '10%', delay: 2.2, size: 'text-sm' },
  { text: '()=>{}', x: '48%', y: '82%', delay: 1.8, size: 'text-sm' },
  { text: 'async', x: '18%', y: '28%', delay: 3, size: 'text-xs' },
  { text: 'await', x: '72%', y: '22%', delay: 0.3, size: 'text-xs' },
  { text: 'const', x: '32%', y: '75%', delay: 2.8, size: 'text-sm' },
  { text: '=>', x: '58%', y: '90%', delay: 1.6, size: 'text-base' },
  { text: 'yield', x: '82%', y: '78%', delay: 0.9, size: 'text-xs' },
  { text: 'type', x: '15%', y: '92%', delay: 2.4, size: 'text-xs' },
];

// ==================== CANVAS NETWORK ====================
const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create points in 3D space
    const points: { x: number; y: number; z: number }[] = [];
    const numPoints = 55;

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: (Math.random() - 0.5) * 200,
      });
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX - width / 2) * 0.0002,
        y: (e.clientY - height / 2) * 0.0002,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animate
    let time = 0;
    const animate = () => {
      time += 0.002;
      ctx.clearRect(0, 0, width, height);

      const projected = points.map((p) => {
        const cos = Math.cos(time);
        const sin = Math.sin(time);
        const x = p.x * cos - p.z * sin;
        const z = p.x * sin + p.z * cos;
        const mx = mouseRef.current.x * 500;
        const my = mouseRef.current.y * 500;
        const scale = 400 / (400 + z);

        return {
          x: x * scale + width / 2 + mx,
          y: p.y * scale + height / 2 + my,
          z,
          scale,
        };
      });

      // Draw connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.22;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      projected.forEach((p) => {
        const size = Math.max(0.5, p.scale * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.scale * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

// ==================== FLOATING CODE ====================
const FloatingCodeLayer = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {codeSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono ${symbol.size} text-amber-200/30 select-none whitespace-nowrap`}
          style={{ left: symbol.x, top: symbol.y }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            y: [0, -40, -20, -60, -80],
            x: [0, 20, -15, 25, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            duration: 14,
            delay: symbol.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {symbol.text}
        </motion.div>
      ))}

      {/* Floating glow dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-amber-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
};

// ==================== GRADIENT BLOBS ====================
const GradientBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top-left indigo */}
      <motion.div
        className="absolute top-[-15%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-indigo-600/12 blur-[140px]"
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom-right purple */}
      <motion.div
        className="absolute bottom-[-15%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-purple-700/12 blur-[140px]"
        animate={{
          x: [0, -100, 0, 60, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center blue */}
      <motion.div
        className="absolute top-[35%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-blue-700/8 blur-[120px]"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

// ==================== EXPORT (All layers combined) ====================
export const GlobalBackground = () => {
  return (
    <>
      <GradientBlobs />
      <NetworkCanvas />
      <FloatingCodeLayer />
    </>
  );
};