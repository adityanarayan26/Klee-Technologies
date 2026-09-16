import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/svg/Logo";
import { Container } from "@/components/ui/Container";
import {
  COMPANY_NAV_ITEMS,
  SERVICES_NAV_ITEMS,
  BRAND_INFO,
} from "@/data/navigation";

/**
 * Reusable Global Footer for KLEE Technologies.
 * Spacious, minimal, and organized around Company, Services taxonomy, and brand credentials.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-background-secondary)] border-t border-[var(--color-border-subtle)] mt-auto">
      <Container size="default" className="pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Studio Information (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" aria-label="KLEE Home" className="inline-block mb-6">
                <Logo showWordmark={true} />
              </Link>

              <p className="text-xl md:text-2xl font-medium tracking-tight text-[var(--color-foreground)] mb-4 max-w-sm">
                {BRAND_INFO.statement}
              </p>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md mb-6">
                KLEE Technologies is a creative technology and design studio
                founded in 2018. Based at T-Hub Hyderabad, we build transformative
                software, digital products, and brand systems for forward-thinking
                enterprises.
              </p>

              {/* Contact Quick Info */}
              <div className="flex flex-col gap-1 text-xs text-[var(--color-muted)] mb-6">
                <span className="font-medium text-[var(--color-foreground)]">Headquarters:</span>
                <span className="max-w-sm leading-relaxed">{BRAND_INFO.contact.location}</span>
                <span className="mt-2 font-medium text-[var(--color-foreground)]">Direct Mail:</span>
                <a
                  href={`mailto:${BRAND_INFO.contact.email}`}
                  className="font-mono text-[var(--color-accent)] hover:underline w-fit"
                >
                  {BRAND_INFO.contact.email}
                </a>
              </div>
            </div>

            {/* Official Accreditation Badges */}
            <div className="mt-4 pt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-[var(--color-border-subtle)]">
                <Image
                  src="/logos/dpiit.png"
                  alt="DPIIT"
                  width={75}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-[var(--color-border-subtle)]">
                <Image
                  src="/logos/msme.png"
                  alt="MSME"
                  width={48}
                  height={16}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-[var(--color-border-subtle)]">
                <Image
                  src="/logos/iso9001.png"
                  alt="ISO 9001"
                  width={20}
                  height={20}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-[10px] font-semibold text-[var(--color-foreground)]">ISO 9001</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-[var(--color-border-subtle)]">
                <Image
                  src="/logos/aicte.png"
                  alt="AICTE"
                  width={20}
                  height={20}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-[10px] font-semibold text-[var(--color-foreground)]">AICTE</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8 lg:gap-12 md:pl-8">
            {/* Company Column */}
            <div>
              <h3 className="type-eyebrow text-[var(--color-foreground)] font-semibold mb-5">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {COMPANY_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors inline-block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="type-eyebrow text-[var(--color-foreground)] font-semibold mb-5">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {SERVICES_NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors inline-block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© {currentYear} KLEE Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>T-Hub Phase 2, Rai Durg, Hyderabad</span>
            <a
              href={`mailto:${BRAND_INFO.contact.email}`}
              className="text-[var(--color-accent)] hover:underline font-mono"
            >
              {BRAND_INFO.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
