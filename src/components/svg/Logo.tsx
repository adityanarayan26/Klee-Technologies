import React from "react";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * Dedicated reusable Logo component for KLEE Technologies.
 * Designed with fixed baseline proportions (aspect ratio ~4.2:1) so that
 * swapping the vector artwork later will not cause layout shifts in the header or footer.
 */
export function Logo({ className = "h-8 w-auto", showWordmark = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Geometric KLEE Brand Glyph */}
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 flex-shrink-0"
        aria-hidden="true"
      >
        <rect width="36" height="36" rx="8" fill="var(--color-foreground)" />
        {/* Dynamic Architectural 'K' Glyph */}
        <path
          d="M11 9V27M11 18H14L22 9M15 17L23 27"
          stroke="#ffffff"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Controlled Accent Spark */}
        <circle cx="25" cy="11" r="2" fill="var(--color-accent)" />
      </svg>

      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <span className="text-[1.125rem] font-bold tracking-[-0.03em] text-[var(--color-foreground)]">
            KLEE
          </span>
          <span className="text-[0.55rem] font-medium tracking-[0.2em] text-[var(--color-muted)] uppercase mt-0.5">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
