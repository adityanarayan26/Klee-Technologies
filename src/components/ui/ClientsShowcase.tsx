"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { 
  Building2, 
  Sparkles, 
  Layers, 
  Globe2, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  GraduationCap
} from "lucide-react";

export interface ClientItem {
  id: string;
  name: string;
  src: string;
  category: "Enterprise & SaaS" | "CleanTech & Energy" | "Retail & Lifestyle" | "Logistics & Infra" | "Education & Training";
  industry: string;
  engagement: string;
  accentColor?: string;
}

export const CLIENTS_DATA: ClientItem[] = [
  {
    id: "akshara-finserv",
    name: "Akshara Finserv",
    src: "/clients/akshara-finserv.png",
    category: "Enterprise & SaaS",
    industry: "FinTech & Wealth",
    engagement: "Enterprise Platform",
  },
  {
    id: "amasia-solar",
    name: "Amasia Solar",
    src: "/clients/amasia-solar.png",
    category: "CleanTech & Energy",
    industry: "Solar & CleanTech",
    engagement: "Digital Platform & Web",
  },
  {
    id: "amit-construction",
    name: "Amit Construction",
    src: "/clients/amit-construction.png",
    category: "Logistics & Infra",
    industry: "Civil Infrastructure",
    engagement: "Brand & Corporate Web",
  },
  {
    id: "anasa-spices",
    name: "Anasa Spices",
    src: "/clients/anasa-spices.png",
    category: "Retail & Lifestyle",
    industry: "FMCG & Organic Spices",
    engagement: "E-Commerce & Branding",
  },
  {
    id: "dec-industries",
    name: "DEC Industries",
    src: "/clients/dec-industries.png",
    category: "Enterprise & SaaS",
    industry: "Industrial Manufacturing",
    engagement: "Digital Product Architecture",
  },
  {
    id: "flyatease",
    name: "Flyatease",
    src: "/clients/flyatease.png",
    category: "Education & Training",
    industry: "Aviation & Travel Tech",
    engagement: "Booking & SaaS Portal",
  },
  {
    id: "lookatshoez",
    name: "Lookatshoez",
    src: "/clients/lookatshoez.png",
    category: "Retail & Lifestyle",
    industry: "Footwear & Fashion",
    engagement: "D2C E-Commerce Experience",
  },
  {
    id: "mahasai",
    name: "Mahasai",
    src: "/clients/mahasai.png",
    category: "Logistics & Infra",
    industry: "Real Estate & Housing",
    engagement: "PropTech Portal & Brand",
  },
  {
    id: "mane-sports",
    name: "Mane Sports",
    src: "/clients/mane-sports.png",
    category: "Retail & Lifestyle",
    industry: "Athletic & Sports Tech",
    engagement: "Brand System & Web App",
  },
  {
    id: "nutrigreenz",
    name: "Nutrigreenz",
    src: "/clients/nutrigreenz.png",
    category: "Retail & Lifestyle",
    industry: "Organic Food & Nutrition",
    engagement: "Product Showcase & Growth",
  },
  {
    id: "onyxsiri",
    name: "Onyxsiri",
    src: "/clients/onyxsiri.png",
    category: "Retail & Lifestyle",
    industry: "Jewelry & Luxury Retail",
    engagement: "Luxury Web & Catalog",
  },
  {
    id: "railcab",
    name: "Railcab",
    src: "/clients/railcab.png",
    category: "Logistics & Infra",
    industry: "Mobility & Transit",
    engagement: "Logistics Application",
  },
  {
    id: "sunshinepetworld",
    name: "Sunshine Petworld",
    src: "/clients/sunshinepetworld.png",
    category: "Retail & Lifestyle",
    industry: "Pet Care & Retail",
    engagement: "Omnichannel Experience",
  },
  {
    id: "systatic-inc",
    name: "Systatic Inc",
    src: "/clients/systatic-inc.png",
    category: "Enterprise & SaaS",
    industry: "Cloud & Enterprise Tech",
    engagement: "SaaS Application Design",
  },
  {
    id: "true-renewable",
    name: "True Renewable",
    src: "/clients/true-renewable.png",
    category: "CleanTech & Energy",
    industry: "Green & Renewable Energy",
    engagement: "CleanTech Dashboard",
  },
  {
    id: "truelay",
    name: "Truelay",
    src: "/clients/truelay.png",
    category: "Enterprise & SaaS",
    industry: "Fintech & Payments",
    engagement: "Fintech Web Architecture",
  },
  {
    id: "ubase-infra",
    name: "Ubase Infra",
    src: "/clients/ubase-infra.png",
    category: "CleanTech & Energy",
    industry: "Urban Infrastructure",
    engagement: "Enterprise Digital Presence",
  },
  {
    id: "vit",
    name: "VIT",
    src: "/clients/vit.png",
    category: "Education & Training",
    industry: "Higher Education & Research",
    engagement: "Student Programs & Portal",
  },
  {
    id: "vkias",
    name: "V.K. IAS Academy",
    src: "/clients/vkias.png",
    category: "Education & Training",
    industry: "Civil Services EdTech",
    engagement: "EdTech Learning Platform",
  },
];

