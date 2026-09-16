import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KLEE Technologies — Established in 2018 at T-Hub Hyderabad. Pioneering design, technology, and digital growth.",
};

interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  tags: string[];
  initials: string;
  accent: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aditya Narayan",
    role: "Founder & Managing Director",
    discipline: "Enterprise Systems & Strategy",
    bio: "Founded KLEE Technologies in 2018 at T-Hub Hyderabad. Directing enterprise architecture, institutional platforms, and digital growth strategies across 200+ global deployments.",
    tags: ["Systems Architecture", "SaaS Engineering", "Executive Leadership"],
    initials: "AN",
    accent: "var(--color-accent)",
  },
  {
    name: "Head of Product Design",
    role: "VP of UI/UX & Creative Direction",
    discipline: "Human-Centric Experience Design",
    bio: "Spearheading brand design systems, high-craft editorial typography, and enterprise user interfaces that convert complex business logic into effortless human experiences.",
    tags: ["Design Systems", "UI/UX Architecture", "Creative Direction"],
    initials: "UX",
    accent: "#00c982",
  },
  {
    name: "Head of Technology & Growth",
    role: "VP of Engineering & Academy",
    discipline: "Cloud Infrastructure & Mentorship",
    bio: "Orchestrating scalable microservices, resilient cloud deployments, and heading KLEE's flagship 500+ student live internship and technical talent incubator.",
    tags: ["Cloud Infra", "Full-Stack Dev", "Talent Mentorship"],
    initials: "TG",
    accent: "var(--color-foreground)",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="hero" background="default">
        <Container size="default">
          <Reveal variant="slide-up">
            <SectionHeading
              isHero
              eyebrow="About KLEE Technologies"
              title="A creative technology studio rooted in innovation and craft."
              description="Founded in 2018 at T-Hub Hyderabad, KLEE Technologies is an integrated team of software engineers, product designers, and digital growth specialists."
            />
          </Reveal>

          <Reveal variant="scale" delay={0.1}>
            <div className="mt-8">
              <MediaPlaceholder
                aspectRatio="wide"
                label="Studio & Team Story Placeholder"
                sublabel="Images and editorial video of T-Hub headquarters will be placed here"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Heritage & Ecosystem Badges Section */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <SectionHeading
            eyebrow="Our Heritage"
            title="Pioneering digital evolution since 2018."
            description="From incubating at T-Hub to delivering over 200+ global projects and mentoring 500+ professionals through live industry initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <Reveal variant="slide-up" delay={0.05}>
              <SpotlightCard className="p-8 rounded-xl bg-white border border-[var(--color-border-subtle)] h-full">
                <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase">
                  Pillar 01
                </span>
                <h3 className="type-h3 font-medium text-[var(--color-foreground)] mt-3 mb-3">
                  Enterprise Pedigree
                </h3>
                <p className="type-body text-sm text-[var(--color-muted)] leading-relaxed">
                  Extensive experience delivering scalable platforms for corporate enterprises, emerging startups, and institutional technology initiatives.
                </p>
              </SpotlightCard>
            </Reveal>

            <Reveal variant="slide-up" delay={0.12}>
              <SpotlightCard className="p-8 rounded-xl bg-white border border-[var(--color-border-subtle)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 opacity-90">
                    <Image
                      src="/logos/dpiit.png"
                      alt="DPIIT"
                      width={80}
                      height={20}
                      className="h-5 w-auto object-contain"
                    />
                    <Image
                      src="/logos/msme.png"
                      alt="MSME"
                      width={50}
                      height={18}
                      className="h-5 w-auto object-contain"
                    />
                    <Image
                      src="/logos/iso9001.png"
                      alt="ISO 9001"
                      width={22}
                      height={22}
                      className="h-5 w-auto object-contain"
                    />
                    <Image
                      src="/logos/aicte.png"
                      alt="AICTE"
                      width={22}
                      height={22}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <h3 className="type-h3 font-medium text-[var(--color-foreground)] mb-3">
                    Recognized Ecosystem
                  </h3>
                  <p className="type-body text-sm text-[var(--color-muted)] leading-relaxed">
                    DPIIT recognized startup, aligned with MSME, ISO, and AICTE industry benchmarks, headquartered inside T-Hub, Madhapur, Hyderabad.
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal variant="slide-up" delay={0.19}>
              <SpotlightCard className="p-8 rounded-xl bg-white border border-[var(--color-border-subtle)] h-full">
                <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase">
                  Pillar 03
                </span>
                <h3 className="type-h3 font-medium text-[var(--color-foreground)] mt-3 mb-3">
                  Talent Mentorship
                </h3>
                <p className="type-body text-sm text-[var(--color-muted)] leading-relaxed">
                  Over 500+ students and aspiring engineers trained through rigorous live industry projects bridging academia and high-tech industry demands.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Leadership & Core Team Section (3 Members) */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <SectionHeading
            eyebrow="Leadership & Vision"
            title="The minds driving design, technology & growth."
            description="An integrated leadership team combining enterprise systems engineering, high-craft brand design, and strategic growth architecture."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {TEAM_MEMBERS.map((member, index) => (
              <Reveal key={member.name} variant="slide-up" delay={index * 0.1}>
                <SpotlightCard className="p-0 overflow-hidden bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] flex flex-col h-full group">
                  {/* Portrait Media Frame */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-background-subtle)] border-b border-[var(--color-border-subtle)] flex flex-col items-center justify-center p-8 select-none">
                    {/* Background Graphic Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.04] pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Stylized Minimal Studio Monogram Avatar */}
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border border-[var(--color-border)] shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ease-out">
                      <span className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                        {member.initials}
                      </span>
                      <span
                        className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white"
                        style={{ backgroundColor: member.accent }}
                      />
                    </div>

                    <div className="relative z-10 mt-6 text-center">
                      <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[var(--color-muted)]">
                        {member.discipline}
                      </span>
                    </div>

                    {/* Floating Role Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[var(--color-border-subtle)] text-[var(--color-foreground)]">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio & Details Area */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="type-h3 font-medium text-[var(--color-foreground)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">
                        {member.role}
                      </p>
                      <p className="type-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                        {member.bio}
                      </p>
                    </div>

                    {/* Specialization Tags */}
                    <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-[var(--color-surface-muted)] text-[var(--color-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
