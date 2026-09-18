import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | KLEE Technologies",
  description: "Privacy policy for KLEE Technologies Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="spacious" background="secondary" className="pt-32 pb-16">
        <Container size="sm">
          <Reveal variant="slide-up">
            <span className="type-eyebrow mb-4 block">KLEE TECHNOLOGIES</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-foreground)] mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-foreground)] font-medium mb-4">
              Privacy, designed with clarity.
            </p>
            <p className="text-sm text-[var(--color-muted)] mb-12">
              Last updated · 18 September 2026
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-foreground-secondary)] pb-8 border-b border-[var(--color-border-subtle)]">
              At KLEE TECHNOLOGIES PRIVATE LIMITED, we believe privacy should be simple to understand. We collect only what we need, use it responsibly, and take reasonable measures to protect it.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Content Section */}
      <Section spacing="default" background="default">
        <Container size="sm" className="space-y-16">
          
          <PolicySection num="01" title="Who we are">
            <p>KLEE TECHNOLOGIES PRIVATE LIMITED is a technology and digital solutions company established on 6 April 2018.</p>
            <p>We create digital products, enterprise solutions, brands and experiences across AI · Software · SaaS · UI/UX · Digital · Branding.</p>
            <p>Our office is located at T-Hub, Hyderabad, Telangana, India.</p>
          </PolicySection>

          <PolicySection num="02" title="Information you share">
            <p>When you contact KLEE, you may choose to provide information such as Name · Email · Phone · Company · Project requirements · Messages · Internship information · Resume/CV.</p>
            <p>We use this information to understand what you need and respond appropriately.</p>
            <p>You choose what you share.</p>
            <p>Please do not submit passwords, authentication codes, financial credentials, confidential source code or highly sensitive information through ordinary website forms.</p>
          </PolicySection>

          <PolicySection num="03" title="Information collected automatically">
            <p>When you visit our website, certain technical information may be collected automatically.</p>
            <p>This can include your device, browser, IP address, operating system, pages visited and usage information.</p>
            <p>This information helps us understand how our website works and improve your experience.</p>
          </PolicySection>

          <PolicySection num="04" title="How we use information">
            <ul className="space-y-2 list-none p-0">
              <li><strong>Respond</strong> — Answer your questions and enquiries.</li>
              <li><strong>Understand</strong> — Understand your business or project requirements.</li>
              <li><strong>Deliver</strong> — Provide requested products and services.</li>
              <li><strong>Improve</strong> — Make our website and services better.</li>
              <li><strong>Communicate</strong> — Keep you informed about relevant interactions.</li>
              <li><strong>Protect</strong> — Maintain security and prevent misuse.</li>
              <li><strong>Comply</strong> — Meet applicable legal obligations.</li>
            </ul>
          </PolicySection>

          <PolicySection num="05" title="AI-first technology">
            <p>AI is becoming a fundamental layer of modern enterprise technology.</p>
            <p>KLEE Technologies develops AI-First Enterprise Integrated Solutions, connecting AI with software, SaaS platforms, enterprise applications, workflows and business operations.</p>
            <p>Information provided for an AI or technology project may be used to understand your requirements and develop an appropriate solution.</p>
            <p>Share only what is necessary.</p>
            <p>For confidential or proprietary information, use an appropriate secure channel and applicable confidentiality arrangements.</p>
          </PolicySection>

          <PolicySection num="06" title="Cookies">
            <p>Our website may use cookies and similar technologies.</p>
            <p>They can help us remember preferences, understand website usage, measure performance, improve navigation, support security and understand marketing effectiveness.</p>
            <p>You can manage cookies through your browser settings. Where required by law, we will seek appropriate consent for non-essential cookies.</p>
          </PolicySection>

          <PolicySection num="07" title="Third-party services">
            <p>Some parts of our digital infrastructure may rely on trusted third-party providers.</p>
            <p>These may support hosting, analytics, cloud infrastructure, security, communication, marketing and forms.</p>
            <p>These providers may process information according to their own policies and applicable obligations.</p>
          </PolicySection>

          <PolicySection num="08" title="When information is shared">
            <p>We do not sell your personal information as a product.</p>
            <p>Information may be shared when reasonably necessary with authorised KLEE personnel, service providers, technology partners, professional advisers, business partners involved in requested services, or government and regulatory authorities when legally required.</p>
            <p>We aim to share only what is reasonably necessary.</p>
          </PolicySection>

          <PolicySection num="09" title="Your choices">
            <p>Depending on applicable law, you may have rights regarding your personal information.</p>
            <ul className="space-y-2 list-none p-0">
              <li><strong>Access</strong> — Know what information we hold about you.</li>
              <li><strong>Correct</strong> — Request correction of inaccurate information.</li>
              <li><strong>Delete</strong> — Request deletion where legally applicable.</li>
              <li><strong>Restrict</strong> — Request restriction of certain processing.</li>
              <li><strong>Object</strong> — Object to certain processing.</li>
              <li><strong>Withdraw</strong> — Withdraw consent where processing is based on consent.</li>
            </ul>
            <p>Reasonable identity verification may be required.</p>
          </PolicySection>

          <PolicySection num="10" title="Security">
            <p>Security is fundamental to responsible technology.</p>
            <p>We use reasonable technical and organisational measures designed to protect information against unauthorised access, disclosure, misuse, loss, alteration and destruction.</p>
            <p>No internet transmission or electronic storage system can guarantee absolute security.</p>
            <p>We protect your information responsibly.</p>
          </PolicySection>

          <PolicySection num="11" title="Data retention">
            <p>We keep information only for as long as reasonably necessary.</p>
            <p>This may include the time required to provide services, manage relationships, respond to enquiries, process internship applications, maintain business records, meet legal obligations, resolve disputes or enforce agreements.</p>
            <p>Retention periods depend on the nature and purpose of the information.</p>
          </PolicySection>

          <PolicySection num="12" title="Students & internships">
            <p>KLEE Technologies provides Live Internship Projects designed to give students practical industry exposure.</p>
            <p>500+ students have completed internships with KLEE Technologies.</p>
            <p>Information submitted by internship applicants may be used to evaluate applications, understand skills, communicate opportunities and administer internship programs.</p>
            <p>We collect information reasonably necessary for these purposes.</p>
          </PolicySection>

          <PolicySection num="13" title="A global outlook">
            <p>KLEE Technologies has delivered 200+ client projects worldwide.</p>
            <p>Our clients, partners and technology providers may operate in different countries.</p>
            <p>As a result, information may sometimes be processed across jurisdictions, subject to applicable privacy and data-protection requirements.</p>
          </PolicySection>

          <PolicySection num="14" title="Third-party websites">
            <p>Our website may contain links to external websites and services.</p>
            <p>Those websites operate independently. Their own privacy policies apply when you interact with them.</p>
            <p>We encourage you to review their policies before sharing information.</p>
          </PolicySection>

          <PolicySection num="15" title="Children's privacy">
            <p>Our general website is not intentionally designed to collect personal information from children without appropriate authorisation or consent.</p>
            <p>Because KLEE also provides student internship opportunities, student information may be collected where necessary for those programs and subject to applicable requirements.</p>
          </PolicySection>

          <PolicySection num="16" title="Business changes">
            <p>If KLEE Technologies undergoes a merger, acquisition, restructuring, sale of assets or similar transaction, information may be transferred as part of that transaction.</p>
            <p>Any such transfer will remain subject to applicable law and appropriate safeguards.</p>
          </PolicySection>

          <PolicySection num="17" title="Changes to this policy">
            <p>Technology evolves. Our privacy practices may evolve with it.</p>
            <p>We may update this Privacy Policy when our services, technology, business practices or applicable legal requirements change.</p>
            <p>The Last Updated date will indicate the latest version published on this page.</p>
          </PolicySection>

          <PolicySection num="18" title="Talk to us">
            <p>Privacy questions shouldn't be complicated.</p>
            <p>If you have a question about this Privacy Policy or your personal information, contact us.</p>
            <div className="mt-6 p-6 bg-[var(--color-background-secondary)] rounded-xl border border-[var(--color-border-subtle)]">
              <h4 className="font-bold text-lg text-[var(--color-foreground)] mb-4">KLEE TECHNOLOGIES PRIVATE LIMITED</h4>
              <p className="mb-4">
                1/C, Plot No: 25, T-Hub, 4th Floor<br />
                Sy No 83/1, Knowledge City Road<br />
                Panmaktha, Rai Durg<br />
                Hyderabad, Telangana – 500032<br />
                India
              </p>
              <p>Email: <a href="mailto:info@kleetechnologies.com" className="text-[var(--color-accent)] hover:underline">info@kleetechnologies.com</a></p>
              <p>Phone: +91 93900 93994</p>
            </div>
          </PolicySection>

          <PolicySection num="19" title="Applicable law">
            <p>This Privacy Policy is intended to operate in accordance with applicable laws and regulations of India, together with mandatory privacy and data-protection requirements that may apply in other jurisdictions.</p>
            <p>Where applicable law provides additional rights, those rights continue to apply.</p>
          </PolicySection>
          
          <div className="pt-16 pb-8 border-t border-[var(--color-border-subtle)] text-center">
            <Reveal variant="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
                Privacy is not a feature.
                <br />
                It's a responsibility.
              </h2>
              <p className="text-lg text-[var(--color-muted)] mb-12">
                We believe the future of technology should be built on Innovation. Transparency. Trust.
              </p>
              
              <div className="inline-flex flex-col items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded-2xl border border-[var(--color-border-subtle)]">
                <span className="font-bold tracking-widest text-[var(--color-foreground)] text-sm mb-2">KLEE TECHNOLOGIES PRIVATE LIMITED</span>
                <span className="font-bold tracking-widest text-[var(--color-accent)] text-xs">DESIGN. TECHNOLOGY. AI. GROWTH.</span>
              </div>
            </Reveal>
          </div>

        </Container>
      </Section>
    </>
  );
}

function PolicySection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal variant="slide-up" className="scroll-mt-32" id={`section-${num}`}>
      <div className="mb-6">
        <span className="text-3xl font-bold text-[var(--color-accent)] block mb-2">{num}</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-[1.05rem] leading-relaxed text-[var(--color-foreground-secondary)]">
        {children}
      </div>
    </Reveal>
  );
}
