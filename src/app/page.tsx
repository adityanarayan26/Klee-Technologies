import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { TextReveal } from "@/components/motion/TextReveal";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Marquee } from "@/components/ui/Marquee";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export const metadata: Metadata = {
  title: "KLEE Technologies — Creative Digital Agency & Technology Studio",
  description:
    "Creative Technology and Design Studio combining Software Engineering, UI/UX Design, SaaS, and Digital Growth.",
};

const ECOSYSTEM_MARQUEE = [
  "T-Hub Hyderabad HQ",
  "DPIIT Recognized Startup",
  "MSME Certified Enterprise",
  "ISO Quality Aligned",
  "AICTE Linked Mentorship",
  "Enterprise Software Architecture",
  "Scalable SaaS Platforms",
  "Human-Centric UI/UX Design",
  "Digital Growth Engineering",
  "200+ Global Client Deployments",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="hero" background="default">
        <Container size="default">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <Reveal variant="slide-up">
              <div className="mb-4">
                <span className="type-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/10 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  Creative Technology Studio
                </span>
              </div>
            </Reveal>

            {/* Editorial Mask Text Reveal */}
            <TextReveal
              as="h1"
              className="type-display text-[var(--color-foreground)] font-medium tracking-tight text-balance mb-6"
            >
              Engineering impact through design, technology & growth.
            </TextReveal>

            {/* Description & CTAs */}
            <Reveal variant="slide-up" delay={0.2}>
              <p className="type-body-large text-[var(--color-muted)] max-w-2xl leading-relaxed text-balance mb-8">
                Founded in 2018 at T-Hub Hyderabad, KLEE Technologies builds
                transformative digital experiences, enterprise software, and scalable
                SaaS products for forward-looking enterprises.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  showArrow
                  arrowDirection="right"
                >
                  Start a Project
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  showArrow
                  arrowDirection="up-right"
                >
                  Explore Capabilities
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Showcase Media with Subtle Parallax Depth */}
          <Reveal variant="scale" delay={0.25}>
            <div className="mt-8 md:mt-12">
              <ParallaxMedia offset={20}>
                <MediaPlaceholder
                  aspectRatio="wide"
                  label="Showcase Reel Placeholder"
                  sublabel="Autoplay showcase video / interactive showcase will be mounted here"
                  isVideo
                />
              </ParallaxMedia>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Brand Credentials & Scroll-Animated Metric Strip */}
      <Section spacing="compact" background="secondary" borderTop borderBottom>
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal variant="slide-up" delay={0.05}>
              <p className="text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--color-foreground)]">
                <AnimatedCounter value={2018} from={1980} duration={1.6} />
              </p>
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mt-1">
                Established
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.12}>
              <p className="text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--color-foreground)]">
                <AnimatedCounter value={200} suffix="+" duration={1.8} />
              </p>
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mt-1">
                Global Projects
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.19}>
              <p className="text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--color-foreground)]">
                <AnimatedCounter value={500} suffix="+" duration={2} />
              </p>
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mt-1">
                Interns Mentored
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.26}>
              <p className="text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--color-foreground)]">
                T-Hub
              </p>
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mt-1">
                Hyderabad HQ
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Smooth Infinite Marquee Ticker */}
      <div className="py-4 border-b border-[var(--color-border-subtle)] bg-white overflow-hidden">
        <Marquee speed={32} pauseOnHover>
          {ECOSYSTEM_MARQUEE.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.14em] font-semibold text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/60" />
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Core Studio Pillars with Interactive Spotlight Hover */}
      <Section spacing="default" background="default">
        <Container size="default">
          <div className="max-w-4xl mb-12 md:mb-16">
            <Reveal variant="slide-up">
              <span className="type-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/10 font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Our Pillars
              </span>
            </Reveal>

            <TextReveal as="h2" className="type-h2 text-[var(--color-foreground)] font-medium tracking-tight mb-4">
              Design. Technology. Digital Growth.
            </TextReveal>

            <p className="type-body text-[var(--color-muted)] max-w-2xl leading-relaxed">
              A multidisciplinary foundation engineered to take ideas from conceptual strategy to robust market execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                pillar: "DESIGN",
                desc: "Human-centric UI/UX, brand design systems, and digital product aesthetics crafted to distinguish your enterprise.",
              },
              {
                pillar: "TECHNOLOGY",
                desc: "Modern software architecture, SaaS engineering, enterprise web platforms, and resilient cloud solutions.",
              },
              {
                pillar: "GROWTH",
                desc: "Data-driven digital marketing, search visibility, conversion optimization, and live industry internship initiatives.",
              },
            ].map((item, index) => (
              <Reveal key={item.pillar} variant="slide-up" delay={0.08 * index}>
                <SpotlightCard className="h-full flex flex-col justify-between p-8">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-medium tracking-tight text-[var(--color-foreground)] mt-4 mb-3">
                      {item.pillar}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-muted)] font-medium">
                    <span>KLEE Framework</span>
                    <span className="text-[var(--color-accent)] font-semibold">Active</span>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
