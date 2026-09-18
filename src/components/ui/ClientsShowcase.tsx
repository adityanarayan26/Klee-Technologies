"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CLIENT_LOGOS } from "./LogoMarquee";
import { 
  Building2, 
  Globe2, 
  TrendingUp,
} from "lucide-react";

export interface ClientItem {
  id: string;
  name: string;
  src: string;
}

export const CLIENTS_DATA: ClientItem[] = CLIENT_LOGOS.map((client, index) => ({
  id: `client-${index + 1}`,
  name: client.name,
  src: client.src,
}));

export function ClientsShowcase() {
  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <Reveal variant="slide-up">
          <span className="type-eyebrow text-[var(--color-accent)] mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-accent-subtle)] px-3.5 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
            PARTNERSHIPS & CLIENTELE
          </span>
        </Reveal>
        
        <Reveal variant="slide-up" delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium tracking-tight text-[var(--color-foreground)] mb-4">
            Trusted by Dynamic Startups & Global Enterprises
          </h2>
        </Reveal>
        
        <Reveal variant="slide-up" delay={0.14}>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            Since 2018, KLEE Technologies has collaborated with innovative businesses across diverse sectors to design, engineer, and scale impactful digital products.
          </p>
        </Reveal>

        {/* Quick Highlights Strip */}
        <Reveal variant="slide-up" delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs text-[var(--color-foreground)] font-medium">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
              <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>21+ Industry Leaders</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>200+ Delivered Projects</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
              <Globe2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Global Client Reach</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Client Logos Grid */}
      <div className="pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {CLIENTS_DATA.map((client, idx) => (
            <Reveal key={client.id} variant="scale" delay={(idx % 10) * 0.05}>
              <div className="flex items-center justify-center p-4 sm:p-6 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-[var(--color-accent)]/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative w-full aspect-[3/2] flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </div>
  );
}
