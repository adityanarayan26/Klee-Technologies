import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Recognition & Certifications | KLEE Technologies",
  description:
    "Explore KLEE Technologies' startup recognition, MSME certification, ISO certification, AICTE recognition and technology achievements.",
};

const CERTIFICATIONS = [
  {
    id: "dpiit",
    title: "DPIIT STARTUP RECOGNITION",
    heading: "Recognised as a Startup by DPIIT",
    body: (
      <>
        <p className="mb-4">KLEE Technologies was recognised by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India, in 2019.</p>
        <p className="font-medium text-[var(--color-foreground)]">2019 — DPIIT Startup Recognition</p>
        <p className="text-sm mt-1">A milestone that reflects KLEE's journey within India's startup ecosystem.</p>
      </>
    ),
    logo: "/logos/dpiit.png",
    width: 180,
    height: 44,
  },
  {
    id: "msme",
    title: "MSME",
    heading: "MSME Certified",
    body: (
      <p>KLEE Technologies is MSME certified, strengthening its position as a recognised Indian business entity.</p>
    ),
    logo: "/logos/msme.png",
    width: 120,
    height: 40,
  },
  {
    id: "iso",
    title: "ISO",
    heading: "ISO Certified",
    body: (
      <>
        <p>KLEE Technologies is ISO 9001 certified, reflecting its commitment to structured processes and professional standards.</p>
      </>
    ),
    logo: "/logos/iso9001.png",
    width: 84,
    height: 84,
    isSquare: true,
  },
  {
    id: "aicte",
    title: "AICTE",
    heading: "AICTE Recognised",
    body: (
      <p>KLEE Technologies is AICTE recognised, supporting its engagement with students and industry-oriented learning initiatives.</p>
    ),
    logo: "/logos/aicte.png",
    width: 66,
    height: 66,
    isSquare: true,
  }
];

export default function RecognitionPage() {
  return (
    <>
      {/* Recognition Hero */}
      <Section spacing="hero" background="default">
        <Container size="default">
          <div className="max-w-4xl">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">RECOGNITION</span>
            </Reveal>
            <TextReveal as="h1" className="type-display text-[var(--color-foreground)] font-medium mb-6 text-balance">
              Recognition That Reflects the Journey.
            </TextReveal>
            <Reveal variant="slide-up" delay={0.1}>
              <p className="type-body-large text-[var(--color-muted)] max-w-3xl leading-relaxed text-balance">
                From startup recognition to industry certifications and institutional projects, KLEE Technologies continues to build credibility through <strong>technology, execution and impact</strong>.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Certifications Grid */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert, i) => (
              <Reveal key={cert.id} variant="slide-up" delay={i * 0.1}>
                <div className="p-8 md:p-10 bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-2xl h-full flex flex-col justify-between">
                  <div>
                    <span className="type-eyebrow text-[var(--color-accent)] mb-6 block">{cert.title}</span>
                    <h3 className="text-2xl font-medium text-[var(--color-foreground)] mb-4">{cert.heading}</h3>
                    <div className="type-body text-[var(--color-muted)] leading-relaxed mb-10">
                      {cert.body}
                    </div>
                  </div>
                  
                  <div className={`flex items-center justify-center bg-white border border-[var(--color-border-subtle)] rounded-xl mt-auto ${cert.isSquare ? 'w-28 h-28 p-2.5 sm:p-3 aspect-square' : 'w-fit p-6'}`}>
                    <Image
                      src={cert.logo}
                      alt={cert.heading}
                      width={cert.width}
                      height={cert.height}
                      className="object-contain"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact Milestones */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">GOVERNMENT PROJECT</span>
              <h3 className="type-h3 text-[var(--color-foreground)] font-medium mb-4">Technology Built for Public Impact</h3>
              <div className="type-body text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  KLEE Technologies developed the <strong>KSDC application for the Telangana Government</strong> under a skill development program.
                </p>
                <p>
                  This project stands as an important milestone in KLEE's technology journey.
                </p>
              </div>
            </Reveal>

            <Reveal variant="slide-up" delay={0.1}>
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">INTERNSHIP IMPACT</span>
              <h3 className="type-h3 text-[var(--color-foreground)] font-medium mb-4">500+ Students. Real-World Exposure.</h3>
              <div className="type-body text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  More than <strong>500 students have completed internships</strong> with KLEE Technologies, gaining exposure to practical projects and industry-oriented technology.
                </p>
                <p className="font-medium text-[var(--color-foreground)] border-l-2 border-[var(--color-accent)] pl-4 py-1">
                  Because the future of technology needs builders—not just learners.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Global Project Delivery */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <Reveal variant="slide-up">
            <div className="max-w-3xl">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">GLOBAL PROJECT DELIVERY</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-6">
                200+ Projects Delivered Worldwide
              </h2>
              <p className="type-body-large text-[var(--color-muted)] leading-relaxed">
                KLEE Technologies has delivered <strong>200+ client projects across the world</strong>, bringing together technology, design and digital expertise for businesses and organisations.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Recognition CTA */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default" className="text-center max-w-2xl mx-auto">
          <Reveal variant="slide-up">
            <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">Built With Purpose. Recognised Through Progress.</h2>
            <p className="type-body-large text-[var(--color-muted)] mb-8">
              Our journey continues.
            </p>
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Work With KLEE
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
