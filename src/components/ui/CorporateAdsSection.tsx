"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Play, Film } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import type { LightboxAsset } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

const Lightbox = dynamic(
  () => import("@/components/ui/Lightbox").then((m) => m.Lightbox),
  { ssr: false }
);

export interface CorporateAdItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  videoSrc: string;
  posterSrc: string;
  description: string;
  featured?: boolean;
}

const CORPORATE_ADS: CorporateAdItem[] = [
  {
    id: "gopichand",
    title: "Celebrity Brand Commercial",
    subtitle: "Featuring Actor T. Gopichand",
    category: "Celebrity Commercial / TVC",
    duration: "0:30",
    videoSrc: "/videos/corporate-ads/gopichand-commercial.mp4",
    posterSrc: "/videos/corporate-ads/gopichand-commercial-poster.jpg",
    description: "Broadcast commercial featuring popular actor Gopichand, produced with high-end cinematic pacing, character direction, and high-impact brand recall.",
    featured: true,
  },
  {
    id: "chitfunds",
    title: "Financial Trust & Security",
    subtitle: "Chit Funds Corporate Film",
    category: "Corporate Film / Financial",
    duration: "1:00",
    videoSrc: "/videos/corporate-ads/chitfunds-commercial.mp4",
    posterSrc: "/videos/corporate-ads/chitfunds-commercial-poster.jpg",
    description: "Corporate narrative communicating financial reliability, legacy trust, and disciplined savings for growing businesses and families.",
  },
  {
    id: "ramesh-pumps",
    title: "Engineered for Reliability",
    subtitle: "Ramesh Pumps Brand Commercial",
    category: "Industrial & Agricultural TVC",
    duration: "1:00",
    videoSrc: "/videos/corporate-ads/ramesh-pumps-commercial.mp4",
    posterSrc: "/videos/corporate-ads/ramesh-pumps-commercial-poster.jpg",
    description: "Dynamic product demonstration and brand anthem highlighting agricultural endurance, engineering durability, and farmer prosperity.",
  },
  {
    id: "shaft-academy",
    title: "Igniting Creative Careers",
    subtitle: "SHAFT Academy Commercial",
    category: "Education & Media TVC",
    duration: "0:30",
    videoSrc: "/videos/corporate-ads/shaft-academy-commercial.mp4",
    posterSrc: "/videos/corporate-ads/shaft-academy-commercial-poster.jpg",
    description: "High-energy commercial promoting advanced media arts, 3D animation, and gaming design curricula for aspirational creators.",
  },
  {
    id: "townships",
    title: "Master-Planned Living",
    subtitle: "Integrated Townships Architectural Film",
    category: "Real Estate & Infrastructure",
    duration: "0:30",
    videoSrc: "/videos/corporate-ads/townships-commercial.mp4",
    posterSrc: "/videos/corporate-ads/townships-commercial-poster.jpg",
    description: "Architectural visual story highlighting master-planned community developments, premium amenities, and eco-friendly lifestyle.",
  },
  {
    id: "vvs-jewellery",
    title: "Heritage & Pure Craft",
    subtitle: "VVS Brand Commercial",
    category: "Retail & Luxury Lifestyle",
    duration: "0:30",
    videoSrc: "/videos/corporate-ads/vvs-jewellery-commercial.mp4",
    posterSrc: "/videos/corporate-ads/vvs-jewellery-commercial-poster.jpg",
    description: "Sensory, elegant retail commercial capturing traditional craftsmanship, precious metals, and celebratory heritage moments.",
  },
  {
    id: "care-marathon",
    title: "Wellness in Motion",
    subtitle: "Care Hospitals Marathon Campaign",
    category: "Healthcare & Event Campaign",
    duration: "1:30",
    videoSrc: "/videos/corporate-ads/care-marathon-campaign.mp4",
    posterSrc: "/videos/corporate-ads/care-marathon-campaign-poster.jpg",
    description: "Official campaign film celebrating community resilience, preventive cardiovascular health, and civic spirit.",
  },
];

function VideoCard({
  ad,
  onSelect,
}: {
  ad: CorporateAdItem;
  onSelect: (ad: CorporateAdItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented; ignore silently
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#00AEEF]/40 cursor-pointer",
        ad.featured ? "md:col-span-2 lg:col-span-2" : ""
      )}
      onClick={() => onSelect(ad)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/90">
        <video
          ref={videoRef}
          src={ad.videoSrc}
          poster={ad.posterSrc}
          preload="none"
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider uppercase text-white shadow-sm">
            <Film className="w-3 h-3 text-[#00AEEF]" />
            {ad.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/90 shadow-sm">
            {ad.duration}
          </span>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-10">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full bg-[#00AEEF] text-white shadow-lg transition-transform duration-300 group-hover:scale-110",
              isHovered ? "opacity-80 scale-105" : "opacity-95"
            )}
          >
            <Play className="h-6 w-6 fill-white translate-x-0.5" />
          </div>
        </div>

        {/* Bottom subtle gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* Details Container */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-foreground)] tracking-tight group-hover:text-[#00AEEF] transition-colors">
            {ad.title}
          </h3>
        </div>
        <p className="text-sm font-medium text-[var(--color-accent)] mb-3">
          {ad.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] line-clamp-2 leading-relaxed">
          {ad.description}
        </p>
      </div>
    </div>
  );
}

export function CorporateAdsSection() {
  const [activeAsset, setActiveAsset] = useState<LightboxAsset | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CORPORATE_ADS.map((ad, idx) => (
          <Reveal key={ad.id} variant="slide-up" delay={idx * 0.08}>
            <VideoCard
              ad={ad}
              onSelect={(selected) =>
                setActiveAsset({
                  src: selected.videoSrc,
                  type: "video",
                })
              }
            />
          </Reveal>
        ))}
      </div>

      {/* Lightbox for Full Video Playback with Sound */}
      <Lightbox asset={activeAsset} onClose={() => setActiveAsset(null)} />
    </>
  );
}
