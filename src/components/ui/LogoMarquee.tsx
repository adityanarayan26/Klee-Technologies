"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  "Akshara_finserv_logo.png",
  "Amit_construction_logo.jpeg",
  "Anasa_spices_logo.png",
  "DEC_industries_logo.png",
  "Flyatease_logo.jpeg",
  "Lookatshoez_logo.jpeg",
  "Mahasai_logo.png",
  "Mane_sports_logo.png",
  "Nutrigreenz_logo.jpeg",
  "Onyxsiri_logo.png",
  "Railcab_logo.png",
  "Sunshinepetworld_logo.jpeg",
  "Systatic_inc_logo.jpeg",
  "True_renewable_logo.png",
  "Truelay_logo.jpeg",
  "Ubase_infra_logo.jpeg",
  "VIT_logo.jpeg",
  "VKIAS_logo.png",
  "amasia_solar_logo.png"
];

export function LogoMarquee() {
  // Duplicate the array to create a seamless infinite scroll effect
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="w-full bg-[var(--color-background-primary)] border-t border-b border-[var(--color-border-subtle)] py-8 overflow-hidden relative flex">
      {/* Left Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-background-primary)] to-transparent z-10 pointer-events-none" />
      
      {/* Right Gradient Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-background-primary)] to-transparent z-10 pointer-events-none" />

      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
        {marqueeItems.map((logo, index) => (
          <div 
            key={`${logo}-${index}`} 
            className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
              src={`/client-logos/${logo}`}
              alt={`Client Logo ${index}`}
              width={120}
              height={60}
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
