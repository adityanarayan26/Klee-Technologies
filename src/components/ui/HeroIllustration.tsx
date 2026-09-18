"use client";

import React from "react";
import { motion } from "motion/react";

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-cyan-300/20 blur-[80px] rounded-full scale-75 animate-[pulse_8s_ease-in-out_infinite]" />
      
      <svg viewBox="0 0 800 800" className="relative z-10 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="gradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="gradSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradAccent" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Central Core */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="origin-center"
        >
          <circle cx="400" cy="400" r="120" fill="url(#gradPrimary)" filter="url(#glow)" />
          <circle cx="400" cy="400" r="90" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="400" cy="400" r="60" fill="white" opacity="0.1" />
        </motion.g>

        {/* Orbiting Rings */}
        <motion.g
          animate={{ rotate: -360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          className="origin-center"
        >
          <ellipse cx="400" cy="400" rx="300" ry="120" fill="none" stroke="url(#gradSecondary)" strokeWidth="3" transform="rotate(45 400 400)" opacity="0.6" />
          <ellipse cx="400" cy="400" rx="300" ry="120" fill="none" stroke="url(#gradAccent)" strokeWidth="3" transform="rotate(-45 400 400)" opacity="0.6" />
          
          {/* Nodes on Orbits */}
          <circle cx="612" cy="612" r="15" fill="#2dd4bf" filter="url(#glow)" />
          <circle cx="188" cy="188" r="15" fill="#818cf8" filter="url(#glow)" />
          <circle cx="612" cy="188" r="12" fill="#0ea5e9" filter="url(#glow)" />
          <circle cx="188" cy="612" r="12" fill="#c084fc" filter="url(#glow)" />
        </motion.g>

        {/* Floating Abstract Elements */}
        <motion.g
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="550" y="200" width="80" height="80" rx="20" fill="url(#gradSecondary)" filter="url(#glow)" opacity="0.8" transform="rotate(15 590 240)" />
          <path d="M570 230 L610 230 L610 250 L570 250 Z" fill="white" opacity="0.5" />
        </motion.g>

        <motion.g
          animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon points="200,300 260,350 140,350" fill="url(#gradAccent)" filter="url(#glow)" opacity="0.8" />
        </motion.g>

        <motion.g
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="250" cy="550" r="45" fill="url(#gradPrimary)" filter="url(#glow)" opacity="0.7" />
          <circle cx="250" cy="550" r="25" fill="white" opacity="0.3" />
        </motion.g>

        {/* Connection Lines (Data Flow) */}
        <motion.path
          d="M 400 400 L 590 240"
          fill="none"
          stroke="url(#gradSecondary)"
          strokeWidth="4"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          opacity="0.5"
        />
        <motion.path
          d="M 400 400 L 200 325"
          fill="none"
          stroke="url(#gradAccent)"
          strokeWidth="4"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          opacity="0.5"
        />
        <motion.path
          d="M 400 400 L 250 550"
          fill="none"
          stroke="url(#gradPrimary)"
          strokeWidth="4"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
