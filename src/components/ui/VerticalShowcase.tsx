"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { LightboxAsset } from "./Lightbox";

const Lightbox = dynamic(() => import("./Lightbox").then((m) => m.Lightbox), {
  ssr: false,
});

const col1Media = [
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
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  
  const [activeAsset, setActiveAsset] = useState<LightboxAsset | null>(null);

  useEffect(() => {
    const anims: Animation[] = [];

    if (col1Ref.current) {
      const anim1 = col1Ref.current.animate(
        [{ transform: "translateY(0%)" }, { transform: "translateY(-50%)" }],
        { duration: 60000, iterations: Infinity, easing: "linear" }
      );
      anims.push(anim1);
    }
    if (col2Ref.current) {
      const anim2 = col2Ref.current.animate(
        [{ transform: "translateY(-50%)" }, { transform: "translateY(0%)" }],
        { duration: 75000, iterations: Infinity, easing: "linear" }
      );
      anims.push(anim2);
    }
    if (col3Ref.current) {
      const anim3 = col3Ref.current.animate(
        [{ transform: "translateY(0%)" }, { transform: "translateY(-50%)" }],
        { duration: 65000, iterations: Infinity, easing: "linear" }
      );
      anims.push(anim3);
    }

    const setupHover = (el: HTMLElement | null, anim: Animation) => {
      if (!el || !anim) return;
      const onEnter = () => { anim.playbackRate = 0.15; };
      const onLeave = () => { anim.playbackRate = 1; };
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    };

    const cleanup1 = setupHover(col1Ref.current, anims[0]);
    const cleanup2 = setupHover(col2Ref.current, anims[1]);
    const cleanup3 = setupHover(col3Ref.current, anims[2]);

    return () => {
      cleanup1?.(); cleanup2?.(); cleanup3?.();
      anims.forEach(anim => anim.cancel());
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef} 
        className={cn("absolute inset-0 w-full h-full overflow-hidden", className)}
      >
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-8 pb-20 pt-10">
          
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-4 lg:gap-6">
            {col1.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white/15 backdrop-blur-xs", getAspectRatio(i))}
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
                    alt="Portfolio Item" 
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

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-4 lg:gap-6 -mt-32">
            {col2.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white/15 backdrop-blur-xs", getAspectRatio(i + 1))}
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
                    alt="Portfolio Item" 
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

          {/* Column 3 */}
          <div ref={col3Ref} className="hidden md:flex flex-col gap-4 lg:gap-6 mt-16">
            {col3.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white/15 backdrop-blur-xs", getAspectRatio(i + 2))}
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
                    alt="Portfolio Item" 
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
