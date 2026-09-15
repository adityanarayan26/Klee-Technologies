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
  { label: "UI/UX Design & Development", href: "/services#ui-ux" },
  { label: "Software Development", href: "/services#software-development" },
  { label: "SaaS Development", href: "/services#saas-development" },
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

export const BRAND_INFO = {
  name: "KLEE Technologies",
  tagline: "DESIGN. TECHNOLOGY. GROWTH.",
  statement: "Technology. Design. Digital Growth.",
  establishedYear: 2018,
  headquarters: "T-Hub, Hyderabad, India",
  highlights: [
    "200+ Global Client Projects Delivered",
    "500+ Students Mentored via Live Internships",
    "DPIIT Recognized Startup",
    "MSME, ISO & AICTE Aligned",
    "Institutional & Enterprise Technology Experience",
  ],
  contact: {
    email: "contact@klee.tech",
    location: "T-Hub Phase 2, Madhapur, Hyderabad, Telangana 500081",
  },
} as const;
