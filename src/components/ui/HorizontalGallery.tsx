"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { PortfolioAsset } from "@/data/portfolioAssets";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalGalleryProps {
  assets: PortfolioAsset[];
}

export function HorizontalGallery({ assets }: HorizontalGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  if (!assets || assets.length === 0) return null;

  return (
    <div className="relative w-full mt-10">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {assets.map((asset, i) => (
          <div 
            key={i} 
            className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] h-[250px] sm:h-[300px] rounded-xl overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] snap-start group relative"
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
                alt={asset.src.split('/').pop() || "Service Work Example"}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Scroll controls */}
      {assets.length > 2 && (
        <div className="flex justify-end gap-2 mt-2">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
