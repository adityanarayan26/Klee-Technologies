import React from "react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  aspectRatio?: "video" | "landscape" | "portrait" | "square" | "wide";
  label?: string;
  sublabel?: string;
  className?: string;
  isVideo?: boolean;
}

/**
 * Neutral, local media placeholder component.
 * Prevents layout shifts (CLS) and allows zero-dependency development before client media is supplied.
 */
export function MediaPlaceholder({
  aspectRatio = "landscape",
  label = "Asset Placeholder",
  sublabel,
  className,
  isVideo = false,
}: MediaPlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    landscape: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-xl bg-[var(--color-background-subtle)] border border-[var(--color-border-subtle)] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Subtle Grid Accent Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-2 max-w-xs">
        <div className="w-10 h-10 rounded-full bg-white border border-[var(--color-border-subtle)] shadow-xs flex items-center justify-center text-[var(--color-muted)]">
          {isVideo ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="translate-x-0.5"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          )}
        </div>

        <span className="text-xs font-semibold tracking-wide uppercase text-[var(--color-foreground)]">
          {label}
        </span>

        {sublabel && (
          <span className="text-[11px] text-[var(--color-muted)]">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
