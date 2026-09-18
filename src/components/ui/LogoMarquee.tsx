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
