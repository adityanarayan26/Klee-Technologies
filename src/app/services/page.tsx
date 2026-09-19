import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { HorizontalGallery } from "@/components/ui/HorizontalGallery";
import { SERVICE_ASSETS } from "@/data/serviceAssets";
import { Quote, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Software, SaaS, UI/UX, Digital Marketing & Branding | KLEE",
  description:
    "Explore KLEE Technologies services including software development, SaaS development, UI/UX design, digital marketing, graphic design, branding and live internship projects.",
  openGraph: {
    title: "Services | KLEE Technologies",
    description: "Explore KLEE Technologies services including software development, SaaS development, UI/UX design, digital marketing, graphic design, branding and live internship projects.",
    url: "https://kleetechnologies.com/services",
  }
};

const SERVICES = [
  {
    id: "digital-marketing",
    num: "01",
    title: "DIGITAL MARKETING",
    heading: "Don't Just Get Seen. Get Remembered.",
    desc: "We create digital marketing strategies designed to connect brands with the right audiences.",
    capabilities: [
      "Digital Marketing Strategy",
      "Search Engine Optimization (SEO)",
      "Social Media Optimization (SMO)",
      "Performance Marketing",
      "Email Marketing",
      "Social Media Marketing",
      "Campaign Design",
      "Creative Content",
      "Digital Brand Communication",
      "Lead Generation",
      "Online Brand Promotion"
    ],
    oneliner: "Attention is valuable. We help turn it into opportunity."
  },
  {
    id: "graphic-design",
    num: "02",
    title: "GRAPHIC DESIGN",
    heading: "Make Your Brand Look Like It Means Business.",
    desc: "We create visual communication systems that make brands consistent, memorable and professional.",
    capabilities: [
      "Logo Design",
      "Marketing Collateral",
      "Space Branding",
      "Pitch Deck Design",
      "Company Profile Design"
    ],
    oneliner: "Every visual is an opportunity to make an impression."
  },
  {
    id: "ui-ux",
    num: "03",
    title: "UI/UX DESIGN & DEVELOPMENT",
    heading: "Beautiful Interfaces. Effortless Experiences.",
    desc: "We design and develop intuitive mobile and web experiences built around users and business objectives.",
    capabilities: [
      "UX Research",
      "Information Architecture",
      "User Flows",
      "Wireframes",
      "UI Design",
      "Design Systems",
      "Responsive Web Design",
      "Mobile App UI/UX",
      "Front-End Development"
    ],
    oneliner: "We design digital experiences people don't need instructions to use."
  },
  {
    id: "software-development",
    num: "04",
    title: "SOFTWARE DEVELOPMENT",
    heading: "Engineering Built Around Your Business.",
    desc: "Custom software should fit the business—not force the business to fit the software. We develop solutions tailored to specific operational and business requirements.",
    capabilities: [
      "Custom Software",
      "Web Applications",
      "Business Applications",
      "Application Development",
      "API & System Integration",
      "Database-Driven Platforms",
      "Custom Digital Platforms"
    ],
    oneliner: "Your business is unique. Your software should be too."
  },
  {
    id: "saas-development",
    num: "05",
    title: "SAAS DEVELOPMENT",
    heading: "Build Once. Scale Intelligently.",
    desc: "We help transform software ideas into scalable SaaS products.",
    capabilities: [
      "SaaS Product Strategy",
      "Product Architecture",
      "UI/UX",
      "Multi-user Platforms",
      "Subscription-based Products",
      "Cloud-ready Applications",
      "Product Development",
      "Scalability Planning"
    ],
    oneliner: "From product idea to scalable digital business."
  },
  {
    id: "ai-integration",
    num: "06",
    title: "AI-FIRST ENTERPRISE INTEGRATED SOLUTIONS",
    heading: "Intelligence at the core. Integration across the enterprise.",
    desc: "KLEE Technologies helps businesses embed AI into their existing technology ecosystem—connecting enterprise applications, data, workflows, automation, software, SaaS platforms and business operations into intelligent, connected solutions.",
    capabilities: [
      "AI-powered enterprise applications",
      "Intelligent workflow automation",
      "AI-integrated SaaS platforms",
      "Enterprise AI assistants & copilots",
      "Data & knowledge intelligence",
      "AI-enabled customer experiences",
      "AI + software integration",
      "Business process intelligence",
      "Custom AI solutions",
      "Enterprise system integration"
    ],
    oneliner: "Don't simply add AI to your business. Build your business around intelligence."
  },
  {
    id: "branding",
    num: "07",
    title: "BRANDING",
    heading: "Build a Brand People Recognise Before They Read the Name.",
    desc: "Branding is more than a logo. We create cohesive brand identities that connect visual language, communication and customer perception.",
    capabilities: [
      "Brand Identity",
      "Logo Systems",
      "Brand Visual Language",
      "Brand Communication",
      "Marketing Assets",
      "Corporate Identity",
      "Digital Brand Presence"
    ],
    oneliner: "We don't just design brands. We design recognition."
  },
  {
    id: "internship-projects",
    num: "08",
    title: "LIVE INTERNSHIP PROJECTS",
    heading: "Learn Technology by Building It.",
    desc: "KLEE Technologies provides students with exposure to live, industry-oriented projects, helping bridge the gap between academic learning and practical experience.",
    capabilities: [
      "Software Development",
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Digital Marketing",
      "Graphic Design",
      "SaaS Projects"
    ],
    oneliner: "Don't just learn the technology. Build with it."
  }
];

