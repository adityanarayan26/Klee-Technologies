import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "narrow" | "wide" | "full";
  children: React.ReactNode;
}

/**
 * Reusable Container component adhering to the 1400-1440px architectural grid.
 * Provides consistent fluid gutters across mobile (20px), tablet (32px), and desktop (48-64px).
 */
export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-[1420px]",
    narrow: "max-w-[980px]",
    wide: "max-w-[1560px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
