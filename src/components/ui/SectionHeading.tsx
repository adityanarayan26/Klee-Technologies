import React from "react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/motion/TextReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  isHero?: boolean;
  animateText?: boolean;
}

/**
 * Reusable SectionHeading component adhering to KLEE editorial typography.
 * Supports eyebrow badge, display/H2 title with automatic editorial mask text reveal,
 * muted description, and optional CTA action.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  titleAs: TitleTag = "h2",
  isHero = false,
  animateText = true,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4">
          <span className="type-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/10 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}

      {typeof title === "string" && animateText ? (
        <TextReveal
          as={TitleTag}
          className={cn(
            isHero ? "type-display" : "type-h2",
            "text-[var(--color-foreground)] font-medium tracking-tight text-balance"
          )}
        >
          {title}
        </TextReveal>
      ) : (
        <TitleTag
          className={cn(
            isHero ? "type-display" : "type-h2",
            "text-[var(--color-foreground)] font-medium tracking-tight text-balance"
          )}
        >
          {title}
        </TitleTag>
      )}

      {description && (
        <p
          className={cn(
            isHero ? "type-body-large" : "type-body",
            "mt-4 md:mt-6 text-[var(--color-muted)] max-w-2xl leading-relaxed text-balance"
          )}
        >
          {description}
        </p>
      )}

      {action && <div className="mt-8 flex items-center gap-4">{action}</div>}
    </div>
  );
}
