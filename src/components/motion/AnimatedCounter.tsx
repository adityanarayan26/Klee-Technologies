"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  from?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  format?: boolean;
}

/**
 * High-performance smooth Animated Counter.
 * Triggers directly on the DOM node when scrolled into view, achieving 60fps
 * without re-rendering the component tree, and honors prefers-reduced-motion.
 */
export function AnimatedCounter({
  value,
  from = 0,
  suffix = "",
  prefix = "",
  duration = 1.8,
  decimals = 0,
  className = "",
  format = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const formatNumber = (val: number | string) => {
      const num = Number(val);
      return format ? num.toLocaleString() : num.toString();
    };

    const node = ref.current;
    if (!node || !isInView || shouldReduceMotion) {
      if (node && shouldReduceMotion) {
        node.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      }
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const startValue = from;
    const endValue = value;

    // Exponential ease out for silky agency counter feel
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);

      const current = startValue + (endValue - startValue) * easedProgress;
      const formatted = format 
        ? Number(current.toFixed(decimals)).toLocaleString()
        : current.toFixed(decimals);
        
      node.textContent = `${prefix}${formatted}${suffix}`;

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        node.textContent = `${prefix}${formatNumber(endValue)}${suffix}`;
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, from, duration, decimals, prefix, suffix, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shouldReduceMotion 
        ? (format ? value.toLocaleString() : value.toString()) 
        : (format ? from.toLocaleString() : from.toString())}
      {suffix}
    </span>
  );
}
