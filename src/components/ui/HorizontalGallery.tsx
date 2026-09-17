"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { PortfolioAsset } from "@/data/portfolioAssets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox, LightboxAsset } from "./Lightbox";

interface HorizontalGalleryProps {
  assets: PortfolioAsset[];
}

export function HorizontalGallery({ assets }: HorizontalGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const directionRef = useRef<1 | -1>(1);
  const isHoveredRef = useRef(false);
  const pauseUntilRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeAsset, setActiveAsset] = useState<LightboxAsset | null>(null);

  // Auto-scroll loop with turn-around pause & hover stop
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const autoScroll = (currentTime: number) => {
      const gallery = scrollRef.current;

      if (!gallery) {
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      // Check if paused due to hover, drag, or end turnaround pause
      if (isHoveredRef.current || isDraggingRef.current || currentTime < pauseUntilRef.current) {
        lastTimeRef.current = currentTime;
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const previousTime = lastTimeRef.current ?? currentTime;
      const deltaTime = Math.min(currentTime - previousTime, 100);
      lastTimeRef.current = currentTime;

      const maxScroll = gallery.scrollWidth - gallery.clientWidth;

      if (maxScroll > 4) {
        // Speed: ~55px per second
        const step = directionRef.current * (deltaTime * 0.055);
        const targetScroll = gallery.scrollLeft + step;

        if (targetScroll >= maxScroll) {
          gallery.scrollLeft = maxScroll;
          directionRef.current = -1;
          pauseUntilRef.current = currentTime + 1400; // Pause 1.4s at the end
        } else if (targetScroll <= 0) {
          gallery.scrollLeft = 0;
          directionRef.current = 1;
          pauseUntilRef.current = currentTime + 1400; // Pause 1.4s at the start
        } else {
          gallery.scrollLeft = targetScroll;
        }
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [assets.length]);

  const scrollByAmount = useCallback((direction: "left" | "right") => {
    const gallery = scrollRef.current;
    if (!gallery) return;

    const delta = direction === "left" ? -380 : 380;
    directionRef.current = direction === "left" ? -1 : 1;
    pauseUntilRef.current = performance.now() + 2000; // Pause auto-scroll for 2s after manual button click

    gallery.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  }, []);

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const gallery = scrollRef.current;
    if (!gallery) return;

    isDraggingRef.current = true;
    startXRef.current = e.pageX - gallery.offsetLeft;
    scrollLeftStartRef.current = gallery.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const gallery = scrollRef.current;
    if (!gallery) return;

    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    gallery.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  if (!assets || assets.length === 0) return null;

  return (
    <div
      className="relative mt-8 sm:mt-10 w-full select-none group/gallery"
      onMouseEnter={() => {
        isHoveredRef.current = true;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        setIsHovered(false);
        lastTimeRef.current = null;
        isDraggingRef.current = false;
      }}
    >
      {/* Gallery Track */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {assets.map((asset, i) => (
          <div
            key={`${asset.src}-${i}`}
            data-cursor="expand"
            onClick={() => {
              if (!isDraggingRef.current) setActiveAsset(asset);
            }}
            className="shrink-0 w-[270px] sm:w-[320px] md:w-[380px] h-[220px] sm:h-[260px] md:h-[280px] rounded-2xl overflow-hidden border border-(--color-border-subtle) bg-(--color-background-secondary) shadow-xs hover:shadow-lg hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 relative group/card hover:cursor-none"
          >
            {asset.type === "video" ? (
              <video
                src={asset.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={asset.src}
                alt={asset.src.split("/").pop()?.replace(/[-_]/g, " ") || "Service Work Example"}
                fill
                sizes="(max-width: 640px) 270px, (max-width: 768px) 320px, 380px"
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                loading="lazy"
              />
            )}
            
            {/* Subtle category badge overlay */}
            {asset.category && (
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full opacity-80 group-hover/card:opacity-100 transition-opacity">
                {asset.category}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls & Live Pause Badge */}
      <div className="flex items-center justify-between mt-2 pt-1 border-t border-[var(--color-border-subtle)]/60 text-xs text-[var(--color-muted)]">
        <div className="flex items-center gap-2">
          <span className={`inline-block w-2 h-2 rounded-full transition-colors duration-300 ${isHovered ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`} />
          <span className="text-[11px] font-medium">
            {isHovered ? "Auto-scroll paused (hovering)" : "Auto-scrolling showcase"}
          </span>
        </div>

        {assets.length > 2 && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollByAmount("left")}
              className="w-8 h-8 rounded-full bg-white border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="w-8 h-8 rounded-full bg-white border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <Lightbox asset={activeAsset} onClose={() => setActiveAsset(null)} />
    </div>
  );
}
