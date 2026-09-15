"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

/**
 * Editorial Mask Text Reveal.
 * Splits text into words wrapped in overflow-hidden containers,
 * creating an Apple-grade masked slide-up reveal when scrolled into view.
 */
export function TextReveal({
  children,
  as: Component = "h1",
  className,
  delay = 0,
  duration = 0.65,
  stagger = 0.035,
}: TextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const words = children.split(" ");

  return (
    <Component ref={ref} className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-top mr-[0.26em] last:mr-0 pb-[0.08em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1], // Editorial studio curve
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
