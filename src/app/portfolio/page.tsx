import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { PDFGrid } from "@/components/ui/PDFGrid";
import { MasonryGallery } from "@/components/ui/MasonryGallery";
import { CorporateAdsSection } from "@/components/ui/CorporateAdsSection";
import { ALL_ASSETS } from "@/data/portfolioAssets";

export const metadata: Metadata = {
  title: "Portfolio | 200+ Digital & Technology Projects | KLEE Technologies",
  description:
    "Explore KLEE Technologies' portfolio of 200+ projects across software development, SaaS, UI/UX, branding, graphic design and digital solutions.",
};

const CATEGORIES = [
  {
    title: "Digital Products",
    desc: "Web applications, platforms and digital products."
  },
  {
    title: "SaaS",
    desc: "Scalable software products designed for digital businesses."
  },
  {
    title: "Mobile & Web",
    desc: "User-focused digital experiences across devices."
  },
  {
    title: "UI/UX",
    desc: "Interfaces designed around clarity, usability and engagement."
  },
  {
    title: "Branding & Creative",
    desc: "Identities and visual systems built to stand out."
  },
  {
    title: "Digital Marketing",
    desc: "Campaigns and digital communication built around growth."
  },
  {
    title: "Government & Institutional",
    desc: "Technology solutions supporting institutional and public-sector initiatives."
  }
];

