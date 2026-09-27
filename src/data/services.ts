export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  accentColor: "blue" | "orange" | "cyan";
  techStack: string[];
  deliverables: string[];
  processSteps: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  whyChooseUs: string[];
  ctaText: string;
}

export const servicesData: Service[] = [
  {
    id: "software-systems-development",
    slug: "software-systems-development",
    title: "Software & Systems Development",
    shortTitle: "Custom Software",
    tagline: "Enterprise Software Architected with C#, ASP.NET, SQL & Scalable Cloud Services",
    shortDescription:
      "We design, build, maintain, audit, and modernize custom software and business systems engineered to streamline your unique operational workflows.",
    fullDescription:
      "Every business has distinct workflows that off-the-shelf software cannot adequately solve. We specialize in engineering bespoke enterprise software using cutting-edge technologies like C#, ASP.NET, and Microsoft SQL Server, combined with the scalability of Microsoft Azure and cloud microservices. Our experienced software development team delivers maintainable, secure, and robust systems on time and within budget.",
    iconName: "Code2",
    accentColor: "blue",
    techStack: ["C#", "ASP.NET Core", "Microsoft SQL Server", "Microsoft Azure", "RESTful APIs", "Microservices"],
    deliverables: [
      "Custom ERP & Line-of-Business Applications",
      "Database Architecture & Performance Optimization",
      "Legacy Software Modernization & Refactoring",
      "Third-party API & Hardware Integrations",
      "System Security Audits & Ongoing Maintenance",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Requirements Discovery & Architecture",
        description: "We analyze your business processes, data flows, and technical requirements to design a resilient database schema and system architecture.",
      },
      {
        stepNumber: "02",
        title: "Iterative Sprint Development",
        description: "Writing clean, type-safe C# and ASP.NET backend code with structured APIs and intuitive user interfaces.",
      },
      {
        stepNumber: "03",
        title: "Automated & Rigorous QA Testing",
        description: "Comprehensive functional testing, security stress tests, and user acceptance testing across edge scenarios.",
      },
      {
        stepNumber: "04",
        title: "Deployment & Systems Training",
        description: "Smooth migration of existing data, on-premise or cloud deployment, and comprehensive staff onboarding.",
      },
      {
        stepNumber: "05",
        title: "Long-term Support & SLA",
        description: "Continuous monitoring, security patches, performance tuning, and feature evolution as your business grows.",
      },
    ],
    whyChooseUs: [
      "Over 15 years of proven custom software delivery in the Philippines",
      "Specialized in both on-premise local servers and cloud environments",
      "Deep expertise in enterprise .NET stack and relational database modeling",
      "Direct communication with senior developers who understand business logic",
    ],
    ctaText: "Discuss Your Software Project",
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website & Web Portal Development",
    shortTitle: "Web Development",
    tagline: "High-Performance Websites, E-Commerce Portals, and Custom Web Applications",
    shortDescription:
      "Establish a commanding online presence with modern, responsive, SEO-optimized corporate websites, e-catalogs, and interactive customer portals.",
    fullDescription:
      "Your website is the digital front door to your business. We build responsive, lightning-fast web solutions that captivate visitors, establish brand credibility, and convert prospects into long-term clients. From modern corporate websites and digital catalogs to transactional e-commerce stores and membership portals, we ensure flawless performance across mobile, tablet, and desktop screens.",
    iconName: "Globe",
    accentColor: "orange",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "WordPress / Custom CMS"],
    deliverables: [
      "Modern Corporate & Enterprise Websites",
      "E-Commerce Stores & Digital Product Catalogs",
      "Interactive Client Portals & Web Apps",
      "Search Engine Optimization (SEO) Architecture",
      "Content Management Systems (CMS) Integration",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Discovery & Market Research",
        description: "Understanding your target audience, analyzing competitors, and defining strategic conversion goals.",
      },
      {
        stepNumber: "02",
        title: "Wireframing & UI/UX Design",
        description: "Crafting wireframes and high-fidelity visual mockups that reflect your brand identity with modern aesthetics.",
      },
      {
        stepNumber: "03",
        title: "Modern Frontend & Backend Coding",
        description: "Developing semantic, responsive, and ultra-fast web pages optimized for mobile devices and search engines.",
      },
      {
        stepNumber: "04",
        title: "Cross-Device Testing & Launch",
        description: "Rigorous testing across screen resolutions, browsers, performance speed checks, and domain setup.",
      },
    ],
    whyChooseUs: [
      "100% mobile-first, responsive layouts designed for high conversion",
      "Blazing-fast load times optimized for Google Core Web Vitals",
      "Clean semantic HTML structure built for organic search rankings",
      "Full ownership of your source code, domain, and web assets",
    ],
    ctaText: "Start Your Web Project",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Native and Cross-Platform iOS & Android Apps Powered by Cloud Backends & IoT",
    shortDescription:
      "Reach your customers and workforce on their mobile devices with intuitive, performant apps for iOS and Android, backed by cloud storage and IoT connectivity.",
    fullDescription:
      "Looking to capture the mobile landscape? We develop intuitive, feature-rich mobile applications for smartphones and tablets. Whether you need a customer-facing loyalty and booking app or a field technician management tool with offline data sync, we harness native platforms and modern cross-platform frameworks, integrating seamlessly with Microsoft Azure, Cloud Drive, and IoT hardware.",
    iconName: "Smartphone",
    accentColor: "blue",
    techStack: ["Flutter", "React Native", "iOS / Swift", "Android / Kotlin", "Microsoft Azure", "IoT Integration"],
    deliverables: [
      "iOS & Android Mobile Applications",
      "Cross-Platform Hybrid Frameworks",
      "Real-time Cloud Sync & Offline Storage",
      "Push Notification & Geolocation Systems",
      "App Store & Google Play Publishing",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Mobile Product Strategy",
        description: "Mapping out user user journeys, offline needs, native hardware permissions, and cloud backend architecture.",
      },
      {
        stepNumber: "02",
        title: "Interactive UI/UX Prototyping",
        description: "Designing tactile, mobile-native touch interfaces, dark/light themes, and smooth micro-interactions.",
      },
      {
        stepNumber: "03",
        title: "App Engineering & API Integration",
        description: "Building responsive mobile apps integrated with secure backend authentication, Azure cloud services, and push engines.",
      },
      {
        stepNumber: "04",
        title: "App Store Deployment & Updates",
        description: "Managing Apple App Store and Google Play compliance, metadata, beta testing, and deployment.",
      },
    ],
    whyChooseUs: [
      "End-to-end mobile lifecycle from concept to app store release",
      "Expertise in integrating mobile apps with hardware and IoT sensors",
      "Robust offline data caching for reliable performance in low-connectivity areas",
      "Scalable cloud API backends that handle high concurrent user traffic",
    ],
    ctaText: "Build Your Mobile App",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO Services",
    shortTitle: "Digital Marketing",
    tagline: "Data-Driven SEO, Content Strategy, Performance Ads, and Conversion Rate Optimization",
    shortDescription:
      "Attract qualified traffic, engage high-value prospects, and grow revenue through content marketing, search optimization, and targeted digital campaigns.",
    fullDescription:
      "A great digital product needs visibility to generate business results. Our digital marketing services combine technical search engine optimization (SEO), engaging content marketing, social media management, email automation, influencer marketing, digital advertising (Google Ads & Meta Ads), and conversion rate optimization (CRO) to maximize your digital ROI.",
    iconName: "TrendingUp",
    accentColor: "orange",
    techStack: ["Google Analytics 4", "Google Search Console", "Meta Ads Manager", "Google Ads", "Mailchimp / SendGrid", "Ahrefs / SEMrush"],
    deliverables: [
      "Technical & On-Page Search Engine Optimization (SEO)",
      "Targeted Google Search & Social Media Advertising",
      "Content Strategy & Copywriting",
      "Automated Email Marketing & Lead Nurturing",
      "Conversion Rate Optimization (CRO) & Heatmap Analytics",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Digital Audit & Keyword Research",
        description: "Auditing your current search footprint, identifying high-intent commercial keywords, and analyzing competitor gaps.",
      },
      {
        stepNumber: "02",
        title: "Campaign & Content Strategy",
        description: "Developing targeted content calendars, ad creatives, landing pages, and automated email drip sequences.",
      },
      {
        stepNumber: "03",
        title: "Execution & Multichannel Launch",
        description: "Deploying technical SEO fixes, publishing strategic content, and launching precision-targeted ad campaigns.",
      },
      {
        stepNumber: "04",
        title: "Measurement, CRO & Scaling",
        description: "Monitoring conversion metrics, A/B testing ad copy, and optimizing spend toward the highest-performing channels.",
      },
    ],
    whyChooseUs: [
      "Focus on measurable business conversions, not vanity metrics",
      "Integration with your existing website and software funnels",
      "Transparent monthly reporting with clear analytics dashboards",
      "Full spectrum capability from organic SEO to paid acquisition",
    ],
    ctaText: "Accelerate Your Growth",
  },
  {
    id: "creative-design",
    slug: "creative-design",
    title: "Creative Design & UI/UX Branding",
    shortTitle: "Creative Design",
    tagline: "Compelling Visual Storytelling, Brand Identity Systems, and Intuitive Digital UI/UX",
    shortDescription:
      "Bring your brand to life with striking visual assets, comprehensive design systems, logo identity, and user-friendly interface designs.",
    fullDescription:
      "Your brand story wouldn't be complete without eye-catching visuals. Our creative design team starts by understanding your core business mission and audience psychology. We transform ideas into cohesive brand identities, modern UI/UX design systems, digital marketing assets, and corporate collateral that leave lasting impressions and elevate your market positioning.",
    iconName: "Palette",
    accentColor: "cyan",
    techStack: ["Figma", "Adobe Creative Cloud", "Illustrator", "Photoshop", "Design Systems", "Vector Graphics"],
    deliverables: [
      "Brand Identity, Logo & Style Guidelines",
      "UI/UX Wireframes & Interactive High-Fidelity Prototypes",
      "Marketing Collateral & Digital Ad Creatives",
      "Infographics & Data Visualizations",
      "Print Assets, Brochures & Corporate Profiles",
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Vision & Stakeholder Consultation",
        description: "Meeting face-to-face or virtually to deeply understand your brand personality, target demographic, and creative goals.",
      },
      {
        stepNumber: "02",
        title: "Concept Exploration & Moodboards",
        description: "Exploring creative angles, color harmonies, typography pairings, and layout directions.",
      },
      {
        stepNumber: "03",
        title: "Refinement & Prototype Design",
        description: "Creating polished design drafts and interactive UI screens with meticulous attention to detail.",
      },
      {
        stepNumber: "04",
        title: "Asset Delivery & Brand System Guidelines",
        description: "Exporting production-ready vector assets, design tokens, and comprehensive brand usage manuals.",
      },
    ],
    whyChooseUs: [
      "Designs created by experienced digital product designers",
      "Harmonious brand consistency across print and digital touchpoints",
      "User-centric UI/UX focused on intuitive, accessible usability",
      "Direct collaborative iterations until complete client satisfaction",
    ],
    ctaText: "Elevate Your Brand Identity",
  },
];
