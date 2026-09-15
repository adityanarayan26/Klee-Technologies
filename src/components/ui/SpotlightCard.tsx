"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * Interactive Spotlight Card with cursor-following radial border & surface shimmer.
 * Subtle and restrained, providing tactile depth on hover.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(17, 56, 247, 0.12)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 overflow-hidden transition-all duration-300 hover:border-[var(--color-border)] hover:shadow-xs",
        className
      )}
      {...props}
    >
      {/* Radial Spotlight Surface Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Radial Border Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-opacity duration-300"
        style={{
          opacity,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          background: `radial-gradient(280px circle at ${position.x}px ${position.y}px, rgba(17, 56, 247, 0.4), transparent 70%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
