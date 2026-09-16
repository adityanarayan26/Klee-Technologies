import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Recognition & Accreditations",
  description:
    "Explore KLEE Technologies' institutional recognitions, government startup certifications, and ecosystem partnerships.",
};

interface RecognitionItem {
  title: string;
  authority: string;
  description: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  badge?: string;
}

const RECOGNITIONS: RecognitionItem[] = [
  {
    title: "DPIIT Recognized Startup",
    authority: "Department for Promotion of Industry and Internal Trade",
    description:
      "Officially recognized by the Ministry of Commerce & Industry, Government of India, for technology innovation, digital engineering, and intellectual capability.",
    logoSrc: "/logos/dpiit.png",
    logoAlt: "DPIIT Government of India Recognition",
    logoWidth: 220,
    logoHeight: 52,
    badge: "Government of India",
  },
  {
    title: "MSME Registered Enterprise",
    authority: "Ministry of Micro, Small and Medium Enterprises",
    description:
      "Compliant enterprise delivering institutional technology, software development, and digital services to corporate and government sectors.",
    logoSrc: "/logos/msme.png",
    logoAlt: "MSME India Certification",
    logoWidth: 140,
    logoHeight: 50,
    badge: "Ministry of MSME",
  },
  {
    title: "ISO 9001 Quality Framework",
    authority: "International Organization for Standardization",
    description:
      "Software delivery, design systems, and digital product workflows structured strictly in alignment with global ISO quality management benchmarks.",
    logoSrc: "/logos/iso9001.png",
    logoAlt: "ISO 9001 Quality Standards",
    logoWidth: 72,
    logoHeight: 72,
    badge: "Global Standard",
  },
  {
    title: "AICTE Aligned Mentorship",
    authority: "All India Council for Technical Education Alignment",
    description:
      "Over 500+ engineering students and developers trained across live client projects adhering strictly to national technical education standards.",
    logoSrc: "/logos/aicte.png",
    logoAlt: "AICTE Education Alignment",
    logoWidth: 64,
    logoHeight: 64,
    badge: "Institutional Linkage",
  },
  {
    title: "T-Hub Ecosystem Incubated",
    authority: "T-Hub Phase 2, Hyderabad",
    description:
      "Headquartered and operating within India's premier innovation ecosystem, leveraging world-class technology infrastructure and strategic enterprise networks.",
    badge: "Innovation Hub HQ",
  },
];

export default function RecognitionPage() {
  return (
    <>
      <Section spacing="hero" background="default">
        <Container size="default">
          <Reveal variant="slide-up">
            <SectionHeading
              isHero
              eyebrow="Accreditation & Trust"
              title="Recognized standards. Validated execution."
              description="Our commitment to engineering excellence, governance compliance, and talent mentorship is recognized across national government, global quality, and institutional bodies."
            />
          </Reveal>
        </Container>
      </Section>

      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECOGNITIONS.map((item, index) => (
              <Reveal
                key={item.title}
                variant="slide-up"
                delay={index * 0.08}
                className="h-full"
              >
                <SpotlightCard className="h-full p-8 bg-white flex flex-col justify-between">
                  <div>
                    {/* Logo / Badge Header */}
                    <div className="flex items-center justify-between gap-4 mb-6 min-h-[56px]">
                      {item.logoSrc ? (
                        <div className="h-12 flex items-center justify-start max-w-[190px]">
                          <Image
                            src={item.logoSrc}
                            alt={item.logoAlt || item.title}
                            width={item.logoWidth || 120}
                            height={item.logoHeight || 48}
                            className="max-h-12 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center font-bold text-sm">
                          T-Hub
                        </div>
                      )}

                      {item.badge && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[var(--color-surface-muted)] text-[var(--color-muted)] border border-[var(--color-border-subtle)]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="type-h3 font-medium text-[var(--color-foreground)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-4">
                      {item.authority}
                    </p>
                    <p className="type-body text-sm text-[var(--color-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs text-[var(--color-muted)]">
                    <span>Verified Credential</span>
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-foreground)] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                      Active
                    </span>
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
