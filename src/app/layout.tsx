import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { PageTransition } from "@/components/layout/PageTransition";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kleetechnologies.com"),
  title: {
    default: "KLEE Technologies — Design. Technology. Growth.",
    template: "%s | KLEE Technologies",
  },
  description:
    "Premium Creative Digital Agency and Technology Studio. We engineer software, craft digital products, and drive high-velocity growth for innovative enterprises.",
  keywords: [
    "KLEE Technologies",
    "Creative Digital Agency",
    "Software Development",
    "UI/UX Design",
    "SaaS Development",
    "Digital Marketing",
    "T-Hub Hyderabad",
  ],
  authors: [{ name: "KLEE Technologies" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KLEE Technologies — Design. Technology. Growth.",
    description: "Premium Creative Digital Agency and Technology Studio. We engineer software, craft digital products, and drive high-velocity growth for innovative enterprises.",
    url: "https://kleetechnologies.com",
    siteName: "KLEE Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KLEE Technologies - Premium Creative Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KLEE Technologies — Design. Technology. Growth.",
    description: "Premium Creative Digital Agency and Technology Studio. We engineer software, craft digital products, and drive high-velocity growth.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} font-sans antialiased`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="flex-1 flex flex-col">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingActions />
          <CustomCursor />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
