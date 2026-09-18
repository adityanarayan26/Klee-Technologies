import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI-First Enterprise Solutions | KLEE Technologies",
  description:
    "From software that works to technology that thinks. Learn how KLEE Technologies integrates AI into software, SaaS platforms, workflows, and digital experiences.",
};

export default function BlogPage() {
  return (
    <>
      {/* Blog Hero Section */}
      <Section spacing="none" background="default" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-[var(--color-border-subtle)]">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-accent)]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[var(--color-accent-subtle)]/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <Container size="default" className="max-w-4xl mx-auto relative z-10">
          <Reveal variant="slide-up">
            <span className="type-eyebrow text-[var(--color-accent)] mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent-subtle)] px-4 py-1.5 text-sm font-semibold tracking-widest shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
              INSIGHTS / ARTICLE
            </span>
          </Reveal>
          
          <TextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--color-foreground)] font-bold mb-6 [text-wrap:balance]">
            AI-FIRST ENTERPRISE SOLUTIONS
          </TextReveal>
          
          <Reveal variant="slide-up" delay={0.1}>
            <p className="text-xl sm:text-2xl leading-relaxed text-[var(--color-muted)] font-medium max-w-2xl [text-wrap:pretty]">
              From software that works to technology that thinks.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Article Content */}
      <Section spacing="default" background="secondary" className="py-20 lg:py-32 relative">
        <Container size="default" className="max-w-4xl mx-auto space-y-24 lg:space-y-36">
          
          {/* 01. The Shift */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-3 lg:sticky lg:top-32">
              <span className="text-[var(--color-accent)] font-mono text-3xl font-light opacity-60">01</span>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <h2 className="type-h2 text-[var(--color-foreground)] font-semibold tracking-tight [text-wrap:balance]">The Shift to Intelligent Business</h2>
              <p className="type-body-large text-[var(--color-muted)] leading-[1.8] [text-wrap:pretty]">
                Artificial Intelligence is changing how businesses build, operate and grow. KLEE TECHNOLOGIES PRIVATE LIMITED helps businesses integrate AI into software, SaaS platforms, workflows, data and digital experiences—creating connected solutions built for the next generation of enterprise.
              </p>
            </div>
          </div>

          {/* 02. Why AI-First */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-3 lg:sticky lg:top-32">
              <span className="text-[var(--color-accent)] font-mono text-3xl font-light opacity-60">02</span>
            </div>
            <div className="lg:col-span-9 space-y-10">
              <div className="space-y-6">
                <h2 className="type-h2 text-[var(--color-foreground)] font-semibold tracking-tight [text-wrap:balance]">Why AI-First?</h2>
                <p className="type-body-large text-[var(--color-muted)] leading-[1.8] [text-wrap:pretty]">
                  Traditional software follows instructions. AI-first technology understands context, assists decisions and enables intelligent workflows.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { title: "AI + Software", desc: "Make business applications smarter." },
                  { title: "AI + SaaS", desc: "Build intelligent, scalable digital products." },
                  { title: "AI + Data", desc: "Turn business information into actionable intelligence." },
                  { title: "AI + Automation", desc: "Reduce repetitive work and improve efficiency." },
                  { title: "AI + Experience", desc: "Create more personalised digital interactions." },
                  { title: "AI + Enterprise", desc: "Connect intelligence across business systems." }
                ].map((item, idx) => (
                  <div key={idx} className="group relative p-8 rounded-3xl border border-[var(--color-border-subtle)] bg-white/60 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-background-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="relative text-lg font-bold text-[var(--color-foreground)] mb-3">{item.title}</h3>
                    <p className="relative text-sm md:text-base text-[var(--color-muted)] leading-relaxed [text-wrap:pretty]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 03. Beyond the Chatbot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-3 lg:sticky lg:top-32">
              <span className="text-[var(--color-accent)] font-mono text-3xl font-light opacity-60">03</span>
            </div>
            <div className="lg:col-span-9 space-y-10">
              <div className="space-y-6">
                <h2 className="type-h2 text-[var(--color-foreground)] font-semibold tracking-tight [text-wrap:balance]">Beyond the Chatbot</h2>
                <p className="type-body-large text-[var(--color-muted)] leading-[1.8] [text-wrap:pretty]">
                  Enterprise AI is more than conversational AI. Intelligence can be embedded into products, operations, data and decision-making.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 py-4">
                {["AI Assistants", "AI Copilots", "Intelligent Automation", "Predictive Analytics", "Knowledge Intelligence", "AI-Powered Applications", "Enterprise Integrations"].map(tag => (
                  <span key={tag} className="px-5 py-2.5 rounded-full border border-[var(--color-border-subtle)] bg-white/80 backdrop-blur-sm text-sm font-medium text-[var(--color-foreground)] shadow-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              <blockquote className="relative p-8 lg:p-12 overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] shadow-sm bg-gradient-to-br from-white to-[var(--color-accent-subtle)]/30">
                <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-accent)]" />
                <p className="text-2xl lg:text-3xl font-serif text-[var(--color-foreground)] leading-[1.4] [text-wrap:balance]">
                  "The goal is simple: <span className="text-[var(--color-accent)] font-semibold">Put intelligence where it creates value.</span>"
                </p>
              </blockquote>
            </div>
          </div>

          {/* 04. AI Integrated */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-3 lg:sticky lg:top-32">
              <span className="text-[var(--color-accent)] font-mono text-3xl font-light opacity-60">04</span>
            </div>
            <div className="lg:col-span-9 space-y-10">
              <div className="space-y-6">
                <h2 className="type-h2 text-[var(--color-foreground)] font-semibold tracking-tight [text-wrap:balance]">KLEE Technologies — AI. Integrated.</h2>
                <p className="type-body-large text-[var(--color-muted)] leading-[1.8] [text-wrap:pretty]">
                  AI is not treated as a standalone feature. It becomes an integrated layer across the technology stack and the business experience.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-[var(--color-border-subtle)] overflow-hidden shadow-sm">
                <div className="divide-y divide-[var(--color-border-subtle)]/50">
                  {[
                    { key: "AI", value: "Intelligence" },
                    { key: "Software", value: "Engineering" },
                    { key: "SaaS", value: "Scalability" },
                    { key: "UI/UX", value: "Experience" },
                    { key: "Digital", value: "Growth" },
                    { key: "Branding", value: "Identity" }
                  ].map((row, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center p-6 lg:px-8 hover:bg-white/80 transition-colors group">
                      <div className="sm:w-1/3 text-sm tracking-widest uppercase font-bold text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors mb-1 sm:mb-0">{row.key}</div>
                      <div className="sm:w-2/3 text-lg md:text-xl text-[var(--color-foreground)] font-semibold">{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="type-body font-medium text-[var(--color-foreground)] text-lg">
                Together, these capabilities help turn ideas into complete digital ecosystems.
              </p>
            </div>
          </div>

          {/* 05. Build for what's next */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-3 lg:sticky lg:top-32">
              <span className="text-[var(--color-accent)] font-mono text-3xl font-light opacity-60">05</span>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <h2 className="type-h2 text-[var(--color-foreground)] font-semibold tracking-tight [text-wrap:balance]">Build for What's Next</h2>
              <p className="text-xl md:text-2xl text-[var(--color-muted)] leading-[1.6] [text-wrap:pretty]">
                Whether building a new AI product, modernising existing software or exploring intelligent enterprise workflows, KLEE can help move from <span className="font-semibold text-[var(--color-foreground)]">concept</span> <span className="mx-1.5 text-[var(--color-accent)]">→</span> <span className="font-semibold text-[var(--color-foreground)]">design</span> <span className="mx-1.5 text-[var(--color-accent)]">→</span> <span className="font-semibold text-[var(--color-foreground)]">development</span> <span className="mx-1.5 text-[var(--color-accent)]">→</span> <span className="font-semibold text-[var(--color-foreground)]">integration</span> <span className="mx-1.5 text-[var(--color-accent)]">→</span> <span className="font-semibold text-[var(--color-foreground)]">deployment</span>.
              </p>
            </div>
          </div>

        </Container>
      </Section>

      {/* Call to Action */}
      <Section spacing="default" background="default" borderTop className="relative bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        <Container size="default" className="text-center max-w-4xl mx-auto relative z-10 py-12 lg:py-20">
          <Reveal variant="slide-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight [text-wrap:balance]">
              DON’T JUST ADD AI.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light tracking-wide [text-wrap:balance]">
              Build with intelligence at the core.
            </p>
            <Button href="/contact" variant="primary" size="lg" showArrow className="bg-white text-black hover:bg-gray-100 shadow-[0_8px_30px_rgba(255,255,255,0.15)] rounded-full px-10 py-4 text-lg">
              Start Your AI Project
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
