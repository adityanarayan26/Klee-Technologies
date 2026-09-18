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
    src: "/client_logos/Akshara_finserv_logo.png",
    category: "Enterprise & SaaS",
    industry: "FinTech & Wealth",
    engagement: "Enterprise Platform",
  },
  {
    id: "amasia-solar",
    name: "Amasia Solar",
    src: "/client_logos/amasia_solar_logo.png",
    category: "CleanTech & Energy",
    industry: "Solar & CleanTech",
    engagement: "Digital Platform & Web",
  },
  {
    id: "amit-construction",
    name: "Amit Construction",
    src: "/client_logos/Amit_construction_logo.jpeg",
    category: "Logistics & Infra",
    industry: "Civil Infrastructure",
    engagement: "Brand & Corporate Web",
  },
  {
    id: "anasa-spices",
    name: "Anasa Spices",
    src: "/client_logos/Anasa_spices_logo.png",
    category: "Retail & Lifestyle",
    industry: "FMCG & Organic Spices",
    engagement: "E-Commerce & Branding",
  },
  {
    id: "dec-industries",
    name: "DEC Industries",
    src: "/client_logos/DEC_industries_logo.png",
    category: "Enterprise & SaaS",
    industry: "Industrial Manufacturing",
    engagement: "Digital Product Architecture",
  },
  {
    id: "flyatease",
    name: "Flyatease",
    src: "/client_logos/Flyatease_logo.jpeg",
    category: "Education & Training",
    industry: "Aviation & Travel Tech",
    engagement: "Booking & SaaS Portal",
  },
  {
    id: "lookatshoez",
    name: "Lookatshoez",
    src: "/client_logos/Lookatshoez_logo.jpeg",
    category: "Retail & Lifestyle",
    industry: "Footwear & Fashion",
    engagement: "D2C E-Commerce Experience",
  },
  {
    id: "mahasai",
    name: "Mahasai",
    src: "/client_logos/Mahasai_logo.png",
    category: "Logistics & Infra",
    industry: "Real Estate & Housing",
    engagement: "PropTech Portal & Brand",
  },
  {
    id: "mane-sports",
    name: "Mane Sports",
    src: "/client_logos/Mane_sports_logo.png",
    category: "Retail & Lifestyle",
    industry: "Athletic & Sports Tech",
    engagement: "Brand System & Web App",
  },
  {
    id: "nutrigreenz",
    name: "Nutrigreenz",
    src: "/client_logos/Nutrigreenz_logo.jpeg",
    category: "Retail & Lifestyle",
    industry: "Organic Food & Nutrition",
    engagement: "Product Showcase & Growth",
  },
  {
    id: "onyxsiri",
    name: "Onyxsiri",
    src: "/client_logos/Onyxsiri_logo.png",
    category: "Retail & Lifestyle",
    industry: "Jewelry & Luxury Retail",
    engagement: "Luxury Web & Catalog",
  },
  {
    id: "railcab",
    name: "Railcab",
    src: "/client_logos/Railcab_logo.png",
    category: "Logistics & Infra",
    industry: "Mobility & Transit",
    engagement: "Logistics Application",
  },
  {
    id: "sunshinepetworld",
    name: "Sunshine Petworld",
    src: "/client_logos/Sunshinepetworld_logo.jpeg",
    category: "Retail & Lifestyle",
    industry: "Pet Care & Retail",
    engagement: "Omnichannel Experience",
  },
  {
    id: "systatic-inc",
    name: "Systatic Inc",
    src: "/client_logos/Systatic_inc_logo.jpeg",
    category: "Enterprise & SaaS",
    industry: "Cloud & Enterprise Tech",
    engagement: "SaaS Application Design",
  },
  {
    id: "true-renewable",
    name: "True Renewable",
    src: "/client_logos/True_renewable_logo.png",
    category: "CleanTech & Energy",
    industry: "Green & Renewable Energy",
    engagement: "CleanTech Dashboard",
  },
  {
    id: "truelay",
    name: "Truelay",
    src: "/client_logos/Truelay_logo.jpeg",
    category: "Enterprise & SaaS",
    industry: "Fintech & Payments",
    engagement: "Fintech Web Architecture",
  },
  {
    id: "ubase-infra",
    name: "Ubase Infra",
    src: "/client_logos/Ubase_infra_logo.jpeg",
    category: "CleanTech & Energy",
    industry: "Urban Infrastructure",
    engagement: "Enterprise Digital Presence",
  },
  {
    id: "vit",
    name: "VIT",
    src: "/client_logos/VIT_logo.jpeg",
    category: "Education & Training",
    industry: "Higher Education & Research",
    engagement: "Student Programs & Portal",
  },
  {
    id: "vkias",
    name: "V.K. IAS Academy",
    src: "/client_logos/VKIAS_logo.png",
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

      {/* Client Logos Grid */}
      <div className="pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredClients.map((client, idx) => (
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
