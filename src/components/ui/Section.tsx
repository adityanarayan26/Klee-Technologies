import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "none" | "compact" | "default" | "spacious" | "hero";
  background?: "default" | "secondary" | "subtle" | "contrast";
  borderTop?: boolean;
  borderBottom?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable Section component enforcing uniform vertical rhythm across pages.
 * Avoids arbitrary margin/padding assignments and maintains clean agency-grade spacing.
 */
export function Section({
  as: Component = "section",
  spacing = "default",
  background = "default",
  borderTop = false,
  borderBottom = false,
  className,
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "py-0",
    compact: "py-8 md:py-12 lg:py-16",
    default: "py-12 md:py-16 lg:py-20",
    spacious: "py-16 md:py-20 lg:py-28",
    hero: "pt-6 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20",
  };

  const bgClasses = {
    default: "bg-[var(--color-background)] text-[var(--color-foreground)]",
    secondary: "bg-[var(--color-background-secondary)] text-[var(--color-foreground)]",
    subtle: "bg-[var(--color-background-subtle)] text-[var(--color-foreground)]",
    contrast: "bg-[var(--color-background-contrast)] text-white",
  };

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden",
        spacingClasses[spacing],
        bgClasses[background],
        borderTop && "border-t border-[var(--color-border-subtle)]",
        borderBottom && "border-b border-[var(--color-border-subtle)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
