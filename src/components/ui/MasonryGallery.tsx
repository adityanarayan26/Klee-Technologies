"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { PortfolioAsset } from "@/data/portfolioAssets";
import { getAssetDimensions } from "@/data/assetDimensions";
import type { LightboxAsset } from "./Lightbox";

const Lightbox = dynamic(() => import("./Lightbox").then((m) => m.Lightbox), {
  ssr: false,
});

interface MasonryGalleryProps {
  assets: PortfolioAsset[];
  categories: string[];
}

// Strict aspect ratio bounds for grid cards:
// Min ratio: 0.55 (wide landscape/banners)
// Max ratio: 1.40 (tall editorial portrait)
const MIN_CARD_RATIO = 0.55;
const MAX_CARD_RATIO = 1.40;

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

  // If a category has fewer items (e.g. 3D has 5, Packaging has 7), cap columns
  // so items are gracefully distributed and no empty columns remain
  const effectiveColumns = useMemo(() => {
    if (filteredAssets.length === 0) return 1;
    return Math.max(1, Math.min(columns, Math.ceil(filteredAssets.length / 2)));
  }, [filteredAssets.length, columns]);

  // Height-Balanced Greedy Distribution:
  // 1. Row 1 (first effectiveColumns items) is laid out horizontally left-to-right across columns.
  // 2. Subsequent items are greedily assigned to the currently shortest column using the EXACT
  //    clamped aspect ratio that is applied in CSS.
  // Because the mathematical accumulator in JS and the CSS aspectRatio in the DOM use the EXACT same ratio,
  // all columns finish at virtually the exact same height (<220px variance), completely eliminating gaps!
  const columnData = useMemo(() => {
    const numCols = effectiveColumns;
    const cols: {
      asset: PortfolioAsset;
      index: number;
      dim: { w: number; h: number };
      clampedRatio: number;
    }[][] = Array.from({ length: numCols }, () => []);
    const colHeights = new Array(numCols).fill(0);

    filteredAssets.forEach((asset, idx) => {
      const dim = getAssetDimensions(asset.src);
      const rawRatio = dim.h / dim.w;
      const clampedRatio = Math.min(Math.max(rawRatio, MIN_CARD_RATIO), MAX_CARD_RATIO);
      // Normalized card height unit (gap = 24px)
      const estHeight = clampedRatio * 300 + 24;

      let targetCol = 0;
      if (idx < numCols) {
        targetCol = idx;
      } else {
        let minH = colHeights[0];
        for (let c = 1; c < numCols; c++) {
          if (colHeights[c] < minH) {
            minH = colHeights[c];
            targetCol = c;
          }
        }
      }

      cols[targetCol].push({ asset, index: idx, dim, clampedRatio });
      colHeights[targetCol] += estHeight;
    });

    return cols;
  }, [filteredAssets, effectiveColumns]);

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

      {/* Masonry Grid with Height-Balanced Greedy Distribution */}
      <div 
        className="grid gap-6 items-start w-full"
        style={{
          gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`
        }}
      >
        {columnData.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6 min-w-0">
            {col.map(({ asset, index, dim, clampedRatio }) => (
              <div 
                key={`${asset.src}-${colIdx}-${index}`}
                data-cursor="expand"
                onClick={() => setActiveAsset({ src: asset.src, type: asset.type })}
                className="overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-[var(--color-border-subtle)] group hover:cursor-none cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[var(--color-accent)]/40 hover:-translate-y-0.5"
              >
                {asset.type === "video" ? (
                  <div 
                    className="relative w-full bg-slate-900"
                    style={{ aspectRatio: `1000 / ${Math.round(1000 * clampedRatio)}` }}
                  >
                    <video
                      src={asset.src}
                      poster={asset.src.replace(/\.mp4$/i, "-poster.jpg")}
                      preload="metadata"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center block"
                    />
                  </div>
                ) : (
                  <div 
                    className="relative w-full bg-slate-100 dark:bg-slate-800/30"
                    style={{ aspectRatio: `1000 / ${Math.round(1000 * clampedRatio)}` }}
                  >
                    <Image
                      src={asset.src}
                      alt={asset.alt || `KLEE Technologies ${asset.category || 'Portfolio'} - ${asset.src.split('/').pop()?.replace(/[-_]/g, ' ').split('.')[0] || 'Image'}`}
                      width={dim.w}
                      height={dim.h}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1200px) 25vw, 20vw"
                      className="w-full h-full object-cover object-top block transition-transform duration-700 group-hover:scale-105"
                      loading={index < 10 ? "eager" : "lazy"}
                    />
                  </div>
                )}
              </div>
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
