"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const CLIENTS = [
  { name: "Akshara Finserv", src: "/clients/akshara-finserv-logo.png", category: "Enterprises" },
  { name: "Amasia Solar", src: "/clients/amasia-solar-logo.png", category: "Small and midsize businesses" },
  { name: "Amit Construction", src: "/clients/amit-construction-logo.jpeg", category: "Small and midsize businesses" },
  { name: "Anasa Spices", src: "/clients/anasa-spices-logo.png", category: "Startups" },
  { name: "DEC Industries", src: "/clients/dec-industries-logo.png", category: "Enterprises" },
  { name: "Flyatease", src: "/clients/flyatease-logo.jpeg", category: "Startups" },
  { name: "Lookatshoez", src: "/clients/lookatshoez-logo.jpeg", category: "Startups" },
  { name: "Mahasai", src: "/clients/mahasai-logo.png", category: "Small and midsize businesses" },
  { name: "Mane Sports", src: "/clients/mane-sports-logo.png", category: "Startups" },
  { name: "Nutrigreenz", src: "/clients/nutrigreenz-logo.jpeg", category: "Startups" },
  { name: "Onyxsiri", src: "/clients/onyxsiri-logo.png", category: "Enterprises" },
  { name: "Railcab", src: "/clients/railcab-logo.png", category: "Startups" },
  { name: "Sunshine Petworld", src: "/clients/sunshinepetworld-logo.jpeg", category: "Small and midsize businesses" },
  { name: "Systatic Inc", src: "/clients/systatic-inc-logo.jpeg", category: "Enterprises" },
  { name: "True Renewable", src: "/clients/true-renewable-logo.png", category: "Enterprises" },
  { name: "Truelay", src: "/clients/truelay-logo.jpeg", category: "Startups" },
  { name: "Ubase Infra", src: "/clients/ubase-infra-logo.jpeg", category: "Small and midsize businesses" },
  { name: "VIT", src: "/clients/vit-logo.jpeg", category: "Enterprises" },
  { name: "VKIAS", src: "/clients/vkias-logo.png", category: "Small and midsize businesses" },
];

const CATEGORIES = ["All", "Startups", "Small and midsize businesses", "Enterprises"];

export function ClientsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClients = CLIENTS.filter(
    (client) => activeCategory === "All" || client.category === activeCategory
  );

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mb-16">
        <h2 className="type-h2 text-[var(--color-foreground)] font-semibold mb-4 text-center">Clients</h2>
        <p className="text-[var(--color-muted)] text-center max-w-2xl mb-12">
          Explore our diverse portfolio of partners, ranging from dynamic startups to large enterprises.
        </p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-[var(--color-background-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-border-subtle)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center">
        {filteredClients.map((client, index) => (
          <Reveal key={`${client.name}-${activeCategory}`} variant="slide-up" delay={index * 0.05}>
            <div className="group flex items-center justify-center p-4 transition-all duration-300 rounded-xl hover:bg-[var(--color-background-secondary)] w-full">
              <div className="relative w-full h-12 sm:h-14 flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                  className="object-contain filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
