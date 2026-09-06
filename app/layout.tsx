import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://navoraa.github.io/navoraa-website").replace(/\/$/, "");
const description = "Perth-based Microsoft cloud, Azure, enterprise AI, Microsoft 365, platform engineering, security and FinOps advisory and delivery for Australian enterprise and government.";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "Navoraa | Microsoft Cloud, Azure & Enterprise AI Consulting Perth",
    template: "%s | Navoraa",
  },
  description,
  applicationName: "Navoraa",
  authors: [{ name: "Navoraa", url: `${siteUrl}/` }],
  creator: "Navoraa",
  publisher: "Navoraa",
  keywords: [
    "Microsoft cloud consulting Perth",
    "Azure consulting Perth",
    "enterprise AI consulting Australia",
    "Microsoft Cloud Adoption Framework assessment",
    "Azure Well-Architected Framework assessment",
    "Azure landing zone",
    "Microsoft 365 assessment",
    "Copilot adoption",
    "platform engineering",
    "cloud security",
    "FinOps Australia",
  ],
  alternates: { canonical: `${siteUrl}/` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: `${siteUrl}/`,
    siteName: "Navoraa",
    title: "Navoraa | Microsoft Cloud, Azure & Enterprise AI Consulting Perth",
    description,
  },
  twitter: {
    card: "summary",
    title: "Navoraa | Microsoft Cloud, Azure & Enterprise AI Consulting Perth",
    description,
  },
  category: "technology consulting",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
