import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showWordmark?: boolean; // Kept for prop compatibility, though image already contains it
}

/**
 * Dedicated reusable Logo component for KLEE Technologies.
 */
export function Logo({ className = "h-12 w-auto", showWordmark = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/logo.png"
        alt="KLEE Technologies Logo"
        width={300}
        height={100}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}
