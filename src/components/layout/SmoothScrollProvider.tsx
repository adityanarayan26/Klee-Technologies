"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

// External store for Lenis instance to satisfy React 19 strict hook rules
let currentLenis: Lenis | null = null;
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): Lenis | null {
  return currentLenis;
}

function getServerSnapshot(): null {
  return null;
}

/**
 * Hook to access active Lenis smooth scroll instance.
 */
export function useLenis(): Lenis | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  enabled?: boolean;
}

/**
 * Isolated Lenis smooth scrolling provider for Next.js App Router.
 * - Automatically respects prefers-reduced-motion
 * - Safely handles route transitions
 * - Cleans up RAF listeners on unmount
 * - Preserves native anchor navigation
 */
export function SmoothScrollProvider({
  children,
  enabled = true,
}: SmoothScrollProviderProps) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Guard against server-side execution, disabled flag, or reduced motion preference
    if (typeof window === "undefined" || !enabled) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with optimized performance settings
    const instance = new Lenis({
      lerp: 0.1, // Tighter and less "floaty" than duration based easing. Helps reduce lag.
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
    });

    currentLenis = instance;
    listeners.forEach((listener) => listener());

    let rafId: number;

    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Clean up properly on unmount
    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      currentLenis = null;
      listeners.forEach((listener) => listener());
    };
  }, [enabled]);

  // Scroll to top or preserve anchor on route navigation
  useEffect(() => {
    if (lenis) {
      const timeout = setTimeout(() => {
        if (!window.location.hash) {
          lenis.scrollTo(0, { immediate: true });
        }
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [lenis, pathname]);

  return <>{children}</>;
}
