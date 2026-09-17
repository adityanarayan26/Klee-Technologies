import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { TextReveal } from "@/components/motion/TextReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { Lightbulb, PenTool, Blocks, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "KLEE Technologies | Software, SaaS, UI/UX, Digital Marketing & Branding",
  description:
    "KLEE Technologies is a Hyderabad-based technology and digital solutions company delivering software, SaaS, UI/UX, branding, graphic design, digital marketing and AI enterprise solutions worldwide.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="none" background="default" className="overflow-visible min-h-[calc(100svh-var(--header-height))] flex items-center py-6 sm:py-8 lg:py-4">
        <Container size="default" className="w-full">
          <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:gap-10">
            <div className="flex flex-col justify-center">
              <Reveal variant="slide-up">
                <div className="mb-3">
                  <span className="type-eyebrow inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                    WE DESIGN. WE BUILD. WE GROW.
                  </span>
                </div>
              </Reveal>

              <TextReveal
                as="h1"
                className="text-[1.95rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[2.65rem] xl:text-[3.1rem] leading-[1.1] font-medium tracking-tight text-balance text-[var(--color-foreground)] mb-3"
              >
                Building intelligent digital products, enterprise solutions and brands for what's next.
              </TextReveal>

              <Reveal variant="slide-up" delay={0.15}>
                <p className="mb-3 max-w-xl text-sm sm:text-[15px] leading-relaxed text-[var(--color-muted)]">
                  KLEE Technologies combines <strong>software development, AI integration, SaaS, UI/UX, digital marketing, and creative design</strong> to transform ideas into meaningful digital products and measurable business outcomes.
                </p>

                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[var(--color-foreground)]">
                  <span className="inline-flex items-center gap-1.5 text-[var(--color-accent)] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    Since 2018
                  </span>
                  <span className="text-[var(--color-border-strong)]">•</span>
                  <span>200+ Global Client Projects</span>
                  <span className="text-[var(--color-border-strong)]">•</span>
                  <span>500+ Students Trained</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button href="/contact" variant="primary" size="md" showArrow>
                    Start a Project
                  </Button>
                  <Button href="/portfolio" variant="outline" size="md" showArrow arrowDirection="up-right">
                    Explore Our Work
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal variant="slide-up" delay={0.2} className="flex items-center justify-center">
              <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center">
                <div className="pointer-events-none absolute -left-6 -top-6 h-40 w-40 rounded-full bg-blue-400/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-6 -right-4 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl" />
                <div className="pointer-events-none absolute right-6 top-1/3 h-28 w-28 rounded-full bg-indigo-300/20 blur-2xl" />
                <Image
                  src="/hero/intelligent-digital-products-illustration.png"
                  alt="Illustration of connected AI, SaaS, design and digital product modules"
                  width={1227}
                  height={1282}
                  priority
                  className="relative z-10 h-auto w-full max-h-[38svh] lg:max-h-[44svh] xl:max-h-[48svh] object-contain drop-shadow-[0_20px_30px_rgba(14,118,188,0.16)]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Full Bleed Hero Video */}
      <Reveal variant="slide-up" delay={0.1}>
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-white lg:aspect-[2.35/1]">
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-[1.02] object-cover"
          />
        </div>
      </Reveal>

      {/* Introduction */}
      <Section spacing="default" background="default">
        <Container size="default">
          <div className="max-w-3xl">
            <Reveal variant="slide-up">
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-6">
                Ideas deserve more than execution. They deserve evolution.
              </h2>
              <div className="space-y-4 type-body text-[var(--color-muted)] leading-relaxed">
                <p>
                  At <strong>KLEE TECHNOLOGIES PRIVATE LIMITED</strong>, we bring technology, creativity and business thinking together under one roof.
                </p>
                <p>
                  From a brand identity to a complete SaaS platform, from a mobile experience to a government-focused application, we create digital solutions designed around real-world needs.
                </p>
                <p className="text-xl font-medium text-[var(--color-foreground)] mt-6 pt-6 border-t border-[var(--color-border-subtle)]">
                  Don't simply add AI to your business. Build your business around intelligence.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Client Logos Marquee */}
      <LogoMarquee />

      {/* WHY KLEE */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default">
          <div className="mb-12">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">WHY KLEE</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">
                Where Technology Meets Creativity
              </h2>
              <p className="type-body text-[var(--color-muted)]">
                The best digital experiences happen when engineering and creativity work together.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Think", desc: "We understand the business, the audience and the opportunity before designing the solution.", icon: <Lightbulb className="w-8 h-8 text-[var(--color-accent)] mb-4" strokeWidth={1.5} /> },
              { num: "02", title: "Design", desc: "We transform ideas into intuitive interfaces, powerful identities and meaningful experiences.", icon: <PenTool className="w-8 h-8 text-[var(--color-accent)] mb-4" strokeWidth={1.5} /> },
              { num: "03", title: "Build", desc: "Our development capabilities turn concepts into reliable digital products and platforms.", icon: <Blocks className="w-8 h-8 text-[var(--color-accent)] mb-4" strokeWidth={1.5} /> },
              { num: "04", title: "Grow", desc: "We connect products and brands with the right audiences through digital marketing and strategic communication.", icon: <TrendingUp className="w-8 h-8 text-[var(--color-accent)] mb-4" strokeWidth={1.5} /> }
            ].map((item, i) => (
              <Reveal key={item.num} variant="slide-up" delay={i * 0.1}>
                <SpotlightCard className="h-full p-8 border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] hover:border-[var(--color-accent)]/50 transition-colors duration-300">
                  {item.icon}
                  <span className="text-sm font-bold tracking-widest text-[var(--color-accent)]">{item.num} — {item.title}</span>
                  <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key Numbers */}
      <Section spacing="compact" background="secondary" borderTop borderBottom>
        <Container size="default">
          <Reveal variant="slide-up">
            <div className="mb-10 text-center">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">KEY NUMBERS</span>
              <h2 className="type-h3 text-[var(--color-foreground)] font-medium">Built on Experience. Driven by Possibility.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Reveal variant="slide-up" delay={0.1}>
              <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-foreground)]">
                <AnimatedCounter value={2018} from={1980} duration={1.6} format={false} />
              </p>
              <p className="text-sm uppercase tracking-wider text-[var(--color-muted)] mt-2">Founded</p>
            </Reveal>
            <Reveal variant="slide-up" delay={0.2}>
              <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-foreground)]">
                <AnimatedCounter value={200} suffix="+" duration={1.8} />
              </p>
              <p className="text-sm uppercase tracking-wider text-[var(--color-muted)] mt-2">Client Projects Delivered Worldwide</p>
            </Reveal>
            <Reveal variant="slide-up" delay={0.3}>
              <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-foreground)]">
                <AnimatedCounter value={500} suffix="+" duration={2} />
              </p>
              <p className="text-sm uppercase tracking-wider text-[var(--color-muted)] mt-2">Students Successfully Completed Internships</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section spacing="default" background="default">
        <Container size="default">
          <div className="mb-12">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">SERVICES PREVIEW</span>
              <h2 className="type-h2 text-[var(--color-foreground)] font-medium">Everything Digital. Under One Roof.</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Digital Marketing", desc: "Turn attention into meaningful engagement, qualified opportunities and sustainable digital growth." },
              { title: "Graphic Design", desc: "Create visual identities and communication systems that make brands impossible to overlook. (Logo Design • Marketing Collateral • Space Branding • Pitch Decks • Company Profiles)" },
              { title: "UI/UX Design & Development", desc: "Design digital experiences that look exceptional, feel effortless and work beautifully." },
              { title: "Software Development", desc: "From business applications to custom platforms, we engineer software around your objectives." },
              { title: "SaaS Development", desc: "Build scalable digital products designed for recurring value, performance and growth." },
              { title: "AI-First Enterprise Integrated Solutions", desc: "Intelligence at the core. Embed AI into your existing technology ecosystem, data, and workflows." },
              { title: "Branding", desc: "Build a brand that communicates who you are before you say a word." },
              { title: "Live Internship Projects", desc: "Give students practical exposure by working on real-world projects and industry-oriented technologies." }
            ].map((srv, i) => (
              <Reveal key={srv.title} variant="slide-up" delay={i * 0.05}>
                <div className="h-full pb-6 border-b border-[var(--color-border-subtle)]">
                  <h3 className="text-xl font-medium text-[var(--color-foreground)] mb-3">{srv.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{srv.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Capability & Gov Experience */}
      <Section spacing="default" background="secondary" borderTop>
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">FEATURED CAPABILITY</span>
              <h3 className="type-h3 text-[var(--color-foreground)] font-medium mb-4">From First Sketch to Final Product.</h3>
              <p className="type-body text-[var(--color-muted)] mb-6">
                A powerful idea can require strategy, branding, design, technology and marketing. KLEE brings these capabilities together so your project doesn't have to move between disconnected teams.
              </p>
              <p className="text-sm font-semibold tracking-wider text-[var(--color-foreground)] uppercase bg-white p-4 rounded-lg border border-[var(--color-border-subtle)]">
                Digital Marketing → Design → UI/UX → Software → SaaS → AI → Enterprise Integration → Growth
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.1}>
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">GOVERNMENT / INSTITUTIONAL EXPERIENCE</span>
              <h3 className="type-h3 text-[var(--color-foreground)] font-medium mb-4">Technology That Creates Real-World Impact</h3>
              <p className="type-body text-[var(--color-muted)] mb-6">
                KLEE Technologies has also contributed to technology initiatives beyond commercial projects. The company built the <strong>KSDC application for the Telangana Government under a skill development program</strong>, demonstrating its ability to work on technology solutions with institutional and public-sector relevance.
              </p>
              <Button href="/portfolio" variant="outline" showArrow>
                Explore Our Portfolio
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default" className="text-center max-w-2xl mx-auto">
          <Reveal variant="slide-up">
            <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">Have an Idea Worth Building?</h2>
            <p className="type-body-large text-[var(--color-muted)] mb-8">
              Let's turn it into something people can see, use and remember. Start your next digital project with KLEE Technologies.
            </p>
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Talk to KLEE
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
