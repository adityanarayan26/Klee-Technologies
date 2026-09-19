"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Star, CheckCircle2, Quote, Building2, Users } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: "all" | "saas" | "gov" | "branding" | "enterprise";
  categoryLabel: string;
  project: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  initials: string;
  gradient: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "vmovexa",
    name: "Rajesh Varma",
    role: "Co-Founder & VP Operations",
    company: "Vmovexa Global Logistics",
    category: "saas",
    categoryLabel: "SaaS & Logistics",
    project: "Vmovexa Cloud Fleet Platform",
    highlightMetric: "40% Dispatch Efficiency",
    quote: "KLEE Technologies engineered our core fleet logistics platform from whiteboard concept to production deployment. Their UI/UX team translated complex dispatch workflows into an effortless experience for our operators and drivers.",
    rating: 5,
    initials: "RV",
    gradient: "from-[#0e76bc] to-[#13a89e]",
  },
  {
    id: "ksdc",
    name: "Dr. K. Srinivas Rao",
    role: "Program Coordinator & Advisor",
    company: "Telangana Skill Development Initiative",
    category: "gov",
    categoryLabel: "Public Sector & Mobile",
    project: "KSDC Citizen Mobile App",
    highlightMetric: "10,000+ Enrolled Youth",
    quote: "Developing the KSDC application for the Telangana Government demanded strict uptime, intuitive multilingual UX, and zero-compromise security. KLEE delivered a solution that actively supports thousands of aspiring youths across the state.",
    rating: 5,
    initials: "SR",
    gradient: "from-[#13a89e] to-[#0284c7]",
  },
  {
    id: "dhanaayu",
    name: "Pooja Sundaram",
    role: "Head of Brand & Experience",
    company: "Dhanaayu Group",
    category: "branding",
    categoryLabel: "Branding & Identity",
    project: "Omnichannel Brand System",
    highlightMetric: "3.4x Brand Recall",
    quote: "KLEE conceptualized and executed our entire visual identity, packaging design, and digital touchpoints. They don't just produce pretty visuals—they build cohesive brand systems that resonate deeply with modern consumers.",
    rating: 5,
    initials: "PS",
    gradient: "from-[#0284c7] to-[#0e76bc]",
  },
  {
    id: "msappl",
    name: "Anand S. Murthy",
    role: "Managing Director",
    company: "Modern Steel Appliances (MSAPPL)",
    category: "branding",
    categoryLabel: "Commercials & TVCs",
    project: "National Commercial Campaign",
    highlightMetric: "Broadcast Nationwide",
    quote: "From scriptwriting to cinematic 3D renders and broadcast-grade commercial ads, KLEE executed our national campaigns with precision. Their team understands how to create stories that command attention across channels.",
    rating: 5,
    initials: "AM",
    gradient: "from-[#0e76bc] to-[#0a588c]",
  },
  {
    id: "nexapay",
    name: "Vikramaditya Sen",
    role: "Chief Technology Officer",
    company: "NexaPay Solutions",
    category: "enterprise",
    categoryLabel: "AI & Fintech",
    project: "Real-Time Payment Dashboard",
    highlightMetric: "Sub-50ms Latency",
    quote: "What stands out about KLEE is their proactive engineering mindset. They challenged our architectural assumptions, introduced smart AI-assisted workflows, and delivered performant code that integrated seamlessly with our core infrastructure.",
    rating: 5,
    initials: "VS",
    gradient: "from-[#13a89e] to-[#0e76bc]",
  },
  {
    id: "vit",
    name: "Prof. M. Ramachandran",
    role: "Dean of Industry Alliances",
    company: "Vijaya Institute of Technology (VIT)",
    category: "gov",
    categoryLabel: "Institutional Programs",
    project: "Student Industry Tech Mentorship",
    highlightMetric: "500+ Students Mentored",
    quote: "KLEE's industry-led technology workshops and internship programs have given our engineering students invaluable real-world experience. They bridge academic knowledge with high-velocity product standards better than anyone.",
    rating: 5,
    initials: "MR",
    gradient: "from-[#0284c7] to-[#13a89e]",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Stories" },
  { id: "saas", label: "SaaS & Mobile" },
  { id: "branding", label: "Branding & TVCs" },
  { id: "gov", label: "Gov & Institutions" },
  { id: "enterprise", label: "Enterprise & AI" },
] as const;

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTestimonials = activeCategory === "all" 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section className="relative py-24 sm:py-32 bg-[var(--color-background-primary)] border-t border-[var(--color-border-subtle)] overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0e76bc]/6 via-[#13a89e]/4 to-transparent blur-3xl opacity-70" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal variant="slide-up">
            <span className="type-eyebrow text-[var(--color-accent)] mb-3.5 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-accent-subtle)] px-3.5 py-1 text-xs font-semibold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
              CLIENT VOICES & PARTNERSHIPS
            </span>
          </Reveal>

          <Reveal variant="slide-up" delay={0.08}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-medium tracking-tight text-[var(--color-foreground)] mb-4">
              Trusted by Founders, Leaders & Institutions
            </h2>
          </Reveal>

          <Reveal variant="slide-up" delay={0.14}>
            <p className="type-body text-[var(--color-muted)] max-w-2xl leading-relaxed">
              Discover what visionary leaders across SaaS, government initiatives, enterprise technology, and consumer brands say about partnering with KLEE Technologies.
            </p>
          </Reveal>

          {/* Social Proof Metric Strip */}
          <Reveal variant="slide-up" delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-medium text-[var(--color-foreground)]">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] shadow-xs">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold ml-1">4.9 / 5.0</span>
                <span className="text-[var(--color-muted)]">Satisfaction</span>
              </div>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>200+ Delivered Projects</span>
              </div>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] shadow-xs">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                <span>96% Client Retention</span>
              </div>
            </div>
          </Reveal>

          {/* Category Filter Pills */}
          <Reveal variant="slide-up" delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-[var(--color-foreground)] shadow-xs border border-[var(--color-border-subtle)] font-semibold"
                        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/50"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredTestimonials.map((item, idx) => (
            <Reveal key={item.id} variant="slide-up" delay={idx * 0.08}>
              <SpotlightCard 
                spotlightColor="rgba(14, 118, 188, 0.14)"
                className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)]/35 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Decorative watermark quote mark */}
                <div className="absolute top-6 right-6 text-gray-100 group-hover:text-blue-50/70 transition-colors pointer-events-none select-none">
                  <Quote className="w-12 h-12 stroke-[1.2] rotate-180 opacity-60" />
                </div>

                <div className="relative z-10">
                  {/* Top Bar: Category badge & Stars */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)] px-2.5 py-1 rounded-md bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/15">
                      {item.categoryLabel}
                    </span>

                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-[14.5px] sm:text-[15px] text-[var(--color-foreground)] leading-relaxed mb-6 font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Author Details & Verified Metric Strip */}
                <div className="relative z-10 pt-5 border-t border-[var(--color-border-subtle)] flex flex-col gap-3.5 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Gradient Avatar */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.gradient} text-white font-semibold text-xs flex items-center justify-center shadow-xs shrink-0 tracking-wide`}>
                      {item.initials}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-[var(--color-foreground)] truncate">
                          {item.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0e76bc] shrink-0" aria-label="Verified Client" />
                      </div>
                      <span className="text-xs text-[var(--color-muted)] truncate">
                        {item.role} · {item.company}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="flex items-center justify-between text-[11px] text-[var(--color-muted)] px-3 py-1.5 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                    <span className="truncate font-medium text-[var(--color-foreground)]">
                      {item.project}
                    </span>
                    <span className="font-semibold text-[var(--color-accent)] shrink-0 ml-2">
                      {item.highlightMetric}
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
