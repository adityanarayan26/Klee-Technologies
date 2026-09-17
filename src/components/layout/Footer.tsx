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

const ACCREDITATION_ROWS = [
  [
    { src: "/logos/dpiit.png", alt: "DPIIT" },
    { src: "/logos/msme.png", alt: "MSME" },
  ],
  [
    { src: "/logos/iso9001.png", alt: "ISO 9001" },
    { src: "/logos/aicte.png", alt: "AICTE" },
    { src: "/logos/T-Hub_Logo-PNG.png", alt: "T-Hub" },
  ],
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-background-secondary)] border-t border-[var(--color-border-subtle)] mt-auto">
      <Container size="default" className="pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="md:col-span-6 flex flex-col">
            <Link href="/" aria-label="KLEE Home" className="inline-block mb-8">
              <Logo showWordmark={true} />
            </Link>

            <p className="text-xl md:text-2xl font-medium tracking-tight text-[var(--color-foreground)] mb-4 max-w-sm">
              {BRAND_INFO.statement}
            </p>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md">
              {BRAND_INFO.description}
            </p>

            {/* Official Accreditation Badges */}
            <div className="mt-7 flex flex-col items-start gap-2.5">
              {ACCREDITATION_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center justify-start gap-2.5">
                  {row.map((badge) => (
                    <div
                      key={badge.alt}
                      className="flex h-11 w-24 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] p-2"
                    >
                      <Image
                        src={badge.src}
                        alt={badge.alt}
                        width={80}
                        height={24}
                        className="h-6 w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm text-[var(--color-foreground)] font-semibold mb-6">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {COMPANY_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm text-[var(--color-foreground)] font-semibold mb-6">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {SERVICES_NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm text-[var(--color-foreground)] font-semibold mb-6">
                Connect
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-[var(--color-muted)]">
                <li>
                  <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:text-[var(--color-foreground)] transition-colors">
                    {BRAND_INFO.contact.email}
                  </a>
                </li>
                <li className="mt-2 leading-relaxed">
                  {BRAND_INFO.contact.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© {BRAND_INFO.establishedYear}–{currentYear} {BRAND_INFO.name} PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
