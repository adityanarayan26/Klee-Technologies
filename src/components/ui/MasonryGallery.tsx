"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioAsset } from "@/data/portfolioAssets";

interface MasonryGalleryProps {
  assets: PortfolioAsset[];
  categories: string[];
}

export function MasonryGallery({ assets, categories }: MasonryGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredAssets = activeCategory === "All" 
    ? assets 
    : assets.filter((a: any) => a.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-md"
                : "bg-transparent text-[var(--color-foreground)] border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-6 space-y-6">
        {filteredAssets.map((asset, i) => (
          <Reveal key={asset.src + i} variant="slide-up" delay={(i % 10) * 0.05}>
            <div 
              data-cursor="expand"
              className="break-inside-avoid mb-6 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-[var(--color-border-subtle)] group hover:cursor-none"
            >
              {asset.type === "video" ? (
                <video
                  src={asset.src}
                  poster={asset.src.replace(/\.mp4$/i, "-poster.jpg")}
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                />
              ) : (
                <div className="relative w-full bg-slate-100 dark:bg-slate-800/30">
                  <Image
                    src={asset.src}
                    alt={asset.src.split('/').pop() || "Portfolio item"}
                    width={800}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    loading={i < 2 ? undefined : "lazy"}
                    priority={i < 2}
                  />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      
      {filteredAssets.length === 0 && (
        <div className="py-20 text-center text-[var(--color-muted)]">
          No items found in this category.
        </div>
      )}
    </div>
  );
}
