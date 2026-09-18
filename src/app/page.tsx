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
import { RotatingHeroWords } from "@/components/ui/RotatingHeroWords";
import { HeroAmbientBackground } from "@/components/ui/HeroAmbientBackground";

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
          
          {/* Left Content (Text) - Bold, Commanding & Highly Dynamic */}
          <div className="w-full lg:w-[60%] xl:w-[61%] 2xl:w-[62%] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-12 pt-20 sm:pt-24 lg:pt-16 xl:pt-20 2xl:pt-24 pb-6 sm:pb-8 lg:pb-6 xl:pb-8 relative z-20 min-h-[calc(100svh-3.5rem)] lg:min-h-[100svh]">
            {/* Ambient Animated Mesh & Blueprint Overlay */}
            <HeroAmbientBackground />

            <Reveal variant="slide-up">
              {/* Studio Badge with Pulsing Live Radar Indicator */}
              <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0e76bc]/10 via-[#0e76bc]/6 to-[#0e76bc]/10 border border-[#0e76bc]/25 text-[#0e76bc] text-xs sm:text-[0.8rem] font-semibold tracking-wider uppercase mb-3.5 sm:mb-4 shadow-[0_2px_14px_rgba(14,118,188,0.12)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0e76bc] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0e76bc]" />
                </span>
                <span>Digital Product & Innovation Studio</span>
                <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded-full bg-[#0e76bc]/15 font-bold tracking-widest text-[#0e76bc]">
                  AI-FIRST
                </span>
              </div>

              {/* Centered Editorial Headline with Dynamic Rotating Specialty */}
              <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[2.15rem] xl:text-[2.6rem] 2xl:text-[3.45rem] font-medium tracking-tight leading-[1.12] mb-4 sm:mb-5 cursor-default text-center max-w-[680px] xl:max-w-[780px] 2xl:max-w-[920px]">
                {/* Line 1 - Dynamic Animated Morphing Words */}
                <span className="block">
                  <span className="inline-flex flex-wrap justify-center items-baseline gap-x-[0.25em]">
                    <TextRoll className="text-gray-950">Building</TextRoll>
                    <span className="text-gray-950">intelligent</span>
                    <RotatingHeroWords />
                  </span>
                </span>

                {/* Line 2 */}
                <span className="block">
                  <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
                    {"enterprise solutions & brands".split(" ").map((word, i) => (
                      <TextRoll key={`dark-1-${i}`} className="text-gray-950">
                        {word}
                      </TextRoll>
                    ))}
                  </span>
                </span>

                {/* Line 3 */}
                <span className="block">
                  <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
                    {"for what's next.".split(" ").map((word, i) => (
                      <TextRoll key={`dark-2-${i}`} className="text-gray-950">
                        {word}
                      </TextRoll>
                    ))}
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal variant="slide-up" delay={0.15}>
              <p className="relative z-10 mb-5 sm:mb-6 max-w-[520px] xl:max-w-[600px] 2xl:max-w-[660px] mx-auto text-base sm:text-lg lg:text-[1.05rem] xl:text-[1.16rem] leading-[1.58] text-gray-500 font-normal">
                Klee Technologies partners with businesses to design, develop and scale digital experiences powered by technology, creativity and purpose.
              </p>

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="md" 
                  showArrow={true}
                  className="relative overflow-hidden group bg-[#0e76bc] hover:bg-[#0a588c] text-white font-medium rounded-full px-8 sm:px-9 py-3.5 text-sm sm:text-base border-transparent shadow-[0_12px_28px_rgba(14,118,188,0.32)] hover:shadow-[0_16px_38px_rgba(14,118,188,0.48)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span className="relative z-10">Start a project</span>
                  {/* Subtle Light Gleam Animation on Hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                </Button>
                <Button 
                  href="/portfolio" 
                  variant="secondary" 
                  size="md"
                  className="bg-gray-50 hover:bg-gray-100/90 text-gray-800 font-medium rounded-full px-7 sm:px-8 py-3.5 text-sm sm:text-base border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Explore Work
                </Button>
              </div>

              {/* Animated Proof Strip with Live Counters */}
              <div className="relative z-10 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-100 w-full max-w-[480px] xl:max-w-[540px] grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div className="group cursor-default">
                  <div className="text-xl sm:text-2xl xl:text-[1.85rem] font-bold tracking-tight text-gray-950 flex items-center justify-center">
                    <AnimatedCounter value={200} suffix="+" duration={2} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 font-semibold mt-0.5 uppercase tracking-wider group-hover:text-gray-700 transition-colors">
                    Projects Delivered
                  </div>
                </div>
                <div className="border-x border-gray-100 px-1 sm:px-2 group cursor-default">
                  <div className="text-xl sm:text-2xl xl:text-[1.85rem] font-bold tracking-tight text-[#0e76bc] flex items-center justify-center">
                    <AnimatedCounter value={100} suffix="%" duration={2.2} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 font-semibold mt-0.5 uppercase tracking-wider group-hover:text-[#0e76bc] transition-colors">
                    Client Commitment
                  </div>
                </div>
                <div className="group cursor-default">
                  <div className="text-xl sm:text-2xl xl:text-[1.85rem] font-bold tracking-tight text-gray-950 flex items-center justify-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Global</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 font-semibold mt-0.5 uppercase tracking-wider group-hover:text-gray-700 transition-colors">
                    Enterprise Scale
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Content (Vertical Showcase) */}
          <div className="w-full lg:w-[40%] xl:w-[39%] 2xl:w-[38%] relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 min-h-[60vh] bg-[#0e76bc] overflow-hidden">
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
