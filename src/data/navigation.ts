export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Recognition", href: "/recognition" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_NAV_ITEMS: NavItem[] = [
  { label: "Digital Marketing", href: "/services#digital-marketing" },
  { label: "Graphic Design", href: "/services#graphic-design" },
  { label: "UI/UX Design", href: "/services#ui-ux" },
  { label: "Software Development", href: "/services#software-development" },
  { label: "SaaS Development", href: "/services#saas-development" },
  { label: "AI & Enterprise Integration", href: "/services#ai-integration" },
  { label: "Branding", href: "/services#branding" },
  { label: "Live Internship Projects", href: "/services#internship-projects" },
];

export const COMPANY_NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Recognition", href: "/recognition" },
  { label: "Contact", href: "/contact" },
];

export const ACCREDITATIONS = [
  {
    id: "dpiit",
    name: "DPIIT",
    fullName: "Department for Promotion of Industry and Internal Trade",
    src: "/logos/dpiit.png",
    alt: "DPIIT Recognized Startup",
    aspectRatio: "wide",
  },
  {
    id: "msme",
    name: "MSME",
    fullName: "Ministry of Micro, Small and Medium Enterprises",
    src: "/logos/msme.png",
    alt: "MSME Registered Enterprise",
    aspectRatio: "wide",
  },
  {
    id: "iso",
    name: "ISO 9001",
    fullName: "International Organization for Standardization",
    src: "/logos/iso9001.png",
    alt: "ISO 9001 Quality Certified",
    aspectRatio: "square",
  },
  {
    id: "aicte",
    name: "AICTE",
    fullName: "All India Council for Technical Education Alignment",
    src: "/logos/aicte.png",
    alt: "AICTE Aligned Mentorship",
    aspectRatio: "square",
  },
] as const;

export const BRAND_INFO = {
  name: "KLEE Technologies",
  tagline: "DESIGN. TECHNOLOGY. AI. GROWTH.",
  statement: "Technology. Design. Digital Growth.",
  description: "Building intelligent digital products, enterprise solutions and brands for what's next.",
  establishedYear: 2018,
  headquarters: "Hyderabad, India",
  highlights: [
    "200+ Global Client Projects Delivered",
    "500+ Students Mentored via Live Internships",
    "DPIIT Recognized Startup",
    "MSME, ISO & AICTE Aligned",
    "Institutional & Enterprise Technology Experience",
  ],
  contact: {
    email: "info@kleetechnologies.com",
    location:
      "1/C, Plot No: 25, T-Hub, 4th Floor, Sy No 83/1, Knowledge City Rd, panmaktha, Rai Durg, Hyderabad, Telangana 500032",
  },
} as const;
