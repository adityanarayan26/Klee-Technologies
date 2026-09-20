"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { LightboxAsset } from "./Lightbox";

const Lightbox = dynamic(() => import("./Lightbox").then((m) => m.Lightbox), {
  ssr: false,
});

const col1Media = [
  "ksdc-ts-govt-mobile-app.jpg",
  "1-2.png",
  "2.jpg",
  "30-sec_gopichand_.mp4",
  "4.png",
  "45c14400-abe2-4c76-8ae6-e1d1361a76ea.png",
  "67eaada9-1536-498f-bdab-d8b8af8f589d.png",
  "70b86633-e5f8-4345-8cb7-53b060e192b9.jpg",
  "dec-logo-animation.mp4",
  "714eb420-20f5-42d9-a241-a93b7d733288.png",
  "7633d4bf-ad73-41ad-a24c-c31d5f254aa1.png",
  "b29fbd2a-176f-43d1-9f12-5d3e0817348a.png",
  "c0f5221f-5285-4513-a76f-cc53c3f8bda7.png",
  "ca486253-457a-42d4-bf9c-0baeef8482c6.jpg",
  "dad91a28-707c-4b41-b8ff-56873077aa2c.png",
].map((file) => `/hero-showcase/${file}`);

const col2Media = [
  "vmovexa-stall-design.png",
  "amasia-solar-sma-inverter-withstand-9.jpg",
  "dec_putti_packaging_01_png.png",
  "img_0902.jpg",
  "ramesh-pumps-60sec-telugu.mp4",
  "img_1528.jpg",
  "img_9744.jpg",
  "img_9933.png",
  "klee-technologies-3d-elevation-design8.png",
  "townships---30-sec.mp4",
  "klee-technologies-3d-rendering-of-exhibition-booth-designs4.webp",
  "klee-technologies-3d-rendering-of-exhibition-booth-designs7-1-1024x576.webp",
  "klee-technologies-3d-rendering-of-exhibition-booth-designs8-1-scaled.webp",
  "klee-technologies-app-ui-ux-designs20.jpg",
  "klee-technologies-app-ui-ux-designs28.png",
  "klee-technologies-logo-designs1.jpg",
  "klee-technologies-packaging-designs10.jpg",
].map((file) => `/hero-showcase/${file}`);

const col3Media = [
  "klee-technologies-packaging-designs29-1-scaled.webp",
  "klee-technologies-packaging-designs9.jpg",
  "vvs--30-sec.mp4",
  "klee-technologies-portfolio76.jpg",
  "klee-technologies-website-designs2.png",
  "klee-technologies-website-designs9-1536x1074.webp",
  "msappl-logo-embose-mockup.jpeg",
  "whatsapp-video-2023-09-20-at-1.14.39-pm.mp4",
  "unnamed-1.webp",
  "unnamed-2.webp",
  "unnamed-3.webp",
  "vmovexa-mobile-application-project-2.jpg",
  "vmovexa-website-project.png",
  "whatsapp-image-2025-06-26-at-15.55.29-1.jpeg",
  "whatsapp-image-2025-11-10-at-12.23.50-2.jpeg",
].map((file) => `/hero-showcase/${file}`);

const isVideo = (src: string) => src.toLowerCase().endsWith(".mp4");
const getPoster = (src: string) => src.replace(/\.mp4$/i, "-poster.jpg");

// Helper to assign masonry-like aspect ratios
const getAspectRatio = (index: number) => {
  const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/6]"];
  return ratios[index % ratios.length];
};

// Split and duplicate media for infinite loop
const col1 = [...col1Media, ...col1Media];
const col2 = [...col2Media, ...col2Media];
const col3 = [...col3Media, ...col3Media];

