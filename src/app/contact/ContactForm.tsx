"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/svg/Icons";

const SERVICE_OPTIONS = [
  "Software Development",
  "SaaS Development",
  "UI/UX Design & Development",
  "Digital Marketing",
  "Graphic Design",
  "Branding",
  "Live Internship Projects",
  "Enterprise Consultancy",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Visual-only simulation per project requirements (no backend/API route)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 md:p-12 rounded-2xl bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-white mx-auto flex items-center justify-center mb-4">
          <CheckIcon size={24} />
        </div>
        <h3 className="type-h3 font-medium text-[var(--color-foreground)] mb-2">
          Enquiry Received
        </h3>
        <p className="type-body text-sm text-[var(--color-muted)] max-w-md mx-auto mb-6">
          Thank you for reaching out to KLEE Technologies. A member of our design and engineering team will review your project requirements and respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold text-[var(--color-accent)] hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-xs flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground)]"
          >
            Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="w-full px-4 py-3 text-sm rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] focus:border-[var(--color-foreground)] focus:outline-none transition-colors"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground)]"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Corp"
            className="w-full px-4 py-3 text-sm rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] focus:border-[var(--color-foreground)] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground)]"
          >
            Email <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full px-4 py-3 text-sm rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] focus:border-[var(--color-foreground)] focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground)]"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 text-sm rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] focus:border-[var(--color-foreground)] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="service"
          className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground)]"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          defaultValue="Software Development"
          className="w-full px-4 py-3 text-sm rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-foreground)] focus:border-[var(--color-foreground)] focus:outline-none transition-colors"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Project Description */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground)]"
        >
          Project Description <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          placeholder="Tell us about your project goals, timelines, and technical requirements..."
          className="w-full px-4 py-3 text-sm rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] placeholder:text-[var(--color-muted-subtle)] focus:border-[var(--color-foreground)] focus:outline-none transition-colors resize-y"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          showArrow
          arrowDirection="right"
          className="w-full sm:w-auto"
        >
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}
