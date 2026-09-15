import React from "react";
import Link from "next/link";
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

              <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md">
                KLEE Technologies is a creative technology and design studio
                founded in 2018. Based at T-Hub Hyderabad, we build transformative
                software, digital products, and brand systems for forward-thinking
                enterprises.
              </p>
            </div>

            {/* Studio Badges */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap gap-2 text-xs text-[var(--color-muted)]">
              <span className="px-2.5 py-1 rounded bg-white border border-[var(--color-border-subtle)] font-medium">
                DPIIT Recognized Startup
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-[var(--color-border-subtle)] font-medium">
                T-Hub, Hyderabad
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-[var(--color-border-subtle)] font-medium">
                Est. 2018
              </span>
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
            <span>{BRAND_INFO.headquarters}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
