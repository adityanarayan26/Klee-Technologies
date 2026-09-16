import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ClientsShowcase } from "@/components/ui/ClientsShowcase";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About KLEE Technologies | Technology & Digital Solutions Company",
  description:
    "Learn about KLEE Technologies, established in 2018 in Hyderabad. Explore our technology, design, SaaS, digital marketing, branding and innovation journey.",
};

export default function AboutPage() {
  return (
    <>
      {/* About KLEE Hero */}
      <Section spacing="hero" background="default">
        <Container size="default">
          <div className="max-w-4xl">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">ABOUT KLEE</span>
            </Reveal>
            <TextReveal as="h1" className="type-display text-[var(--color-foreground)] font-medium mb-6 text-balance">
              We Build What Moves Ideas Forward.
            </TextReveal>
            <Reveal variant="slide-up" delay={0.1}>
              <div className="space-y-4 type-body-large text-[var(--color-muted)] max-w-3xl leading-relaxed">
                <p>
                  Established on <strong>6 April 2018</strong>, KLEE TECHNOLOGIES PRIVATE LIMITED has evolved into a multidisciplinary technology and digital solutions company serving clients across the world.
                </p>
                <p>
                  Our capabilities span <strong>software development, AI enterprise integration, SaaS development, mobile and web UI/UX, digital marketing, graphic design and branding</strong>.
                </p>
                <p className="pt-4 font-medium text-[var(--color-foreground)] text-xl">
                  We believe technology should not simply function.<br />It should create an experience.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="max-w-3xl">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">OUR STORY</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-6">
                Started in 2018. Built for What's Next.
              </h2>
              <div className="space-y-4 type-body text-[var(--color-muted)] leading-relaxed">
                <p>
                  KLEE began with a simple ambition: to create meaningful technology and digital experiences that solve real problems.
                </p>
                <p>
                  Over time, our capabilities expanded across technology, design, marketing and brand communication.
                </p>
                <p>
                  Today, KLEE operates from <strong>T-Hub, Hyderabad</strong>, bringing together technology, creativity and entrepreneurial thinking in one ecosystem.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <div className="mb-12">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">OUR APPROACH</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">
                Technology Without the Silos.
              </h2>
              <p className="type-body text-[var(--color-muted)]">
                Traditional projects often separate strategy, design, development and marketing into disconnected stages. We believe they should work together.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Discover", desc: "Understand the challenge." },
              { title: "Define", desc: "Identify the opportunity." },
              { title: "Design", desc: "Create the experience." },
              { title: "Develop", desc: "Engineer the solution." },
              { title: "Deliver", desc: "Launch with precision." },
              { title: "Grow", desc: "Improve, scale and evolve." }
            ].map((step, i) => (
              <Reveal key={step.title} variant="slide-up" delay={i * 0.05}>
                <div className="p-6 bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] rounded-xl">
                  <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Belief */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal variant="slide-up">
                <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">OUR BELIEF</span>
                <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">
                  Good Technology Solves Problems. Great Technology Changes Possibilities.
                </h2>
                <p className="type-body text-[var(--color-muted)]">We combine:</p>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Technology & AI", desc: "Engineering products and intelligent workflows that work." },
                { title: "Design", desc: "Creating experiences people enjoy using." },
                { title: "Business Thinking", desc: "Building around actual objectives." },
                { title: "Creativity", desc: "Making ideas distinctive." },
                { title: "Digital Growth", desc: "Helping brands reach the right audience." }
              ].map((belief, i) => (
                <Reveal key={belief.title} variant="slide-up" delay={i * 0.1}>
                  <div>
                    <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-2">{belief.title}</h3>
                    <p className="text-sm text-[var(--color-muted)]">{belief.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership Team */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <Reveal variant="slide-up">
                <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">LEADERSHIP</span>
              </Reveal>
              <TextReveal as="h2" className="type-h2 text-[var(--color-foreground)] font-medium text-balance">
                The Team Driving the Vision
              </TextReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { name: "G Satyanarayana", role: "Founder & CEO", image: "/people/g-satyanarayana-real.png", link: "https://linkedin.com" },
              { name: "BS Anuhya", role: "Director", image: "/people/bs-anuhya-real.png", link: "https://linkedin.com" },
              { name: "Nikhil Mungilwar", role: "Business Head", image: "/people/nikhil-mungilwar-real.png", link: "https://linkedin.com" }
            ].map((person, i) => (
              <Reveal key={person.name} variant="slide-up" delay={i * 0.1}>
                <a href={person.link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-2 pr-6 sm:pr-8 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] hover:border-blue-500 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[var(--color-background-secondary)] shrink-0 border border-[var(--color-border-subtle)]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-[var(--color-foreground)] mb-0.5">{person.name}</h3>
                      <p className="text-sm text-[var(--color-muted)] font-medium">{person.role}</p>
                    </div>
                  </div>
                  <div className="text-[var(--color-muted)] group-hover:text-blue-500 transition-colors flex items-center gap-1 sm:gap-2 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 group-hover:translate-y-[-2px] duration-300 hidden sm:block">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Clients Section */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <ClientsShowcase />
        </Container>
      </Section>

      {/* Global Experience, Education & Location */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Reveal variant="slide-up" delay={0.1}>
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">GLOBAL EXPERIENCE</span>
              <h3 className="text-2xl font-medium text-[var(--color-foreground)] mb-4">200+ Projects. Clients Across the World.</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                From startups and growing businesses to institutional initiatives, KLEE Technologies has delivered 200+ client projects across the world.
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Every project adds another perspective, another challenge and another opportunity to build better.
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.2}>
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">EDUCATION & INDUSTRY</span>
              <h3 className="text-2xl font-medium text-[var(--color-foreground)] mb-4">Creating Opportunities for the Next Generation</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                Technology grows faster when knowledge moves with it. Through our Live Internship Projects, students gain practical exposure to real-world projects, technologies and professional workflows.
              </p>
              <p className="text-sm font-medium text-[var(--color-foreground)] leading-relaxed">
                500+ students have completed internships with KLEE Technologies.
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.3}>
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">OUR LOCATION</span>
              <h3 className="text-2xl font-medium text-[var(--color-foreground)] mb-4">Inside India's Startup & Innovation Ecosystem</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                KLEE Technologies is currently located at <strong>T-Hub, Hyderabad</strong>, placing the company within one of India's prominent startup and innovation ecosystems.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* About CTA */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default" className="text-center max-w-2xl mx-auto">
          <Reveal variant="slide-up">
            <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">Let's Build Something Meaningful.</h2>
            <p className="type-body-large text-[var(--color-muted)] mb-8">
              Whether you're starting from an idea or scaling an existing digital product, KLEE Technologies is ready to build with you.
            </p>
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Start a Conversation
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
