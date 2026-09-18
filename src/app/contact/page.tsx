import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ContactForm } from "./ContactForm";
import { MapPin, Mail, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact KLEE Technologies | Start Your Digital Project",
  description:
    "Contact KLEE Technologies in Hyderabad for software development, SaaS, UI/UX, digital marketing, branding, graphic design and technology solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Section spacing="none" background="default" className="overflow-visible min-h-screen flex items-center pt-28 pb-10 lg:pt-32 lg:pb-10">
        <Container size="wide" className="w-full">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            {/* Contact Hero & Info (Left 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal variant="slide-up">
                <span className="type-eyebrow text-[var(--color-accent)] mb-2.5 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-accent-subtle)] px-3 py-1 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                  CONTACT US
                </span>
              </Reveal>

              <TextReveal as="h1" className="type-h1 leading-[1.05] tracking-tight text-balance text-[var(--color-foreground)] mb-4">
                Let's Build What's Next.
              </TextReveal>

              <Reveal variant="slide-up" delay={0.1}>
                <p className="text-base sm:text-lg leading-relaxed text-[var(--color-muted)] mb-8 max-w-md">
                  Have an idea, project or technical challenge? Connect directly with KLEE Technologies to turn your vision into a scalable, high-impact product.
                </p>
              </Reveal>

              {/* High-Trust Value & Contact Cards */}
              <div className="space-y-2.5">
                <Reveal variant="slide-up" delay={0.15}>
                  <a
                    href="mailto:info@kleetechnologies.com"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] hover:border-[var(--color-accent)]/40 hover:bg-white transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-subtle)] text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">Direct Email</p>
                      <p className="text-base font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">info@kleetechnologies.com</p>
                    </div>
                  </a>
                </Reveal>

                <Reveal variant="slide-up" delay={0.2}>
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)]">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-[var(--color-foreground)]">T-Hub, 4th Floor</p>
                      <p className="text-[var(--color-muted)]">Knowledge City Rd, Rai Durg, Hyderabad, Telangana 500032</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal variant="slide-up" delay={0.25}>
                  <div className="flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--color-muted)]">
                    <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span>Average response time: <strong className="text-[var(--color-foreground)]">within 24 hours</strong></span>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Contact Form (Right 7 Cols) */}
            <div className="lg:col-span-7">
              <Reveal variant="slide-up" delay={0.15}>
                <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-5 sm:p-6 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)]">
                  <div className="mb-3.5 pb-2.5 border-b border-[var(--color-border-subtle)] flex items-center justify-between">
                    <div>
                      <h2 className="type-h3 text-[var(--color-foreground)]">Start a Project</h2>
                      <p className="text-sm text-[var(--color-muted)] mt-1">Tell us about your requirement and we'll schedule a discovery call.</p>
                    </div>
                  </div>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
