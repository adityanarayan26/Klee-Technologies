import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { TextReveal } from "@/components/motion/TextReveal";
import TextRoll from "@/components/ui/text-roll";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { Lightbulb, PenTool, Blocks, TrendingUp } from "lucide-react";
import { HeroIllustration } from "@/components/ui/HeroIllustration";
import { VerticalShowcase } from "@/components/ui/VerticalShowcase";

export const metadata: Metadata = {
  title: "KLEE Technologies | Software, SaaS, UI/UX, Digital Marketing & Branding",
  description:
    "KLEE Technologies is a Hyderabad-based technology and digital solutions company delivering software, SaaS, UI/UX, branding, graphic design, digital marketing and AI enterprise solutions worldwide.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="none" className="relative min-h-[100svh] w-full overflow-hidden bg-white flex items-stretch">
        
        {/* Split Screen Layout */}
        <div className="flex flex-col lg:flex-row w-full h-full min-h-[100svh]">
          
          {/* Left Content (Text) */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col justify-center items-center text-center px-6 sm:px-10 lg:px-8 xl:px-12 pt-32 sm:pt-36 lg:pt-28 pb-12 relative z-20 min-h-[calc(100svh-5rem)]">
            <Reveal variant="slide-up">
              {/* Studio Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e76bc]/8 border border-[#0e76bc]/20 text-[#0e76bc] text-xs font-semibold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0e76bc] animate-pulse" />
                <span>Digital Product & Innovation Studio</span>
              </div>

              {/* Centered Editorial Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.65rem] 2xl:text-[3rem] font-medium tracking-tight leading-[1.2] mb-5 sm:mb-6 cursor-default text-center">
                {/* Line 1 */}
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  <span className="inline-flex flex-wrap lg:flex-nowrap justify-center gap-x-[0.25em]">
                    <TextRoll className="text-gray-900">Building</TextRoll>
                    {"intelligent digital products,".split(" ").map((word, i) => (
                      <TextRoll key={`blue-${i}`} className="text-[#0e76bc]">
                        {word}
                      </TextRoll>
                    ))}
                  </span>
                </span>

                {/* Line 2 */}
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  <span className="inline-flex flex-wrap lg:flex-nowrap justify-center gap-x-[0.25em]">
                    {"enterprise solutions & brands".split(" ").map((word, i) => (
                      <TextRoll key={`dark-1-${i}`} className="text-gray-900">
                        {word}
                      </TextRoll>
                    ))}
                  </span>
                </span>

                {/* Line 3 */}
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  <span className="inline-flex flex-wrap lg:flex-nowrap justify-center gap-x-[0.25em]">
                    {"for what's next.".split(" ").map((word, i) => (
                      <TextRoll key={`dark-2-${i}`} className="text-gray-900">
                        {word}
                      </TextRoll>
                    ))}
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal variant="slide-up" delay={0.15}>
              <p className="mb-8 max-w-[500px] mx-auto text-base lg:text-[1.05rem] leading-[1.65] text-gray-500 font-normal">
                Klee Technologies partners with businesses to design, develop and scale digital experiences powered by technology, creativity and purpose.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg" 
                  showArrow={true}
                  className="bg-[#0e76bc] hover:bg-[#0a588c] text-white font-medium rounded-full px-8 py-3.5 border-transparent shadow-[0_10px_25px_rgba(14,118,188,0.3)] hover:shadow-[0_14px_35px_rgba(14,118,188,0.45)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Start a project
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Content (Vertical Showcase) */}
          <div className="w-full lg:w-[42%] xl:w-[40%] relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 min-h-[60vh] bg-[#0e76bc] overflow-hidden">
            <VerticalShowcase />
          </div>
        </div>

      </Section>

      {/* Marquee Section */}
      <Section spacing="none" className="bg-white border-t border-gray-100 pt-10 pb-6 relative z-30">
        <div className="w-full max-w-[1420px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col items-start">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">TRUSTED BY VISIONARY TEAMS</span>
        </div>
        <div className="w-full">
          <LogoMarquee className="py-2" />
        </div>
      </Section>



      {/* Full Bleed Hero Video */}
      <Reveal variant="slide-up" delay={0.1}>
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-white lg:aspect-[2.35/1]">
          <video
            src="/videos/hero-video.mp4"
            poster="/videos/hero-video-poster.jpg"
            preload="auto"
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

      {/* Introduction */}
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
      <Section spacing="compact" background="secondary" borderTop borderBottom className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-subtle)_0%,transparent_100%)] opacity-50" />
        <Container size="default" className="relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Digital Marketing", desc: "Turn attention into meaningful engagement, qualified opportunities and sustainable digital growth." },
              { title: "Graphic Design", desc: "Create visual identities and communication systems that make brands impossible to overlook." },
              { title: "UI/UX Design & Dev", desc: "Design digital experiences that look exceptional, feel effortless and work beautifully." },
              { title: "Software Development", desc: "From business applications to custom platforms, we engineer software around your objectives." },
              { title: "SaaS Development", desc: "Build scalable digital products designed for recurring value, performance and growth." },
              { title: "AI-First Solutions", desc: "Intelligence at the core. Embed AI into your existing technology ecosystem, data, and workflows." },
              { title: "Branding", desc: "Build a brand that communicates who you are before you say a word." },
              { title: "Live Internships", desc: "Give students practical exposure by working on real-world projects and industry-oriented tech." }
            ].map((srv, i) => (
              <Reveal key={srv.title} variant="slide-up" delay={i * 0.05}>
                <div className="group h-full p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-[var(--color-border-subtle)] hover:bg-white hover:border-[var(--color-accent)]/30 hover:shadow-[0_12px_40px_-15px_rgba(14,118,188,0.2)] transition-all duration-300 relative overflow-hidden">
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--color-accent)] z-10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <h3 className="relative text-base font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors mb-3 pr-6 z-10">{srv.title}</h3>
                  <p className="relative text-[13px] text-[var(--color-muted)] leading-relaxed z-10">{srv.desc}</p>
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
