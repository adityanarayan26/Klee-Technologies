"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageScrollCardProps {
  pages: string[];
  title: string;
}

function ImageScrollCard({ pages, title }: ImageScrollCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const scrollState = useRef({
    direction: 1,
    lastTime: 0,
    pauseUntil: 0,
    exactScrollTop: 0,
  });

  const animateScroll = (time: number) => {
    requestRef.current = requestAnimationFrame(animateScroll);
    if (!scrollRef.current) return;

    const state = scrollState.current;

    if (isHovered) {
      state.lastTime = time;
      state.exactScrollTop = scrollRef.current.scrollTop;
      return;
    }

    if (state.lastTime === 0) state.lastTime = time;
    const deltaTime = time - state.lastTime;
    state.lastTime = time;

    if (time < state.pauseUntil) {
      state.exactScrollTop = scrollRef.current.scrollTop;
      return;
    }

    const { scrollHeight, clientHeight } = scrollRef.current;

    if (scrollHeight > clientHeight) {
      const speed = 35;
      const deltaScroll = (speed * deltaTime) / 1000;
      state.exactScrollTop += deltaScroll * state.direction;

      if (state.exactScrollTop + clientHeight >= scrollHeight - 1) {
        state.exactScrollTop = scrollHeight - clientHeight;
        state.direction = -1;
        state.pauseUntil = time + 2000;
      } else if (state.exactScrollTop <= 0) {
        state.exactScrollTop = 0;
        state.direction = 1;
        state.pauseUntil = time + 2000;
      }

      scrollRef.current.scrollTop = state.exactScrollTop;
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="flex flex-col bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-xl overflow-hidden shadow-subtle group h-[500px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header bar */}
      <div className="px-4 py-3 border-b border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] flex items-center justify-between z-10 shrink-0">
        <span className="text-sm font-medium text-[var(--color-foreground)] truncate pr-4">
          {title}
        </span>
        <span className="text-xs text-[var(--color-muted)] shrink-0 px-2 py-1 bg-[var(--color-background-primary)] rounded-md border border-[var(--color-border-subtle)]">
          {pages.length} Pages
        </span>
      </div>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        data-lenis-prevent="true"
        className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar bg-[#f0f2f5]"
      >
        <div className="flex flex-col items-center py-4 gap-4 w-full">
          {pages.map((page, idx) => (
            <div key={idx} className="shadow-md bg-white w-full px-4">
              <Image
                src={page}
                alt={`${title} - Page ${idx + 1}`}
                width={800}
                height={1132}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto"
                loading="lazy"
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const PDF_DATA = [
  {
    title: "KLEE Tech Profile 2026",
    pages: [
      "/portfolio-pdf-images/klee-technologies-profile-2026-page-1.jpg",
      "/portfolio-pdf-images/klee-technologies-profile-2026-page-2.jpg",
      "/portfolio-pdf-images/klee-technologies-profile-2026-page-3.jpg",
      "/portfolio-pdf-images/klee-technologies-profile-2026-page-4.jpg",
      "/portfolio-pdf-images/klee-technologies-profile-2026-page-5.jpg",
    ],
  },
  {
    title: "TR Web Guidelines",
    pages: [
      "/portfolio-pdf-images/tr-web-brand-guidelines-page-1.jpg",
      "/portfolio-pdf-images/tr-web-brand-guidelines-page-2.jpg",
      "/portfolio-pdf-images/tr-web-brand-guidelines-page-3.jpg",
      "/portfolio-pdf-images/tr-web-brand-guidelines-page-4.jpg",
      "/portfolio-pdf-images/tr-web-brand-guidelines-page-5.jpg",
    ],
  },
  {
    title: "Anasa Branding",
    pages: ["/portfolio-pdf-images/branding-anasa-page-1.jpg"],
  },
  {
    title: "Dhanaayu Branding",
    pages: ["/portfolio-pdf-images/dhanaayu-logo-branding-page-1.jpg"],
  },
  {
    title: "Trulay Branding",
    pages: ["/portfolio-pdf-images/trulay-branding-v2-page-1.jpg"],
  },
  {
    title: "RC Branding",
    pages: ["/portfolio-pdf-images/rc-branding-final-v3-page-1.jpg"],
  },
  {
    title: "TR Logo Branding",
    pages: ["/portfolio-pdf-images/tr-logo-branding-page-1.jpg"],
  },
  {
    title: "Railcab Visiting Card",
    pages: [
      "/portfolio-pdf-images/railcab-visiting-card-page-1.jpg",
      "/portfolio-pdf-images/railcab-visiting-card-page-2.jpg",
      "/portfolio-pdf-images/railcab-visiting-card-page-3.jpg",
    ],
  },
];

export function PDFGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PDF_DATA.map((pdf, idx) => (
        <ImageScrollCard key={idx} title={pdf.title} pages={pdf.pages} />
      ))}
    </div>
  );
}
