import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Selected Work & Portfolio",
  description:
    "Explore selected case studies and engineering milestones delivered by KLEE Technologies across 200+ global projects.",
};

export default function PortfolioPage() {
  const dummyProjects = [
    {
      title: "Enterprise SaaS Cloud Platform",
      category: "Software Engineering / SaaS",
      year: "2024",
    },
    {
      title: "FinTech Mobile Experience & Design System",
      category: "UI/UX & Product Design",
      year: "2024",
    },
    {
      title: "Government Institutional Portal",
      category: "Digital Governance / Web",
      year: "2023",
    },
    {
      title: "Direct-to-Consumer Brand Evolution",
      category: "Branding & Digital Marketing",
      year: "2023",
    },
  ];

  return (
    <>
      <Section spacing="hero" background="default">
        <Container size="default">
          <Reveal variant="slide-up">
            <SectionHeading
              isHero
              eyebrow="Selected Portfolio"
              title="Work delivered with precision, intent, and lasting value."
              description="A curated look into selected case studies spanning enterprise engineering, digital product design, and strategic growth campaigns."
            />
          </Reveal>
        </Container>
      </Section>

      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {dummyProjects.map((project, index) => (
              <Reveal
                key={project.title}
                variant="slide-up"
                delay={index * 0.1}
                className="group flex flex-col"
              >
                <SpotlightCard className="p-0 overflow-hidden bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border)]">
                  <ParallaxMedia offset={18}>
                    <MediaPlaceholder
                      aspectRatio="landscape"
                      label={`${project.title} Asset`}
                      sublabel="High-resolution case study showcase will be placed here"
                    />
                  </ParallaxMedia>
                  <div className="p-6 md:p-8 flex items-start justify-between">
                    <div>
                      <span className="type-eyebrow text-xs text-[var(--color-accent)] font-semibold uppercase">
                        {project.category}
                      </span>
                      <h3 className="type-h3 font-medium text-[var(--color-foreground)] mt-2 group-hover:text-[var(--color-accent)] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[var(--color-muted)] pt-1">
                      {project.year}
                    </span>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-[var(--color-muted)] mb-6">
              Over 200+ global projects delivered since 2018.
            </p>
            <Button href="/contact" variant="outline" size="md" showArrow>
              Inquire About Custom Projects
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
