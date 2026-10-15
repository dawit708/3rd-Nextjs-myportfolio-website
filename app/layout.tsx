import type { Metadata } from "next";
import "./globals.css";
import { GlobalBackground } from "@/components/ui/GlobalBackground";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export const metadata: Metadata = {
  // ===== Basic SEO =====
  title: {
    default: "Dawit Tsegei | Full-Stack Developer in Addis Ababa, Ethiopia",
    template: "%s | Dawit Tsegei",
  },
  description:
    "Dawit Tsegei is a full-stack web developer based in Addis Ababa, Ethiopia. Specialized in React, Next.js, TypeScript, MERN stack, and Flutter. 12+ production projects including hospital management systems and e-commerce platforms.",
  keywords: [
    "Dawit Tsegei",
    "Dawittsigie",
    "Dawit Tsigie",
    "Full Stack Developer Ethiopia",
    "React Developer Addis Ababa",
    "Next.js Developer Ethiopia",
    "MERN Stack Developer",
    "Ethiopian Software Developer",
    "Freelance Developer Ethiopia",
    "Web Developer Addis Ababa",
    "TypeScript Developer Ethiopia",
    "Flutter Developer Ethiopia",
  ],
  authors: [{ name: "Dawit Tsegei", url: "https://dawit-portfolio.vercel.app" }],
  creator: "Dawit Tsegei",
  publisher: "Dawit Tsegei",

  // ===== Open Graph (Facebook, LinkedIn) =====
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dawit-portfolio.vercel.app",
    siteName: "Dawit Tsegei Portfolio",
    title: "Dawit Tsegei | Full-Stack Developer in Addis Ababa",
    description:
      "Full-stack developer building production-ready web applications with React, Next.js, TypeScript, and MERN stack. 12+ live projects.",
    images: [
      {
        url: "/about.jpg",
        width: 1200,
        height: 630,
        alt: "Dawit Tsegei — Full-Stack Developer",
      },
    ],
  },

  // ===== Twitter =====
  twitter: {
    card: "summary_large_image",
    title: "Dawit Tsegei | Full-Stack Developer",
    description:
      "Full-stack developer from Addis Ababa, Ethiopia. React, Next.js, TypeScript, MERN.",
    images: ["/about.jpg"],
    creator: "@dawit708",
  },

  // ===== Robots =====
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

  // ===== Verification =====
  // Add your Google Search Console verification code here later
  // verification: {
  //   google: "your-google-verification-code",
  // },

  // ===== Canonical URL =====
  alternates: {
    canonical: "https://dawit-portfolio.vercel.app",
  },

  // ===== Category =====
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Google (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dawit Tsegei",
              alternateName: ["Dawittsigie", "Dawit Tsigie"],
              url: "https://dawit-portfolio.vercel.app",
              image: "https://dawit-portfolio.vercel.app/about.jpg",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              email: "dawittsigie3@gmail.com",
              telephone: "+25154329763",
              sameAs: [
                "https://github.com/dawit708",
                "https://dawit-portfolio.vercel.app",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Express.js",
                "PostgreSQL",
                "Tailwind CSS",
                "Flutter",
              ],
            }),
          }}
        />
      </head>
      <body className="relative">
        <LoadingScreen />
        <GlobalBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}