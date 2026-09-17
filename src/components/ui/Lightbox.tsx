"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";

export interface LightboxAsset {
  src: string;
  type?: "image" | "video";
}

interface LightboxProps {
  asset: LightboxAsset | null;
  onClose: () => void;
}

export function Lightbox({ asset, onClose }: LightboxProps) {
  // Prevent scrolling when open
  useEffect(() => {
    if (asset) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [asset]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {asset && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-10 cursor-auto"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25 cursor-pointer shadow-lg border border-white/10"
            aria-label="Close expanded view"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative flex h-[85vh] w-full max-w-[1400px] items-center justify-center rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on media
          >
            {asset.type === "video" ? (
              <video
                src={asset.src}
                autoPlay
                controls
                loop
                className="h-full w-full object-contain bg-black/50"
              />
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={asset.src}
                  alt="Expanded media view"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                  priority
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
