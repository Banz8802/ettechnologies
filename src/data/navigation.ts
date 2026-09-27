export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
  icon?: string;
  children?: {
    name: string;
    href: string;
    description: string;
    icon: string;
    badge?: string;
  }[];
}

export const mainNavigation: NavItem[] = [
  {
    name: "Products",
    href: "/products",
    children: [
      {
        name: "Maritime & Review Center System",
        href: "/product/review-center-system",
        description: "Examinee management & online mock exams for 65+ nationwide branches",
        icon: "GraduationCap",
        badge: "Featured",
      },
      {
        name: "Employee Time & Attendance (DTR & Payroll)",
        href: "/product/employee-time-attendance",
        description: "Biometric attendance sync, leave workflows, and automated statutory payroll",
        icon: "Clock",
        badge: "Popular",
      },
      {
        name: "Student Information & Enrollment System",
        href: "/product/student-information-system",
        description: "End-to-end academic ERP: online admission, grading portal, and cashiering",
        icon: "School",
      },
      {
        name: "Digital Laundry Management System",
        href: "/product/digital-laundry-system",
        description: "POS touchscreen, garment barcode tags, and automated SMS notifications",
        icon: "Sparkles",
      },
      {
        name: "Time Tracking & Productivity Software",
        href: "/product/time-tracking-productivity",
        description: "Transparent desktop work telemetry and team productivity analytics",
        icon: "Activity",
        badge: "Free Tier",
      },
      {
        name: "Enterprise Hardware & Terminals",
        href: "/products/hardware",
        description: "Biometric clocks, thermal POS printers, and server infrastructure",
        icon: "Cpu",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Software & Systems Development",
        href: "/services/software-systems-development",
        description: "Custom enterprise software built on C#, ASP.NET, SQL Server, and Cloud",
        icon: "Code2",
        badge: "Core",
      },
      {
        name: "Website & Portal Development",
        href: "/services/website-development",
        description: "Fast, responsive web applications, e-catalogs, and corporate portals",
        icon: "Globe",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
        description: "Native and hybrid iOS & Android apps with Azure cloud backends and IoT",
        icon: "Smartphone",
      },
      {
        name: "Digital Marketing & SEO",
        href: "/services/digital-marketing",
        description: "Data-driven SEO, Google & Meta Ads, content strategy, and CRO growth",
        icon: "TrendingUp",
      },
      {
        name: "Creative Design & UI/UX",
        href: "/services/creative-design",
        description: "Brand identity systems, intuitive digital UI/UX, and visual design assets",
        icon: "Palette",
      },
    ],
  },
  {
    name: "Cloud & Hosting",
    href: "/cloud-computing",
    children: [
      {
        name: "Cloud Computing & Migration",
        href: "/cloud-computing",
        description: "Google Workspace, Microsoft 365, Azure Cloud, and disaster recovery backups",
        icon: "Cloud",
      },
      {
        name: "Managed Web Hosting & Servers",
        href: "/hosting",
        description: "High-speed Plesk/cPanel web hosting, SSL, and 99.9% uptime server infrastructure",
        icon: "Server",
      },
    ],
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
