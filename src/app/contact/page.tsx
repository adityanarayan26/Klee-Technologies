import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact KLEE Technologies | Start Your Digital Project",
  description:
    "Contact KLEE Technologies in Hyderabad for software development, SaaS, UI/UX, digital marketing, branding, graphic design and technology solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Section spacing="hero" background="default" className="min-h-screen">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact Hero & Intro */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Reveal variant="slide-up">
                  <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">CONTACT</span>
                </Reveal>
                <TextReveal as="h1" className="type-display text-[var(--color-foreground)] font-medium mb-6 text-balance">
                  Let's Build What's Next.
                </TextReveal>
                <Reveal variant="slide-up" delay={0.1}>
                  <p className="type-body-large text-[var(--color-foreground)] font-medium mb-4">
                    Have an idea, project or business challenge?
                    <br />
                    Start the conversation with KLEE Technologies.
                  </p>
                </Reveal>
                
                <Reveal variant="slide-up" delay={0.2}>
                  <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)]">
                    <h2 className="type-h3 text-[var(--color-foreground)] font-medium mb-4">Tell us what you're trying to build.</h2>
                    <p className="type-body text-[var(--color-muted)] leading-relaxed">
                      Whether you need a new digital product, software platform, SaaS application, brand identity, UI/UX experience or digital growth strategy, our team can help turn your requirement into a clear path forward.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Office Info */}
              <div className="mt-12 lg:mt-24 pt-8 border-t border-[var(--color-border-subtle)]">
                <Reveal variant="slide-up" delay={0.3}>
                  <h3 className="type-eyebrow text-[var(--color-accent)] mb-4 block">OFFICE</h3>
                  <p className="text-xl font-medium text-[var(--color-foreground)] mb-6">Visit KLEE Technologies</p>
                  <address className="type-body text-[var(--color-muted)] not-italic space-y-1">
                    <p className="font-medium text-[var(--color-foreground)]">KLEE TECHNOLOGIES PRIVATE LIMITED</p>
                    <p>1/C, Plot No: 25, T-Hub, 4th Floor</p>
                    <p>Sy No 83/1, Knowledge City Rd, panmaktha</p>
                    <p>Rai Durg, Hyderabad, Telangana 500032</p>
                    <p className="mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
                      <a href="mailto:info@kleetechnologies.com" className="hover:text-[var(--color-accent)] transition-colors">
                        info@kleetechnologies.com
                      </a>
                    </p>
                  </address>
                </Reveal>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <Reveal variant="slide-up" delay={0.2}>
                <div className="bg-[var(--color-background-primary)] p-6 sm:p-10 border border-[var(--color-border-subtle)] rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-medium text-[var(--color-foreground)] mb-8">Start a Project</h2>
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