export default function ServicesPage() {
  const jsonLd = SERVICES.map(srv => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": srv.title,
    "description": srv.desc,
    "provider": {
      "@type": "Organization",
      "name": "KLEE Technologies",
      "url": "https://kleetechnologies.com"
    },
    "areaServed": "Worldwide"
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Services Hero */}
      <Section spacing="hero" background="default">
        <Container size="default">
          <div className="max-w-4xl">
            <Reveal variant="slide-up">
              <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">SERVICES</span>
            </Reveal>
            <TextReveal as="h1" className="type-display text-[var(--color-foreground)] font-medium mb-6 text-balance">
              One Digital Partner. Multiple Possibilities.
            </TextReveal>
            <Reveal variant="slide-up" delay={0.1}>
              <p className="type-body-large text-[var(--color-muted)] max-w-3xl leading-relaxed">
                From brand identity to enterprise software, KLEE brings <strong>design, technology and digital growth</strong> together.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services List */}
      <div className="bg-[var(--color-background-primary)]">
        {SERVICES.map((srv, index) => (
          <Section key={srv.id} id={srv.id} spacing="default" borderTop background={index % 2 === 0 ? "secondary" : "default"}>
            <Container size="default">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                  <Reveal variant="slide-up">
                    <span className="type-eyebrow text-[var(--color-accent)] mb-4 block">{srv.num} — {srv.title}</span>
                    <h2 className="text-3xl lg:text-4xl text-[var(--color-foreground)] font-medium mb-6 tracking-tight text-balance">
                      {srv.heading}
                    </h2>
                    <p className="type-body text-[var(--color-muted)] mb-8 max-w-md">
                      {srv.desc}
                    </p>
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0e76bc]/20 bg-gradient-to-br from-white via-[#f4f8fc] to-[#eaf5f0] p-6 sm:p-7 shadow-[0_12px_36px_-6px_rgba(14,118,188,0.1),0_4px_16px_rgba(0,0,0,0.03)] group transition-all duration-500 hover:shadow-[0_18px_45px_-6px_rgba(14,118,188,0.18)] hover:border-[#0e76bc]/35">
                      {/* Ambient corner glow */}
                      <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-[#0e76bc]/20 to-emerald-400/20 rounded-full blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />
                      
                      {/* Left accent gradient stripe */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0e76bc] via-[#00c982] to-[#0e76bc] rounded-l-3xl" />

                      {/* Watermark Quote Icon in background */}
                      <Quote className="absolute right-4 bottom-3 w-20 h-20 text-[#0e76bc]/[0.07] -rotate-12 pointer-events-none select-none" />

                      <div className="relative z-10">
                        {/* Kicker badge */}
                        <div className="flex items-center gap-2 mb-3.5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#0e76bc]/25 text-[#0e76bc] text-[11px] font-bold tracking-wider uppercase shadow-xs">
                            <Sparkles className="w-3 h-3 text-[#0e76bc] fill-[#0e76bc]/30" />
                            Guiding Principle
                          </span>
                        </div>

                        {/* Quote text */}
                        <blockquote className="text-lg sm:text-xl lg:text-[21px] font-medium tracking-tight text-slate-900 leading-snug sm:leading-snug text-pretty">
                          &ldquo;{srv.oneliner}&rdquo;
                        </blockquote>

                        {/* Micro footer */}
                        <div className="mt-4 pt-3 border-t border-[#0e76bc]/15 flex items-center justify-between">
                          <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-muted)]">
                            The KLEE Standard
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00c982] animate-pulse" />
                            <span className="text-[11px] font-medium text-slate-600">Core Belief</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
                
                <div className="lg:col-span-7">
                  <Reveal variant="slide-up" delay={0.1}>
                    <h3 className="text-sm font-semibold tracking-wider text-[var(--color-foreground)] uppercase mb-6">Capabilities / Focus Areas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {srv.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                          <span className="text-base text-[var(--color-muted)]">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
              
              {/* Dedicated Service Gallery from service page images */}
              {SERVICE_ASSETS[srv.id] && SERVICE_ASSETS[srv.id].length > 0 && (
                <Reveal variant="slide-up" delay={0.2}>
                  <HorizontalGallery 
                    assets={SERVICE_ASSETS[srv.id]} 
                    priority={index === 0}
                  />
                </Reveal>
              )}
            </Container>
          </Section>
        ))}
      </div>

      {/* Services CTA */}
      <Section spacing="default" background="default" borderTop>
        <Container size="default" className="text-center max-w-2xl mx-auto">
          <Reveal variant="slide-up">
            <h2 className="type-h2 text-[var(--color-foreground)] font-medium mb-4">Have a challenge that needs technology, design or digital expertise?</h2>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Let's Build It
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
