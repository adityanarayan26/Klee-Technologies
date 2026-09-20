"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const SERVICE_OPTIONS = [
  "Software Development",
  "SaaS Development",
  "AI & Enterprise Integration",
  "Mobile App",
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "Graphic Design",
  "Branding",
  "Internship",
  "Other"
];

// Spam detection helpers
function isGibberish(str: string): boolean {
  if (!str || str.length < 4) return false;
  const s = str.trim();
  // Too many consecutive consonants (5+ in a row) — bots love random strings
  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(s)) return true;
  
  // No spaces in a very long string (> 15 chars) is usually spam
  if (s.length > 15 && !s.includes(" ")) return true;

  // Alternating upper/lower pattern like 'aMTgxeToB' — very common bot pattern
  const altPattern = s.replace(/[^a-zA-Z]/g, "");
  if (altPattern.length > 8) {
    let altCount = 0;
    for (let i = 1; i < altPattern.length; i++) {
      const prevUpper = altPattern[i - 1] === altPattern[i - 1].toUpperCase();
      const curUpper = altPattern[i] === altPattern[i].toUpperCase();
      if (prevUpper !== curUpper) altCount++;
    }
    if (altCount / altPattern.length > 0.45) return true;
  }
  return false;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const formLoadTime = React.useRef(Date.now());

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // --- Spam Guard 1: Honeypot check (bots fill hidden fields, humans don't) ---
    const honeypot = formData.get("website_url") as string;
    if (honeypot && honeypot.trim() !== "") {
      // Silently succeed — don't tip off the bot
      setIsSubmitting(false);
      setSubmitted(true);
      return;
    }

    // --- Spam Guard 2: Timing check (< 3 seconds = bot) ---
    const elapsed = Date.now() - formLoadTime.current;
    if (elapsed < 3000) {
      setIsSubmitting(false);
      setSubmitted(true);
      return;
    }

    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    // --- Spam Guard 3: Gibberish pattern detection ---
    if (isGibberish(name)) {
      setIsSubmitting(false);
      setError("Please enter your real name.");
      return;
    }
    if (company && isGibberish(company)) {
      setIsSubmitting(false);
      setError("Please enter a valid company name.");
      return;
    }
    if (isGibberish(message)) {
      setIsSubmitting(false);
      setError("Your message appears to be invalid. Please describe your project in plain language.");
      return;
    }

    const payload = {
      name,
      company,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      services: selectedServices,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-[var(--color-accent-subtle)] text-[var(--color-accent)] rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-[var(--color-foreground)] mb-3">Enquiry Sent Successfully</h3>
        <p className="text-[var(--color-muted)] mb-8 max-w-sm">
          Thank you for reaching out. A team member will get back to you shortly to discuss your project.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitted(false)}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      {/* Honeypot — hidden from real users, bots will fill it */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="website_url">Website URL (leave blank)</label>
        <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-[var(--color-foreground)] block">
            Your Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] px-4 py-2 sm:py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] transition-all focus:border-[var(--color-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="company" className="text-sm font-medium text-[var(--color-foreground)] block">
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
            className="w-full rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] px-4 py-2 sm:py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] transition-all focus:border-[var(--color-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-[var(--color-foreground)] block">
            Business Email <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] px-4 py-2 sm:py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] transition-all focus:border-[var(--color-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-[var(--color-foreground)] block">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] px-4 py-2 sm:py-2.5 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] transition-all focus:border-[var(--color-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[var(--color-foreground)] block">
          What do you need help with?
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
                  isSelected 
                    ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white shadow-xs" 
                    : "bg-[var(--color-background-secondary)] border-[var(--color-border-subtle)] text-[var(--color-muted)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-foreground)]"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-foreground)] block">
          Tell us about your project <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder="Describe your timeline, goals, or core requirements..."
          className="w-full resize-none rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] px-4 py-3 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] transition-all focus:border-[var(--color-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
        />
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-900/50 p-3 text-sm text-red-700 dark:text-red-400 flex items-start gap-2">
          <svg className="w-5 h-5 shrink-0 text-red-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <div className="flex items-center pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          showArrow={!isSubmitting}
          disabled={isSubmitting}
          className="min-w-[210px]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Enquiry...
            </span>
          ) : (
            "Send Project Enquiry"
          )}
        </Button>
      </div>
    </form>
  );
}
