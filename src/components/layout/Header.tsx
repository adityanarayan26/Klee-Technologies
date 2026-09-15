"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { Logo } from "@/components/svg/Logo";
import { MenuIcon } from "@/components/svg/Icons";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

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
          "sticky top-0 z-40 w-full transition-all duration-200 relative",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-3 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent py-3.5 sm:py-4"
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
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2.5 py-1.5 rounded-full bg-[var(--color-surface-muted)]/80 border border-[var(--color-border-subtle)]"
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
                    "relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-150 rounded-full select-none",
                    isActive
                      ? "text-[var(--color-foreground)] font-semibold"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  )}
                >
                  {isHighlighted && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-[var(--color-border-subtle)]"
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
              className="hidden sm:inline-flex"
            >
              START A PROJECT
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              type="button"
              className="md:hidden p-2.5 rounded-lg text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border-subtle)] focus-visible:outline-2 transition-colors"
              aria-label="Open mobile navigation"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>

        {/* Header Scroll Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--color-accent)] origin-left pointer-events-none"
        />
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
}
