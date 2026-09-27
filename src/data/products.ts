export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "software" | "hardware";
  badge: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  accentColor: string;
  featured: boolean;
  keyBenefits: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  targetIndustries: string[];
  systemSpecs: {
    deployment: string;
    database: string;
    platforms: string;
    security: string;
  };
  highlightStat?: {
    value: string;
    label: string;
  };
  ctaText: string;
}

export const productsData: Product[] = [
  {
    id: "review-center-system",
    slug: "review-center-system",
    name: "Maritime & Professional Review Center System",
    shortName: "Review Center Suite",
    category: "software",
    badge: "Enterprise Ready • 65+ Branches",
    tagline: "Empower Examinees and Streamline Nationwide Maritime & Board Review Operations",
    shortDescription:
      "Comprehensive digital exam prep platform designed specifically for maritime training institutions and board exam review centers with randomized test engines and student analytics.",
    fullDescription:
      "Are you tired of using outdated review materials and manual paper-based processes to prepare your students for professional maritime exams and licensing? Our maritime online reviewer system is engineered specifically for institutions demanding high examinee pass rates. Trusted by industry leaders like Cebu Gems with over 65 nationwide branches, this platform features massive question banks, timed mock exams, multi-branch progress analytics, and instant feedback.",
    iconName: "GraduationCap",
    accentColor: "blue",
    featured: true,
    highlightStat: {
      value: "65+",
      label: "Review center branches nationwide",
    },
    keyBenefits: [
      "Boost student pass rates through simulated PRC/STCW exam conditions",
      "Eliminate paper printing and manual grading costs across all branches",
      "Centralized question bank management with anti-leak security",
      "Real-time student diagnostic reports pinpointing weak subject areas",
    ],
    features: [
      {
        title: "Dynamic Randomized Mock Exams",
        description: "Generate unique exam sets on-the-fly with randomized questions and answer permutations to ensure authentic test results.",
        icon: "Shuffle",
      },
      {
        title: "Maritime STCW & Competency Mapping",
        description: "Categorize test questions according to standard IMO, MARINA, and PRC maritime competency tables and syllabus levels.",
        icon: "Compass",
      },
      {
        title: "Real-time Timed Test Engine",
        description: "Authentic board exam countdown timers, auto-save upon disconnection, and immediate score breakdowns with explanation rationales.",
        icon: "Timer",
      },
      {
        title: "Multi-Branch Admin Dashboard",
        description: "Branch managers and academic directors can monitor examinee cohorts, batch averages, and individual performance from a unified console.",
        icon: "Layers",
      },
      {
        title: "Student Progress & Analytics Portal",
        description: "Students track their historical scores, identify topics requiring additional review, and practice focused drills on challenging subjects.",
        icon: "BarChart3",
      },
      {
        title: "Secure Offline & Online Capabilities",
        description: "Deployable over local branch servers (LAN) for high-concurrency exam rooms or over cloud servers for remote home reviewers.",
        icon: "ShieldCheck",
      },
    ],
    targetIndustries: [
      "Maritime Review Centers",
      "Engineering & Board Exam Review Centers",
      "Maritime Academies & Training Centers",
      "Corporate Certification Institutes",
    ],
    systemSpecs: {
      deployment: "Cloud Web Application & Local Exam Room Server (Hybrid)",
      database: "Microsoft SQL Server / PostgreSQL",
      platforms: "Responsive Web (Desktop, Tablet, Mobile)",
      security: "Role-Based Access Control, Encrypted Question Bank, Session Lock",
    },
    ctaText: "Request Review Center Demo",
  },
  {
    id: "employee-time-attendance",
    slug: "employee-time-attendance",
    name: "Employee Time & Attendance and Payroll System",
    shortName: "DTR & Payroll System",
    category: "software",
    badge: "Most Popular for SMEs",
    tagline: "Automate Daily Time Records, Shift Scheduling, and Philippine Payroll Compliance",
    shortDescription:
      "A complete enterprise solution that tracks employee attendance, logs biometric data, computes overtime, and automatically calculates Philippine statutory payroll in minutes.",
    fullDescription:
      "Managing employee attendance sheets, late penalties, night differentials, and intricate payroll calculations manually is prone to costly human errors. Our Employee Daily Time Record (DTR) and Payroll System combines hardware biometric integration with automated cloud time-tracking, statutory deduction computation (SSS, PhilHealth, Pag-IBIG, Withholding Tax), and instant one-click payslip generation.",
    iconName: "Clock",
    accentColor: "orange",
    featured: true,
    highlightStat: {
      value: "85%",
      label: "Reduction in payroll processing time",
    },
    keyBenefits: [
      "Automate complex payroll deductions with current Philippine tax tables",
      "Direct integration with fingerprint, facial recognition, and RFID terminals",
      "Eliminate buddy-punching and time-theft with strict biometric logs",
      "Generate digital payslips, 13th-month pay calculations, and BIR reports",
    ],
    features: [
      {
        title: "Biometric & RFID Terminal Sync",
        description: "Seamlessly pulls attendance logs directly from physical biometric devices into the software database in real time.",
        icon: "Fingerprint",
      },
      {
        title: "Flexible Shift & Overtime Rules",
        description: "Supports complex rotational shifts, night differentials, grace periods, rest day pay, and special holiday premiums.",
        icon: "CalendarRange",
      },
      {
        title: "Automated Philippine Statutory Deductions",
        description: "Pre-configured computation for SSS, PhilHealth, Pag-IBIG, and withholding taxes compliant with latest government circulars.",
        icon: "Receipt",
      },
      {
        title: "Leave & Overtime Approval Workflow",
        description: "Department heads review and approve employee leave requests, official business forms, and overtime filings digitally.",
        icon: "CheckCircle2",
      },
      {
        title: "Digital Payslips & Bank Payroll Export",
        description: "Generate confidential PDF payslips and export batch bank payroll upload files formatted for major Philippine banks.",
        icon: "CreditCard",
      },
      {
        title: "Comprehensive Audit & HR Analytics",
        description: "Track absenteeism patterns, department labor costs, tardiness trends, and generate full Year-End 2316 compliance data.",
        icon: "FileSpreadsheet",
      },
    ],
    targetIndustries: [
      "Small & Medium Enterprises (SMEs)",
      "Manufacturing & Warehousing",
      "Retail Chains & Franchises",
      "BPO & Technology Offices",
      "Schools & Academic Institutions",
    ],
    systemSpecs: {
      deployment: "Local Network (LAN) / Cloud Hosted Server",
      database: "Microsoft SQL Server",
      platforms: "Windows Desktop Application & Web Management Portal",
      security: "Encrypted Employee Records, Audit Trail Logs, Granular Permissions",
    },
    ctaText: "Schedule DTR & Payroll Walkthrough",
  },
  {
    id: "student-information-system",
    slug: "student-information-system",
    name: "Student Information & School Enrollment System",
    shortName: "Student Information System",
    category: "software",
    badge: "15+ Years Campus Proven",
    tagline: "End-to-End Academic ERP from Online Admission to Transcripts and Accounting",
    shortDescription:
      "A comprehensive academic management system empowering colleges and schools to streamline student enrollment, registrar records, grading, and cashiering.",
    fullDescription:
      "Our Student Information System is a mature, field-tested academic management suite designed to modernize school operations. Serving institutions like Iligan Capitol College for over 15 years, the platform connects students, faculty, registrars, and accounting into one cohesive digital ecosystem—handling everything from online application and subject assessment to electronic grading and official transcript generation.",
    iconName: "School",
    accentColor: "blue",
    featured: true,
    highlightStat: {
      value: "15+ Yrs",
      label: "Continuous deployment in higher education",
    },
    keyBenefits: [
      "Streamlined enrollment cycles with fast subject pre-requisite validation",
      "Centralized student master files from admission through graduation",
      "Faculty grade submission portal with automated GPA and honors computation",
      "Integrated tuition assessment, student ledger, and cashiering module",
    ],
    features: [
      {
        title: "Online Admission & Enrollment",
        description: "Allow new and continuing students to register courses, upload requirements, and track enrollment status online.",
        icon: "UserPlus",
      },
      {
        title: "Curriculum & Pre-Requisite Checker",
        description: "Automatically enforces academic curricula, pre-requisites, co-requisites, and maximum unit loads per semester.",
        icon: "BookOpen",
      },
      {
        title: "Registrar & Permanent Records (TOR)",
        description: "Instantly produce official Transcripts of Records, Form 137/138, Certificates of Registration, and CHED/DepEd reports.",
        icon: "FileText",
      },
      {
        title: "Faculty Grade Encoding & Submission",
        description: "Secure instructor portal for entering prelim, midterm, and final grades with automated deadline lockouts and dean sign-offs.",
        icon: "Award",
      },
      {
        title: "Student Ledger & Cashiering POS",
        description: "Accurate tracking of tuition breakdown, miscellaneous fees, payment installments, promissory notes, and official receipt printing.",
        icon: "Wallet",
      },
      {
        title: "Student & Parent Portal",
        description: "Students check enrolled subjects, class schedules, financial ledger balance, and published grades securely.",
        icon: "Shield",
      },
    ],
    targetIndustries: [
      "Colleges & Universities",
      "Vocational & Technical Institutes",
      "Senior High Schools & K-12 Academies",
      "Maritime & Aviation Training Centers",
    ],
    systemSpecs: {
      deployment: "On-Premise School Server or Private Cloud Hosted",
      database: "Microsoft SQL Server",
      platforms: "Desktop Admin Client + Web Faculty/Student Portal",
      security: "Role-Based Security, CHED Compliance, Tamper-Evident Grade Auditing",
    },
    ctaText: "Request School ERP Consultation",
  },
  {
    id: "digital-laundry-system",
    slug: "digital-laundry-system",
    name: "Digital Laundry POS & Operations Management System",
    shortName: "Digital Laundry System",
    category: "software",
    badge: "Operations Optimizer",
    tagline: "Complete Operations and POS Suite for Modern Laundromats and Dry Cleaners",
    shortDescription:
      "Streamlines customer order intake, garment barcode tagging, wash-dry-fold stage tracking, automated pickup notifications, and daily sales accounting.",
    fullDescription:
      "Running a multi-machine laundry business or dry cleaner requires precise tracking of customer garments, machine turns, detergent inventory, and cash collections. Our Digital Laundry System provides a fast touchscreen POS interface, automated garment tagging, service status tracking (Washing, Drying, Folding, Ready for Pickup), customer SMS notifications, and multi-branch sales reporting.",
    iconName: "Sparkles",
    accentColor: "cyan",
    featured: false,
    highlightStat: {
      value: "0%",
      label: "Lost garments with barcode tag tracking",
    },
    keyBenefits: [
      "Eliminate lost clothes and customer disputes with barcode ticket verification",
      "Speed up customer drop-off with express touchscreen order entry",
      "Automated SMS alerts notify customers the moment orders are finished",
      "Monitor store revenue, detergent stock, and attendant cash drawers in real time",
    ],
    features: [
      {
        title: "Touchscreen POS & Order Intake",
        description: "Rapidly weigh bundles, select wash/dry options, special fabric care, add detergents, and issue printed claim tags.",
        icon: "Touchpad",
      },
      {
        title: "Garment Barcode / QR Tagging",
        description: "Attach durable thermal tags to laundry baskets and garments to guarantee foolproof identification and batch tracking.",
        icon: "QrCode",
      },
      {
        title: "Stage-by-Stage Workflow Status",
        description: "Staff scan tags as orders move across Sorting, Washing, Drying, Pressing, Folding, and Storage racks.",
        icon: "ListOrdered",
      },
      {
        title: "Automated SMS Pickup Alerts",
        description: "Customers receive an instant text notification when their laundry is ready for pickup or dispatched for delivery.",
        icon: "MessageSquare",
      },
      {
        title: "Supplies Inventory & Detergent Usage",
        description: "Track consumption of soap, softener, bags, and dry cleaning chemicals against order volume to stop inventory leakage.",
        icon: "Boxes",
      },
      {
        title: "Daily Cash Drawer Reconciliation",
        description: "Detailed shift-end reports showing cash, GCash/Maya digital payments, pending receivables, and cashier turnover.",
        icon: "DollarSign",
      },
    ],
    targetIndustries: [
      "Commercial Laundromats (Self-Service & Full Service)",
      "Dry Cleaning Boutiques",
      "Hotel & Resort In-House Laundry Facilities",
      "Hospital & Institutional Linen Services",
    ],
    systemSpecs: {
      deployment: "Local Area Network (LAN) + Cloud Sync",
      database: "Local Relational DB / Cloud Central",
      platforms: "Windows Touchscreen POS, Thermal Receipt Printers, Barcode Scanners",
      security: "Cashier Shift Locks, Void Authorization, Daily Cloud Backup",
    },
    ctaText: "Explore Digital Laundry System",
  },
  {
    id: "time-tracking-productivity",
    slug: "time-tracking-productivity",
    name: "Time Tracking & Team Productivity Software",
    shortName: "Time & Productivity Tracker",
    category: "software",
    badge: "100% Free Starter Edition",
    tagline: "Boost Team Productivity by 30% with Transparent Activity Analytics",
    shortDescription:
      "Automated desktop activity tracking, project task hours allocation, idle time detection, and actionable team productivity dashboards.",
    fullDescription:
      "Boost team productivity by up to 30% with our lightweight time tracking software. Built for remote teams, creative agencies, and office-based software teams, it transparently records active work hours, categorizes application and website usage, tracks project timelines, and provides management with honest metrics without intrusive invasion of privacy.",
    iconName: "Activity",
    accentColor: "blue",
    featured: false,
    highlightStat: {
      value: "30%",
      label: "Average productivity increase reported",
    },
    keyBenefits: [
      "Accurate client billing based on verified project and task work hours",
      "Identify productivity bottlenecks and time-consuming administrative workflows",
      "Encourage accountability across distributed remote and hybrid teams",
      "Free starter tier available for small teams and independent professionals",
    ],
    features: [
      {
        title: "Silent Background Activity Logging",
        description: "Runs unobtrusively in the system tray, tracking productive vs neutral vs unproductive application use.",
        icon: "Monitor",
      },
      {
        title: "Project & Task Time Allocation",
        description: "Team members easily assign time blocks to specific clients, project milestones, and ticket deliverables.",
        icon: "FolderKanban",
      },
      {
        title: "Smart Idle Time Detection",
        description: "Automatically pauses tracking when keyboard and mouse inactivity is detected, ensuring accurate billing.",
        icon: "PauseCircle",
      },
      {
        title: "Executive Productivity Dashboards",
        description: "Visual heatmaps, daily work patterns, team utilization rates, and automated weekly email summaries.",
        icon: "LineChart",
      },
      {
        title: "Offline Syncing Support",
        description: "Tracks hours even during internet interruptions and securely syncs telemetry once connection is restored.",
        icon: "WifiOff",
      },
    ],
    targetIndustries: [
      "Software & IT Services Companies",
      "Digital Marketing & Creative Studios",
      "Remote & Hybrid Workforce Organizations",
      "Professional Service Firms & Consultancies",
    ],
    systemSpecs: {
      deployment: "Cloud Web Dashboard & Desktop Agent",
      database: "Cloud Database",
      platforms: "Windows, macOS & Web Browser Console",
      security: "Encrypted Data Transmission, GDPR-Compliant Privacy Controls",
    },
    ctaText: "Get Free Time Tracker",
  },
  {
    id: "hardware-solutions",
    slug: "hardware",
    name: "Enterprise Hardware & Biometric Infrastructure",
    shortName: "Hardware & Terminal Solutions",
    category: "hardware",
    badge: "Certified Integration",
    tagline: "Turnkey Biometric Terminals, POS Hardware, and On-Premise Server Equipment",
    shortDescription:
      "Hardware solutions engineered and tested for 100% plug-and-play compatibility with ET Technologies' software suites.",
    fullDescription:
      "To ensure seamless deployment of our software systems, ET Technologies supplies, configures, and maintains enterprise-grade hardware devices. From optical and facial biometric time clocks for our DTR & Payroll software, to heavy-duty thermal receipt printers and barcode scanners for the Digital Laundry System, we provide complete turnkey technology packages.",
    iconName: "Cpu",
    accentColor: "orange",
    featured: false,
    keyBenefits: [
      "Pre-configured and tested directly with ET Technologies software solutions",
      "Local warranty, hardware replacement, and on-site Cebu IT technician support",
      "Durable enterprise-grade hardware built for high-traffic environments",
      "Full network cabling, LAN switch installation, and server rack setup",
    ],
    features: [
      {
        title: "Biometric Fingerprint & Facial Clocks",
        description: "High-speed optical fingerprint readers and infrared facial recognition terminals with battery backup.",
        icon: "Fingerprint",
      },
      {
        title: "Thermal POS Receipt Printers",
        description: "Heavy-duty 80mm and 58mm thermal receipt printers with auto-cutter for laundry, retail, and school cashiering.",
        icon: "Printer",
      },
      {
        title: "Barcode & QR Code Scanners",
        description: "High-sensitivity 1D/2D laser and CMOS scanners for rapid garment claim tags and student ID cards.",
        icon: "Scan",
      },
      {
        title: "Local Database Server Units",
        description: "Configured micro-servers and NAS storage with RAID redundancy for on-premise review center and school databases.",
        icon: "Server",
      },
    ],
    targetIndustries: [
      "All Businesses Deploying ET Technologies Systems",
      "Schools & Academic Campuses",
      "Laundromats & Dry Cleaners",
      "Corporate Offices & Commercial Facilities",
    ],
    systemSpecs: {
      deployment: "On-site Installation & Network Configuration",
      database: "Direct COM / TCP/IP Hardware Interface",
      platforms: "Windows, Embedded Linux Firmware",
      security: "Hardware Tamper Alarms, Local Encrypted Storage",
    },
    ctaText: "Request Hardware Bundle Quote",
  },
];