export function VerticalShowcase({ className }: { className?: string }) {
  const [activeAsset, setActiveAsset] = useState<LightboxAsset | null>(null);

  return (
    <>
      <div 
        className={cn("absolute inset-0 w-full h-full overflow-hidden", className)}
      >
        {/* Top and Bottom Gradient Dissolve Masks */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0e76bc] via-[#0e76bc]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0e76bc] via-[#0e76bc]/80 to-transparent z-20 pointer-events-none" />

        {/* Floating Live Indicator Badge */}
        <div className="absolute top-6 right-6 z-30 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-medium tracking-wide shadow-lg pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Showcase</span>
        </div>

        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.75rem,1.2vw,1.5rem)] px-[clamp(0.75rem,1.5vw,2rem)] pb-20 pt-10">
          
          {/* Column 1 - Continuous Pure CSS Infinite Scroll */}
          <div className="flex flex-col gap-4 lg:gap-6 animate-showcase-col1">
            {col1.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white/15 backdrop-blur-xs transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]", getAspectRatio(i))}
                data-cursor="expand"
                onClick={() => setActiveAsset({ src, type: isVideo(src) ? 'video' : 'image' })}
              >
                {isVideo(src) ? (
                  <video 
                    src={src} 
                    poster={getPoster(src)}
                    preload="auto"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="object-cover w-full h-full pointer-events-none" 
                  />
                ) : (
                  <Image 
                    src={src} 
                    alt={`KLEE Technologies Project - ${src.split('/').pop()?.split('.')[0].replace(/[-_]/g, ' ')}`}
                    fill 
                    sizes="(max-width: 768px) 50vw, 33vw" 
                    priority={i === 0}
                    loading={i === 0 ? undefined : "lazy"}
                    className="object-cover pointer-events-none transition-opacity duration-300" 
                  />
                )}
              </div>
            ))}
          </div>

          {/* Column 2 - Continuous Pure CSS Reverse Infinite Scroll */}
          <div className="flex flex-col gap-4 lg:gap-6 -mt-32 animate-showcase-col2">
            {col2.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white/15 backdrop-blur-xs transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]", getAspectRatio(i + 1))}
                data-cursor="expand"
                onClick={() => setActiveAsset({ src, type: isVideo(src) ? 'video' : 'image' })}
              >
                {isVideo(src) ? (
                  <video 
                    src={src} 
                    poster={getPoster(src)}
                    preload="auto"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="object-cover w-full h-full pointer-events-none" 
                  />
                ) : (
                  <Image 
                    src={src} 
                    alt={`KLEE Technologies Project - ${src.split('/').pop()?.split('.')[0].replace(/[-_]/g, ' ')}`}
                    fill 
                    sizes="(max-width: 768px) 50vw, 33vw" 
                    priority={i === 0}
                    loading={i === 0 ? undefined : "lazy"}
                    className="object-cover pointer-events-none transition-opacity duration-300" 
                  />
                )}
              </div>
            ))}
          </div>

          {/* Column 3 - Continuous Pure CSS Infinite Scroll */}
          <div className="hidden md:flex flex-col gap-4 lg:gap-6 mt-16 animate-showcase-col3">
            {col3.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white/15 backdrop-blur-xs transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]", getAspectRatio(i + 2))}
                data-cursor="expand"
                onClick={() => setActiveAsset({ src, type: isVideo(src) ? 'video' : 'image' })}
              >
                {isVideo(src) ? (
                  <video 
                    src={src} 
                    poster={getPoster(src)}
                    preload="auto"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="object-cover w-full h-full pointer-events-none" 
                  />
                ) : (
                  <Image 
                    src={src} 
                    alt={`KLEE Technologies Project - ${src.split('/').pop()?.split('.')[0].replace(/[-_]/g, ' ')}`}
                    fill 
                    sizes="33vw" 
                    priority={i === 0}
                    loading={i === 0 ? undefined : "lazy"}
                    className="object-cover pointer-events-none transition-opacity duration-300" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Integration */}
      <Lightbox asset={activeAsset} onClose={() => setActiveAsset(null)} />
    </>
  );
}
