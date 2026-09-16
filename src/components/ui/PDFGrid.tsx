"use client";

import React from "react";
import dynamic from "next/dynamic";

const AutoScrollPDF = dynamic(
  () => import("@/components/ui/AutoScrollPDF").then((mod) => mod.AutoScrollPDF),
  { ssr: false, loading: () => <div className="h-[500px] bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-xl animate-pulse"></div> }
);

export function PDFGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AutoScrollPDF url="/portfolio-pdfs/KLEE TECHNOLOGIES_PROFILE 2026.pdf" title="KLEE Tech Profile 2026" />
      <AutoScrollPDF url="/portfolio-pdfs/TR WEB BRAND GUIDELINES.pdf" title="TR Web Guidelines" />
      <AutoScrollPDF url="/portfolio-pdfs/Branding Anasa.pdf" title="Anasa Branding" />
      <AutoScrollPDF url="/portfolio-pdfs/Dhanaayu logo branding.pdf" title="Dhanaayu Branding" />
      <AutoScrollPDF url="/portfolio-pdfs/Trulay Branding V2.pdf" title="Trulay Branding" />
      <AutoScrollPDF url="/portfolio-pdfs/RC branding final V3.pdf" title="RC Branding" />
      <AutoScrollPDF url="/portfolio-pdfs/TR Logo Branding.pdf" title="TR Logo Branding" />
      <AutoScrollPDF url="/portfolio-pdfs/RAilcab Visiting card.pdf" title="Railcab Visiting Card" />
    </div>
  );
}
