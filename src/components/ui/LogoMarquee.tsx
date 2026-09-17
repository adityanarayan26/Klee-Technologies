"use client";

import React from "react";
import Image from "next/image";

export const CLIENT_LOGOS = [
  { name: "Akshara Finserv", src: "/clients/akshara-finserv.png" },
  { name: "Amasia Solar", src: "/clients/amasia-solar.png" },
  { name: "Amit Construction", src: "/clients/amit-construction.png" },
  { name: "Anasa Spices", src: "/clients/anasa-spices.png" },
  { name: "DEC Industries", src: "/clients/dec-industries.png" },
  { name: "Flyatease", src: "/clients/flyatease.png" },
  { name: "Lookatshoez", src: "/clients/lookatshoez.png" },
  { name: "Mahasai", src: "/clients/mahasai.png" },
  { name: "Mane Sports", src: "/clients/mane-sports.png" },
  { name: "Nutrigreenz", src: "/clients/nutrigreenz.png" },
  { name: "Onyxsiri", src: "/clients/onyxsiri.png" },
  { name: "Railcab", src: "/clients/railcab.png" },
  { name: "Sunshine Petworld", src: "/clients/sunshinepetworld.png" },
  { name: "Systatic Inc", src: "/clients/systatic-inc.png" },
  { name: "True Renewable", src: "/clients/true-renewable.png" },
  { name: "Truelay", src: "/clients/truelay.png" },
  { name: "Ubase Infra", src: "/clients/ubase-infra.png" },
  { name: "VIT", src: "/clients/vit.png" },
  { name: "VKIAS", src: "/clients/vkias.png" },
];

export function LogoMarquee() {
  // Seamless loop with 2 sets of items
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="relative flex w-full overflow-hidden bg-[var(--color-background-secondary)]/50 py-7 border-y border-[var(--color-border-subtle)]">
      {/* Left Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none" />
      
      {/* Right Gradient Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none" />

      <div className="flex w-fit animate-marquee items-center hover:[animation-play-state:paused]" style={{ animationDuration: '45s' }}>
        {marqueeItems.map((client, index) => (
          <div 
            key={`${client.name}-${index}`} 
            className="flex-shrink-0 mx-3 sm:mx-4 flex items-center justify-center px-5 py-2.5 rounded-xl bg-white border border-[var(--color-border-subtle)] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[var(--color-accent)]/30 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="relative w-28 sm:w-32 h-10 sm:h-12 flex items-center justify-center">
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                fill
                sizes="140px"
                className="object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
