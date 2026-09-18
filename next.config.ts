import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Gzip & Brotli HTTP compression for all server responses
  compress: true,

  // 2. Disable X-Powered-By header for byte reduction and security
  poweredByHeader: false,

  // 3. React Strict Mode for concurrent render performance
  reactStrictMode: true,

  // 4. Modern AVIF & WebP image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 60, 75, 80, 90, 100],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // 5. Compiler optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // 6. Advanced Next.js runtime optimizations
  experimental: {
    // Tree-shake heavy libraries to reduce JS bundle size
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "lenis",
      "clsx",
      "tailwind-merge",
    ],
    // Instant client navigation cache
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },

  // 6. Immutable browser caching for media and fonts
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|mp4|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
