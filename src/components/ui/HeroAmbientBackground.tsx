"use client";

import React from "react";
import { motion } from "motion/react";

export function HeroAmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Blueprint Grid Pattern with Radial Falloff */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0e76bc 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Primary Floating Ambient Blue Orb */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -30, 15, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#0e76bc]/12 via-[#0e76bc]/5 to-transparent blur-3xl"
      />

      {/* Secondary Cyan/Sky Breathing Accent Orb */}
      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 1.12, 0.92, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 right-10 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#38bdf8]/10 via-[#0e76bc]/6 to-transparent blur-3xl"
      />

      {/* Subtle Center Spotlight Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-transparent via-[#0e76bc]/4 to-transparent blur-2xl" />
    </div>
  );
}
