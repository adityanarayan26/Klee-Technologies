"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Custom Studio Cursor for KLEE Technologies.
 * Features an exact central dot with an ultra-smooth trailing ring.
 * Automatically expands on clickable targets and disables on touch/mobile devices via CSS.
 */
export function StudioCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard against touch devices or reduced motion preferences
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || isReduced) return;

    const container = containerRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!container || !dot || !ring) return;

    // Direct fast quickTo setters for 60fps+ tracking without React re-renders
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power2.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power2.out" });

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        gsap.to(container, { opacity: 1, duration: 0.2 });
      }
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest("a, button, [role='button'], input, textarea, select, .interactive-hover")
        );
        if (interactive) {
          ring.classList.add("cursor-interactive");
        } else {
          ring.classList.remove("cursor-interactive");
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      gsap.to(container, { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      isVisible = true;
      gsap.to(container, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] opacity-0 transition-opacity hidden md:block"
    >
      {/* Central Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--color-foreground)] rounded-full will-change-transform"
      />

      {/* Smooth Lagging Trailing Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-foreground)]/25 bg-transparent w-8 h-8 scale-100 transition-all duration-200 ease-out will-change-transform [&.cursor-interactive]:w-11 [&.cursor-interactive]:h-11 [&.cursor-interactive]:border-[var(--color-accent)] [&.cursor-interactive]:bg-[var(--color-accent-subtle)]/40 [&.cursor-interactive]:scale-110"
      />
    </div>
  );
}
