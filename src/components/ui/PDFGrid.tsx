"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const AutoScrollPDF = dynamic(
  () => import("@/components/ui/AutoScrollPDF").then((mod) => mod.AutoScrollPDF),
  { ssr: false, loading: () => <div className="h-[500px] w-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-xl animate-pulse"></div> }
);

function LazyPDFWrapper({ url, title }: { url: string, title: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full w-full min-h-[500px]">
      {isVisible ? (
        <AutoScrollPDF url={url} title={title} />
      ) : (
        <div className="h-[500px] w-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-xl animate-pulse"></div>
      )}
    </div>
  );
}

export function PDFGrid() {
  const pdfs = [
    { url: "/portfolio-pdfs/KLEE TECHNOLOGIES_PROFILE 2026.pdf", title: "KLEE Tech Profile 2026" },
    { url: "/portfolio-pdfs/TR WEB BRAND GUIDELINES.pdf", title: "TR Web Guidelines" },
    { url: "/portfolio-pdfs/Branding Anasa.pdf", title: "Anasa Branding" },
    { url: "/portfolio-pdfs/Dhanaayu logo branding.pdf", title: "Dhanaayu Branding" },
    { url: "/portfolio-pdfs/Trulay Branding V2.pdf", title: "Trulay Branding" },
    { url: "/portfolio-pdfs/RC branding final V3.pdf", title: "RC Branding" },
    { url: "/portfolio-pdfs/TR Logo Branding.pdf", title: "TR Logo Branding" },
    { url: "/portfolio-pdfs/RAilcab Visiting card.pdf", title: "Railcab Visiting Card" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pdfs.map((pdf, idx) => (
        <LazyPDFWrapper key={idx} url={pdf.url} title={pdf.title} />
      ))}
    </div>
  );
}
