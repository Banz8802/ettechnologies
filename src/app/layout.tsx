import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiveChatWidget } from "@/components/ui/LiveChatWidget";
import { companyInfo } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ET Technologies | Enterprise Software, Web & Mobile IT Solutions",
    template: "%s | ET Technologies",
  },
  description:
    "ET Technologies is an established technology solutions company specializing in custom software development, web & mobile applications, cloud computing, and high-performance hosting in Cebu, Philippines.",
  keywords: [
    "ET Technologies",
    "software development Cebu",
    "payroll system Philippines",
    "daily time record DTR system",
    "maritime review center software",
    "student information system",
    "digital laundry management system",
    "custom software development",
    "web development Philippines",
    "mobile app development",
    "Google Workspace Cebu",
    "Microsoft 365 migration",
  ],
  authors: [{ name: "ET Technologies", url: "https://www.elockertechnologies.com" }],
  creator: "ET Technologies",
  publisher: "ET Technologies",
  metadataBase: new URL("https://www.elockertechnologies.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ET Technologies | Enterprise Software & IT Solutions",
    description:
      "Modern enterprise software systems, responsive web applications, mobile platforms, and cloud infrastructure engineered for business growth.",
    url: "https://www.elockertechnologies.com",
    siteName: "ET Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ET Technologies | Enterprise Software & IT Solutions",
    description:
      "Modern enterprise software systems, responsive web applications, mobile platforms, and cloud infrastructure.",
    creator: "@elockertech",
  },
  icons: {
    icon: [
      { url: "/images/branding/favicon.png", sizes: "any" },
      { url: "/images/branding/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/branding/favicon.png",
    apple: "/images/branding/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#030712] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LiveChatWidget />
      </body>
    </html>
  );
}
