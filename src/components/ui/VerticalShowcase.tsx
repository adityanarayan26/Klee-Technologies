"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lightbox, LightboxAsset } from "./Lightbox";

const mediaFiles = [
  // Column 1 (items 0-5)
  "DEC LOGO ANIMATION.MP4",
  "1 2.PNG", "1.JPG", "13.PNG", "14bc276d-c63f-476f-8ecc-7720f5d4ed9a.JPG", "2.JPG",
  
  // Column 2 (items 6-11)
  "KLEE TECHNOLOGIES WEB INTRO.MP4",
  "KRYA CORONA UV-C DIS-INFECTOR.MP4",
  "2.PNG", "3.JPG", "3.PNG", "4.JPG",
  
  // Column 3 (items 12-17)
  "WhatsApp Video 2023-09-20 at 1.14.39 PM.MP4",
  "4.PNG", "45C14400-ABE2-4C76-8AE6-E1D1361A76EA.PNG", "5.JPG", "6 2.JPG", "6.JPG"
].map(file => `/KLEE TECHNOLOGIES PORTFOLIO/${file}`);

const isVideo = (src: string) => src.toLowerCase().endsWith('.mp4');

// Helper to assign masonry-like aspect ratios
const getAspectRatio = (index: number) => {
  const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/6]"];
  return ratios[index % ratios.length];
};

// Split and duplicate media for infinite loop
const col1 = [...mediaFiles.slice(0, 6), ...mediaFiles.slice(0, 6)];
const col2 = [...mediaFiles.slice(6, 12), ...mediaFiles.slice(6, 12)];
const col3 = [...mediaFiles.slice(12, 18), ...mediaFiles.slice(12, 18)];

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
        [{ transform: 'translateY(0%)' }, { transform: 'translateY(-50%)' }],
        { duration: 30000, iterations: Infinity, easing: 'linear' }
      );
      anims.push(anim1);
    }
    if (col2Ref.current) {
      const anim2 = col2Ref.current.animate(
        [{ transform: 'translateY(-50%)' }, { transform: 'translateY(0%)' }],
        { duration: 45000, iterations: Infinity, easing: 'linear' }
      );
      anims.push(anim2);
    }
    if (col3Ref.current) {
      const anim3 = col3Ref.current.animate(
        [{ transform: 'translateY(0%)' }, { transform: 'translateY(-50%)' }],
        { duration: 35000, iterations: Infinity, easing: 'linear' }
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
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)]", getAspectRatio(i))}
                data-cursor="expand"
                onClick={() => setActiveAsset({ src, type: isVideo(src) ? 'video' : 'image' })}
              >
                {isVideo(src) ? (
                  <video src={src} autoPlay loop muted playsInline className="object-cover w-full h-full pointer-events-none" />
                ) : (
                  <Image src={src} alt="Portfolio Item" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover pointer-events-none" />
                )}
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-4 lg:gap-6 -mt-32">
            {col2.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)]", getAspectRatio(i + 1))}
                data-cursor="expand"
                onClick={() => setActiveAsset({ src, type: isVideo(src) ? 'video' : 'image' })}
              >
                {isVideo(src) ? (
                  <video src={src} autoPlay loop muted playsInline className="object-cover w-full h-full pointer-events-none" />
                ) : (
                  <Image src={src} alt="Portfolio Item" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover pointer-events-none" />
                )}
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div ref={col3Ref} className="hidden md:flex flex-col gap-4 lg:gap-6 mt-16">
            {col3.map((src, i) => (
              <div 
                key={i} 
                className={cn("relative w-full rounded-2xl overflow-hidden cursor-none shadow-[0_8px_30px_rgba(0,0,0,0.06)]", getAspectRatio(i + 2))}
                data-cursor="expand"
                onClick={() => setActiveAsset({ src, type: isVideo(src) ? 'video' : 'image' })}
              >
                {isVideo(src) ? (
                  <video src={src} autoPlay loop muted playsInline className="object-cover w-full h-full pointer-events-none" />
                ) : (
                  <Image src={src} alt="Portfolio Item" fill sizes="33vw" className="object-cover pointer-events-none" />
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