const CATEGORIES = [
  "All",
  "Enterprise & SaaS",
  "CleanTech & Energy",
  "Retail & Lifestyle",
  "Logistics & Infra",
  "Education & Training",
] as const;

export function ClientsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredClients = CLIENTS_DATA.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  // Split into 2 rows for the dual-speed infinite marquee
  const row1 = CLIENTS_DATA.slice(0, 10);
  const row2 = CLIENTS_DATA.slice(10);

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
              <span>19+ Industry Leaders</span>
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

      {/* UNIQUE ELEMENT 1: Dual-Track Floating Infinite Ticker */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-gradient-to-b from-[var(--color-background-secondary)]/70 to-[var(--color-background-primary)] py-8 shadow-xs">
        {/* Soft edge blur masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--color-background)] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--color-background)] to-transparent z-20 pointer-events-none" />

        <div className="space-y-4">
          {/* Row 1 - Left to Right */}
          <div className="flex w-fit animate-marquee items-center hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
            {[...row1, ...row1, ...row1].map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="flex-shrink-0 mx-2.5 sm:mx-3 px-5 py-3 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-[var(--color-accent)]/40 hover:-translate-y-1 transition-all duration-300 group flex items-center gap-3"
              >
                <div className="relative w-28 sm:w-32 h-10 sm:h-12 flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="140px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Right to Left (Reverse direction) */}
          <div className="flex w-fit items-center hover:[animation-play-state:paused] [animation:marquee_45s_linear_infinite_reverse]" style={{ animationDuration: '45s' }}>
            {[...row2, ...row2, ...row2].map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="flex-shrink-0 mx-2.5 sm:mx-3 px-5 py-3 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-[var(--color-accent)]/40 hover:-translate-y-1 transition-all duration-300 group flex items-center gap-3"
              >
                <div className="relative w-28 sm:w-32 h-10 sm:h-12 flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="140px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] font-medium text-[var(--color-muted)] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>Interactive Showcase • Hover any logo to pause</span>
        </p>
      </div>

      {/* UNIQUE ELEMENT 2: Interactive Industry Bento Grid with Filter Pills */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-[var(--color-foreground)]">
              Explore by Industry Sector
            </h3>
            <p className="text-xs text-[var(--color-muted)] mt-0.5">
              Filtered portfolio partners across specialized domains
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? CLIENTS_DATA.length
                  : CLIENTS_DATA.filter((c) => c.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[var(--color-accent)] text-white shadow-xs"
                      : "bg-[var(--color-background-secondary)] text-[var(--color-muted)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:border-[var(--color-accent)]/40 hover:shadow-[0_12px_30px_-8px_rgba(14,118,188,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Logo Frame - Full Color Display */}
                <div className="relative w-full h-24 sm:h-28 rounded-xl bg-[var(--color-background-secondary)]/80 p-3 flex items-center justify-center mb-3.5 border border-[var(--color-border-subtle)]/60 group-hover:bg-white transition-colors duration-300 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                      {client.name}
                    </h4>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded-full shrink-0">
                      {client.category.split(" ")[0]}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--color-muted)] font-medium">
                    {client.industry}
                  </p>

                  <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] text-[var(--color-muted)]">
                    <span className="truncate">{client.engagement}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
