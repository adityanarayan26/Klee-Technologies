import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "./ContactForm";
import { BRAND_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact & Start a Project",
  description:
    "Get in touch with KLEE Technologies. Start a software, design, or growth project with our engineering and design team at T-Hub Hyderabad.",
};

export default function ContactPage() {
  return (
    <>
      <Section spacing="hero" background="default">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Context Column (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal variant="slide-up">
                <SectionHeading
                  isHero
                  eyebrow="Initiate Project"
                  title="Let's build something extraordinary together."
                  description="Whether you are architecting a new software platform, elevating your brand system, or accelerating digital growth, we are prepared to engineer the solution."
                />
              </Reveal>

              <Reveal variant="slide-up" delay={0.15}>
                <div className="mt-8 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col gap-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] mb-1">
                      Headquarters
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {BRAND_INFO.contact.location}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] mb-1">
                      Direct Email
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] font-mono">
                      {BRAND_INFO.contact.email}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] mb-1">
                      Response SLA
                    </h3>
                    <p className="text-sm text-[var(--color-muted)]">
                      Direct partner response within 24 business hours.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal variant="slide-up" delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
