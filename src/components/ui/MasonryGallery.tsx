"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioAsset } from "@/data/portfolioAssets";
import type { LightboxAsset } from "./Lightbox";

const Lightbox = dynamic(() => import("./Lightbox").then((m) => m.Lightbox), {
  ssr: false,
});

interface MasonryGalleryProps {
  assets: PortfolioAsset[];
  categories: string[];
}

export function MasonryGallery({ assets, categories }: MasonryGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeAsset, setActiveAsset] = useState<LightboxAsset | null>(null);
  const [columns, setColumns] = useState<number>(5);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 768) setColumns(2);
      else if (width < 1024) setColumns(3);
      else if (width < 1200) setColumns(4);
      else setColumns(5);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const filteredAssets = activeCategory === "All" 
    ? assets 
    : assets.filter((a: any) => a.category === activeCategory);

  // Distribute items across columns round-robin so the initial items (Row 1)
  // appear horizontally left-to-right across the top row instead of vertically stacking in column 1.
  const columnData = useMemo(() => {
    const cols: { asset: PortfolioAsset; index: number }[][] = Array.from(
      { length: columns },
      () => []
    );
    filteredAssets.forEach((asset, idx) => {
      cols[idx % columns].push({ asset, index: idx });
    });
    return cols;
  }, [filteredAssets, columns]);

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

      {/* Masonry Grid with Row-First Distribution */}
      <div 
        className="grid gap-6 items-start w-full"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
        }}
      >
        {columnData.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {col.map(({ asset, index }) => (
              <Reveal key={asset.src + index} variant="slide-up" delay={(index % 5) * 0.05}>
                <div 
                  data-cursor="expand"
                  onClick={() => setActiveAsset({ src: asset.src, type: asset.type })}
                  className="overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-[var(--color-border-subtle)] group hover:cursor-none cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[var(--color-accent)]/40"
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
                        alt={asset.alt || `KLEE Technologies ${asset.category || 'Portfolio'} - ${asset.src.split('/').pop()?.replace(/[-_]/g, ' ').split('.')[0] || 'Image'}`}
                        width={800}
                        height={800}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1200px) 25vw, 20vw"
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        loading={index < 5 ? undefined : "lazy"}
                        priority={index < 5}
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
      
      {filteredAssets.length === 0 && (
        <div className="py-20 text-center text-[var(--color-muted)]">
          No items found in this category.
        </div>
      )}

      {/* Lightbox Modal on click */}
      <Lightbox
        asset={activeAsset}
        onClose={() => setActiveAsset(null)}
      />
    </div>
  );
}
