import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KLEE Technologies — Established in 2018 at T-Hub Hyderabad. Pioneering design, technology, and digital growth.",
};

export default function AboutPage() {
  return (
    <>
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

      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <SectionHeading
            eyebrow="Our Heritage"
            title="Pioneering digital evolution since 2018."
            description="From incubating at T-Hub to delivering over 200+ global projects and mentoring 500+ professionals through live industry initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-8 rounded-xl bg-white border border-[var(--color-border-subtle)]">
              <h3 className="type-h3 font-medium mb-3">Enterprise Pedigree</h3>
              <p className="type-body text-sm text-[var(--color-muted)]">
                Extensive experience delivering scalable platforms for corporate enterprises, emerging startups, and institutional technology initiatives.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white border border-[var(--color-border-subtle)]">
              <h3 className="type-h3 font-medium mb-3">Recognized Ecosystem</h3>
              <p className="type-body text-sm text-[var(--color-muted)]">
                DPIIT recognized startup, aligned with MSME, ISO, and AICTE industry benchmarks, headquartered inside T-Hub Phase 2, Madhapur.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white border border-[var(--color-border-subtle)]">
              <h3 className="type-h3 font-medium mb-3">Talent Mentorship</h3>
              <p className="type-body text-sm text-[var(--color-muted)]">
                Over 500+ students and aspiring engineers trained through rigorous live industry projects bridging academia and high-tech industry demands.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
