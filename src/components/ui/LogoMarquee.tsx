"use client";

import React from "react";
import Image from "next/image";

export interface ClientLogo {
  name: string;
  src: string;
  className?: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "Government of Telangana",
    src: "/images/clients/telangana-govt.png",
    className: "p-0.5",
  },
  ...Array.from({ length: 21 }, (_, index) => ({
    name: `Client ${index + 1}`,
    src: `/images/clients/${index + 1}.png`,
  })),
];

export function LogoMarquee({ 
  className, 
  baseVelocity = 24, // Fast & dynamic duration (~185px/s) with hardware-accelerated smoothness
  items = CLIENT_LOGOS,
  reverse = false,
  colored = true,
  pauseOnHover = true,
}: { 
  className?: string; 
  baseVelocity?: number;
  items?: ClientLogo[];
  reverse?: boolean;
  colored?: boolean;
  pauseOnHover?: boolean;
}) {
  const renderTrack = (trackKey: string, isAriaHidden = false) => (
    <div 
      aria-hidden={isAriaHidden ? "true" : undefined}
      className={`flex shrink-0 items-center ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      style={{ 
        animationDuration: `${baseVelocity}s`,
        animationTimingFunction: "linear",
      }}
    >
      {items.map((client, index) => (
        <div 
          key={`${trackKey}-${client.name}-${index}`} 
          className="shrink-0 mx-2 sm:mx-2.5 flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white border border-[var(--color-border-subtle)] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 group/card"
        >
          <div className="relative w-36 sm:w-44 md:w-48 h-14 sm:h-16 flex items-center justify-center">
            <Image
              src={client.src}
              alt={`${client.name} logo`}
              fill
              sizes="200px"
              className={`object-contain transition-all duration-300 group-hover/card:scale-105 ${
                colored 
                  ? "" 
                  : "filter grayscale opacity-80 group-hover/card:grayscale-0 group-hover/card:opacity-100"
              } ${client.className || ""}`}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div 
      className={`group relative flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] ${
        className || "bg-background-secondary/50 py-7 border-y border-[var(--color-border-subtle)]"
      }`}
    >
      {renderTrack("track-1", false)}
      {renderTrack("track-2", true)}
    </div>
  );
}
