"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { MAIN_NAV_ITEMS, BRAND_INFO } from "@/data/navigation";
import { CloseIcon, ArrowRight } from "@/components/svg/Icons";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/svg/Logo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Editorial Mobile Navigation Drawer for KLEE Technologies.
 * Designed with full-screen focus, deliberate typography, and subtle micro-motion.
 */
export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const prevPathname = React.useRef(pathname);

  // Close only when route actually changes
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-white px-6 py-6 sm:px-8 md:hidden overflow-y-auto"
        >
          {/* Top Bar: Logo & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border-subtle)]">
            <Link href="/" onClick={onClose} aria-label="KLEE Home">
              <Logo showWordmark={true} />
            </Link>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)] focus-visible:outline-2"
              aria-label="Close menu"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-5 pt-8 pb-10 flex-1 justify-center">
            {MAIN_NAV_ITEMS.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.04,
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between py-2 text-2xl font-medium tracking-tight transition-colors ${
                      isActive
                        ? "text-[var(--color-accent)] font-semibold"
                        : "text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      size={18}
                      className={`transition-transform duration-200 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom CTA & Studio Details */}
          <div className="pt-6 border-t border-[var(--color-border-subtle)] flex flex-col gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              showArrow
              arrowDirection="right"
              className="w-full justify-center"
              onClick={onClose}
            >
              START A PROJECT
            </Button>

            <div className="flex flex-col gap-1 text-xs text-[var(--color-muted)] pt-2">
              <span className="font-semibold text-[var(--color-foreground)] tracking-wide">
                {BRAND_INFO.tagline}
              </span>
              <span>{BRAND_INFO.headquarters}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
