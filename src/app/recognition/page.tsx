import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CheckIcon } from "@/components/svg/Icons";

export const metadata: Metadata = {
  title: "Recognition & Accreditations",
  description:
    "Explore KLEE Technologies' institutional recognitions, government startup certifications, and ecosystem partnerships.",
};

const RECOGNITIONS = [
  {
    title: "DPIIT Recognized Startup",
    authority: "Department for Promotion of Industry and Internal Trade",
    description:
      "Officially recognized by the Ministry of Commerce & Industry, Government of India, for tech innovation and digital capability.",
  },
  {
    title: "T-Hub Ecosystem Incubated",
    authority: "T-Hub Phase 2, Hyderabad",
    description:
      "Operating from India's premier innovation hub, leveraging premier institutional infrastructure and strategic industry networks.",
  },
  {
    title: "MSME Registered Enterprise",
    authority: "Ministry of Micro, Small and Medium Enterprises",
    description:
      "Compliant enterprise delivering institutional technology and digital services to national and international clients.",
  },
  {
    title: "ISO Quality Framework Aligned",
    authority: "International Organization for Standardization",
    description:
      "Engineering and design processes structured according to international quality management and security standards.",
  },
  {
    title: "AICTE Aligned Mentorship",
    authority: "All India Council for Technical Education Alignment",
    description:
      "Over 500+ engineering and technology students trained on live client projects adhering to national technical education standards.",
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
              description="Our commitment to engineering excellence, governance compliance, and talent mentorship is recognized across state, national, and industry bodies."
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
                className="p-8 rounded-xl bg-white border border-[var(--color-border-subtle)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] flex items-center justify-center mb-6">
                    <CheckIcon size={18} />
                  </div>
                  <h3 className="type-h3 font-medium text-[var(--color-foreground)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-4">
                    {item.authority}
                  </p>
                  <p className="type-body text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
