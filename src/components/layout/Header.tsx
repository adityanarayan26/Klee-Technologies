"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
import dynamic from "next/dynamic";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { Logo } from "@/components/svg/Logo";
import { MenuIcon } from "@/components/svg/Icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const MobileNav = dynamic(
  () => import("@/components/layout/MobileNav").then((m) => m.MobileNav),
  { ssr: false }
);

/**
 * Global Header Component for KLEE Technologies.
 * Sticky, responsive, with subtle scroll-activated glass/border treatment,
 * floating pill hover glide, and minimal scroll progress bar.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="w-full max-w-[1420px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo Area */}
          <Link
            href="/"
            className="flex items-center group transition-transform duration-200 hover:opacity-90 focus-visible:outline-2"
            aria-label="KLEE Technologies - Return to Home"
          >
            <Logo showWordmark={true} />
          </Link>

          {/* Desktop Navigation with Gliding Pill Indicator */}
          <nav
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-2 rounded-full bg-white/70 backdrop-blur-md shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] border border-[var(--color-border-subtle)]/60"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              const isHighlighted = hoveredPath ? hoveredPath === item.href : isActive;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-xs lg:text-sm font-medium transition-colors duration-150 rounded-full select-none",
                    isActive
                      ? "text-[var(--color-foreground)] font-semibold"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  )}
                >
                  {isHighlighted && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[var(--color-border-subtle)]"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              showArrow
              arrowDirection="right"
              className="hidden sm:inline-flex bg-gray-950 hover:bg-black text-white border-transparent shadow-md rounded-full px-5 py-2.5"
            >
              START A PROJECT
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              type="button"
              className="p-2.5 rounded-full bg-white/70 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-[var(--color-foreground)] hover:bg-white border border-[var(--color-border-subtle)]/60 focus-visible:outline-2 transition-colors md:hidden"
              aria-label="Open mobile navigation"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
}
