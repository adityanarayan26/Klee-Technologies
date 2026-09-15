import gsap from "gsap";

/**
 * GSAP Foundation Setup for KLEE Technologies.
 * Prepared for advanced SVG manipulation, scroll-driven storytelling, and hero sequences.
 */

// Safe check for prefers-reduced-motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Studio GSAP Easing Presets
export const GSAP_EASING = {
  editorial: "power3.out",
  smooth: "power2.inOut",
  expressive: "expo.out",
} as const;

export { gsap };
export default gsap;
