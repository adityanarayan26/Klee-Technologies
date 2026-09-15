import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore KLEE Technologies' multidisciplinary services: Software Development, SaaS, UI/UX Design, Digital Marketing, Branding, and Live Internships.",
};

const SERVICES = [
  {
    id: "software-development",
    title: "Software Development",
    eyebrow: "Core Engineering",
    description:
      "Enterprise software, custom API architectures, high-performance web applications, and resilient cloud-native infrastructures.",
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    eyebrow: "Product Engineering",
    description:
      "End-to-end multi-tenant SaaS engineering, subscription workflows, analytics integration, and scalable microservices architectures.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Development",
    eyebrow: "Experience Design",
    description:
      "User research, intuitive interface architecture, design systems, and frontend implementation with modern frameworks.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Growth & Acquisition",
    description:
      "Performance marketing, search engine optimization (SEO), omnichannel campaigns, conversion rate optimization, and brand visibility.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    eyebrow: "Visual Arts",
    description:
      "High-impact visual assets, marketing collateral, corporate presentation systems, vector typography, and digital publication design.",
  },
  {
    id: "branding",
    title: "Branding",
    eyebrow: "Identity & Positioning",
    description:
      "Strategic brand positioning, corporate identities, brand guidelines, typography standards, and tone-of-voice formulation.",
  },
  {
    id: "internship-projects",
    title: "Live Internship Projects",
    eyebrow: "Academy & Talent",
    description:
      "Immersive industry project internships preparing developers and designers with real client deliverables, live codebases, and mentorship.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section spacing="hero" background="default">
        <Container size="default">
          <div className="max-w-4xl">
            <Reveal variant="slide-up">
              <span className="type-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/10 font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Capabilities & Solutions
              </span>
            </Reveal>

            <TextReveal
              as="h1"
              className="type-display text-[var(--color-foreground)] font-medium tracking-tight text-balance mb-6"
            >
              Full-spectrum design, technology, and market execution.
            </TextReveal>

            <Reveal variant="slide-up" delay={0.2}>
              <p className="type-body-large text-[var(--color-muted)] max-w-2xl leading-relaxed text-balance mb-8">
                We partner with modern enterprises to build resilient software,
                craft distinctive digital brands, and execute high-performance
                digital campaigns.
              </p>

              <Button href="/contact" variant="primary" size="lg" showArrow>
                Discuss Your Requirements
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} variant="slide-up" delay={index * 0.05}>
                <SpotlightCard className="h-full flex flex-col justify-between p-8 bg-white">
                  <div>
                    <span className="type-eyebrow text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                      {service.eyebrow}
                    </span>
                    <h2 className="type-h3 font-medium text-[var(--color-foreground)] mt-3 mb-3">
                      {service.title}
                    </h2>
                    <p className="type-body text-sm text-[var(--color-muted)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)]">
                    <Button
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="text-arrow"
                      showArrow
                      arrowDirection="up-right"
                    >
                      Engage Service
                    </Button>
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
