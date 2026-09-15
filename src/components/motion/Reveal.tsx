"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type RevealVariant =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-right"
  | "slide-left"
  | "scale";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * Lightweight Reveal component for editorial content entrances.
 * Automatically honors prefers-reduced-motion for accessibility.
 */
export function Reveal({
  children,
  variant = "slide-up",
  delay = 0,
  duration = 0.55,
  className,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variantsMap = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-down": {
      hidden: { opacity: 0, y: -24 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -24 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 24 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.96 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={variantsMap[variant]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Editorial smooth easing
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
