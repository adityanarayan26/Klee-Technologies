"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { LogoMarquee } from "./LogoMarquee";
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
      <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden bg-gradient-to-b from-[var(--color-background-secondary)]/70 to-[var(--color-background-primary)] py-8">
        {/* Soft edge blur masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--color-background)] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--color-background)] to-transparent z-20 pointer-events-none" />

        <div className="space-y-4">
          <LogoMarquee 
            items={row1} 
            baseVelocity={40} 
            colored={true}
            className="bg-transparent border-none py-2" 
          />
          <LogoMarquee 
            items={row2} 
            baseVelocity={45} 
            reverse={true} 
            colored={true}
            className="bg-transparent border-none py-2" 
          />
        </div>

      
      </div>

    </div>
  );
}
