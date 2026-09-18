"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "motion/react";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const CLIENT_LOGOS = [
  { name: "Akshara Finserv", src: "/client_logos/Akshara_finserv_logo.png" },
  { name: "Amasia Solar", src: "/client_logos/amasia_solar_logo.png" },
  { name: "Amit Construction", src: "/client_logos/Amit_construction_logo.jpeg" },
  { name: "Anasa Spices", src: "/client_logos/Anasa_spices_logo.png" },
  { name: "DEC Industries", src: "/client_logos/DEC_industries_logo.png" },
  { name: "Flyatease", src: "/client_logos/Flyatease_logo.jpeg" },
  { name: "Lookatshoez", src: "/client_logos/Lookatshoez_logo.jpeg" },
  { name: "Mahasai", src: "/client_logos/Mahasai_logo.png" },
  { name: "Mane Sports", src: "/client_logos/Mane_sports_logo.png" },
  { name: "Nutrigreenz", src: "/client_logos/Nutrigreenz_logo.jpeg" },
  { name: "Onyxsiri", src: "/client_logos/Onyxsiri_logo.png" },
  { name: "Railcab", src: "/client_logos/Railcab_logo.png" },
  { name: "Sunshine Petworld", src: "/client_logos/Sunshinepetworld_logo.jpeg" },
  { name: "Systatic Inc", src: "/client_logos/Systatic_inc_logo.jpeg" },
  { name: "True Renewable", src: "/client_logos/True_renewable_logo.png" },
  { name: "Truelay", src: "/client_logos/Truelay_logo.jpeg" },
  { name: "Ubase Infra", src: "/client_logos/Ubase_infra_logo.jpeg" },
  { name: "VIT", src: "/client_logos/VIT_logo.jpeg" },
  { name: "VKIAS", src: "/client_logos/VKIAS_logo.png" },
];

export function LogoMarquee({ 
  className, 
  baseVelocity = 40, // Represents duration in seconds now
  items = CLIENT_LOGOS,
  reverse = false,
  colored = true,
}: { 
  className?: string; 
  baseVelocity?: number;
  items?: { name: string; src: string }[];
  reverse?: boolean;
  colored?: boolean;
}) {
  // Duplicate the array to create a seamless infinite loop.
  // We use 4 sets. Moving to -50% means we move exactly 2 sets over, perfectly looping.
  const marqueeItems = [
    ...items,
    ...items,
    ...items,
    ...items
  ];



  return (
    <div className={`relative flex w-full overflow-hidden ${className || "bg-background-secondary/50 py-7 border-y border-(--color-border-subtle)"}`}>
      <motion.div 
        className="flex w-max items-center hover:[animation-play-state:paused]" 
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: baseVelocity, repeat: Infinity }}
      >
        {marqueeItems.map((client, index) => (
          <div 
            key={`${client.name}-${index}`} 
            className="shrink-0 mx-3 sm:mx-4 flex items-center justify-center px-5 py-2.5 rounded-xl bg-white border border-(--color-border-subtle) shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="relative w-28 sm:w-32 h-10 sm:h-12 flex items-center justify-center">
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                fill
                sizes="140px"
                className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                  colored 
                    ? "" 
                    : "filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                }`}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
