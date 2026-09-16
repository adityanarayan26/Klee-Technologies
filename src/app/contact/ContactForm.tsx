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

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-[var(--color-foreground)] block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-[var(--color-foreground)] block">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company"
            className="w-full px-4 py-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--color-foreground)] block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your business email"
            className="w-full px-4 py-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-[var(--color-foreground)] block">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your contact number"
            className="w-full px-4 py-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all"
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-[var(--color-foreground)] block">
          What do you need?
        </label>
        <div className="flex flex-wrap gap-3">
          {SERVICE_OPTIONS.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  isSelected 
                    ? "bg-[var(--color-foreground)] border-[var(--color-foreground)] text-[var(--color-background-primary)]" 
                    : "bg-transparent border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-foreground)] block">
          Tell us about your project.
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking to build?"
          className="w-full px-4 py-3 bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