export default function PortfolioPage() {
  return (
    <>
      {/* Portfolio Hero */}
      <Section spacing="hero" background="default">
        <Container size="default">
          <div className="max-w-4xl">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">PORTFOLIO</span>
            </Reveal>
            <TextReveal as="h1" className="type-display text-[var(--color-foreground)] font-medium mb-6 text-balance">
              Ideas We've Turned Into Reality.
            </TextReveal>
            <Reveal variant="slide-up" delay={0.1}>
              <div className="space-y-4 type-body-large text-[var(--color-muted)] max-w-3xl leading-relaxed">
                <p>
                  <strong>200+ client projects</strong> delivered across the world.
                </p>
                <p>
                  Every project represents a problem understood, an idea shaped and a solution delivered.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Portfolio Categories */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="mb-12">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">CAPABILITIES</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">
                What We Deliver
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} variant="slide-up" delay={i * 0.05}>
                <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl h-full">
                  <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-3">{cat.title}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{cat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Vmovexa SaaS Project */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <div className="mb-10">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">FEATURED SAAS PLATFORM</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4 uppercase">
                Vmovexa SaaS
              </h2>
              <p className="type-body text-[var(--color-muted)] max-w-3xl leading-relaxed">
                VMOVEXA SaaS Portal is the cloud-based intelligence and orchestration layer of the VMOVEXA ecosystem, designed to connect connected vehicles, edge devices, digital displays, fleet operators, advertisers, government agencies and passengers through one unified platform.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["React/Next.js", "NestJS/FastAPI", "PostgreSQL", "Redis", "AWS", "MQTT", "WebSockets", "Mapbox"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-muted)] text-xs font-medium rounded-full border border-[var(--color-border-subtle)]">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="slide-up" delay={0.1}>
            <div className="mt-8 flex flex-col gap-6">
              {/* Main Video - Full Width, Natural Aspect Ratio */}
              <div className="w-full rounded-3xl border border-[var(--color-border-subtle)] overflow-hidden relative shadow-lg group bg-black">
                <video 
                  src="/portfolio/videos/vmovexa-demo.mp4" 
                  poster="/portfolio/featured/vmovexa-poster.jpg"
                  autoPlay loop muted playsInline 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10 z-10">
                  Platform Demo
                </div>
              </div>

              {/* 4 Images Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="aspect-[4/3] rounded-3xl border border-[var(--color-border-subtle)] bg-slate-100 dark:bg-slate-800/40 overflow-hidden relative shadow-lg group">
                  <Image 
                    src="/vmovexa_new/VMOVEXA SAAS PROJECT 1.png" 
                    alt="SaaS Project" 
                    fill 
                    sizes="(max-width: 640px) 50vw, 25vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                    Dashboard
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-3xl border border-[var(--color-border-subtle)] bg-slate-100 dark:bg-slate-800/40 overflow-hidden relative shadow-lg group">
                  <Image 
                    src="/vmovexa_new/VMOVEXA MOBILE APPLICATION PROJECT 2.png" 
                    alt="Mobile App" 
                    fill 
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                    Mobile App
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-3xl border border-[var(--color-border-subtle)] bg-slate-100 dark:bg-slate-800/40 overflow-hidden relative shadow-lg group">
                  <Image 
                    src="/vmovexa_new/VMOVEXA MOBILE APPLICATION PROJECT 3.png" 
                    alt="Mobile Experience" 
                    fill 
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                    Mobile UI
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-3xl border border-[var(--color-border-subtle)] bg-slate-100 dark:bg-slate-800/40 overflow-hidden relative shadow-lg group">
                  <Image 
                    src="/vmovexa_new/WhatsApp Image 2026-09-18 at 15.26.09.jpeg" 
                    alt="Additional Experience" 
                    fill 
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                    Platform
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* KSDC Project */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal variant="slide-up">
                <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">GOVERNMENT INITIATIVE</span>
                <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">
                  KSDC Application
                </h2>
                <h3 className="text-xl font-medium text-[var(--color-foreground)] mb-6">
                  Technology for Skill Development
                </h3>
                <div className="space-y-4 type-body text-[var(--color-muted)] leading-relaxed mb-8">
                  <p>
                    KLEE Technologies developed the KSDC application for the Telangana Government under a skill development program.
                  </p>
                  <p>
                    The project represents KLEE's ability to translate technology into solutions supporting large-scale skill development initiatives.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-muted)] text-xs font-medium rounded-full border border-[var(--color-border-subtle)]">Government Project</span>
                  <span className="px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-muted)] text-xs font-medium rounded-full border border-[var(--color-border-subtle)]">Application Development</span>
                  <span className="px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-muted)] text-xs font-medium rounded-full border border-[var(--color-border-subtle)]">Skill Development</span>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7">
              <Reveal variant="scale" delay={0.2}>
                <div className="aspect-square w-full max-w-2xl mx-auto rounded-3xl border border-[var(--color-border-subtle)] overflow-hidden relative shadow-2xl bg-[#060b11]">
                  <Image 
                    src="/portfolio/featured/ksdc-ts-govt-mobile-app.jpg" 
                    alt="KSDC Application - Telangana Government Skill Development Mobile App" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Corporate Advertisements & Brand Films */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <div className="max-w-3xl mb-12">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">COMMERCIALS & BROADCAST</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4 uppercase">
                Corporate Advertisement & TVCs
              </h2>
              <p className="type-body text-[var(--color-muted)] leading-relaxed">
                High-impact television commercials, corporate brand films, and campaign narratives crafted with cinematic precision, compelling storytelling, and measurable brand recall.
              </p>
            </Reveal>
          </div>

          <CorporateAdsSection />
        </Container>
      </Section>

      {/* Portfolio Philosophy */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="max-w-4xl">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">PHILOSOPHY</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-8">
                Every Project Has a Story.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Reveal variant="slide-up" delay={0.1}>
                <ul className="space-y-4 type-body text-[var(--color-muted)] list-none">
                  <li className="flex gap-3 items-start">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    Behind every interface is a user.
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    Behind every software product is a business problem.
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    Behind every brand is an ambition.
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal variant="slide-up" delay={0.2}>
              <div className="p-6 md:p-8 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl">
                <p className="type-body-large text-[var(--color-muted)] leading-relaxed">
                  Our portfolio is not simply a collection of screenshots. <br className="hidden md:block" />
                  <strong className="text-[var(--color-foreground)]">It is a record of problems solved and possibilities created.</strong>
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* BRAND GUIDELINES & PROFILES (PDF Showcase) */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="max-w-3xl mb-12 md:mb-16">
            <Reveal variant="slide-up">
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-6">
                Brand Guidelines & Profiles
              </h2>
              <p className="type-body text-[var(--color-muted)] leading-relaxed">
                Explore our comprehensive brand identity manuals and detailed profiles. Hover over any document to pause the auto-scroll and read it at your own pace.
              </p>
            </Reveal>
          </div>

          <PDFGrid />
        </Container>
      </Section>

      {/* Comprehensive Visual Portfolio (Masonry) */}
      <Section spacing="spacious" background="default" borderTop>
        <Container size="default">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">COMPLETE WORK</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-6">
                Our Project Archive
              </h2>
              <p className="type-body-large text-[var(--color-muted)] max-w-2xl mx-auto">
                Explore a comprehensive collection of our past work across various domains, ranging from branding and packaging to UI/UX and 3D visualization.
              </p>
            </Reveal>
          </div>
          
          <MasonryGallery 
            assets={ALL_ASSETS} 
            categories={["Branding", "UI/UX", "3D", "Packaging", "General"]} 
          />
        </Container>
      </Section>

      {/* Portfolio CTA */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default" className="text-center max-w-2xl mx-auto">
          <Reveal variant="slide-up">
            <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-8">Your Project Could Be Next.</h2>
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Start a Conversation
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
