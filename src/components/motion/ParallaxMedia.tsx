"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxMediaProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

/**
 * Subtle Parallax container for media assets and showcase cards.
 * Translates inner media slightly during scroll to create tactile depth without performance overhead.
 */
export function ParallaxMedia({
  children,
  offset = 24,
  className,
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (shouldReduceMotion) {
    return <div className={cn("overflow-hidden", className)}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden rounded-xl", className)}>
      <motion.div style={{ y }} className="w-full h-full scale-[1.05]">
        {children}
      </motion.div>
    </div>
  );
}
