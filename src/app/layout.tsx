import type { Metadata } from "next";
import { Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ThreeBackground } from "@/components/ThreeBackground";
import { BackToTop } from "@/components/BackToTop";
import { CustomCursor } from "@/components/CustomCursor";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Márcio — Full Stack Developer & Cloud Architect",
  description:
    "Portfólio de Márcio — Desenvolvedor Full Stack especializado em React, Node.js, Cloud Computing e Arquitetura de Software.",
  keywords: ["full stack", "developer", "react", "next.js", "cloud", "portfolio", "brasil"],
  openGraph: {
    title: "Márcio — Full Stack Developer & Cloud Architect",
    description: "Portfólio de Márcio — Desenvolvedor Full Stack especializado em React, Node.js, Cloud Computing e Arquitetura de Software.",
    type: "website",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Márcio",
  jobTitle: "Full Stack Developer & Cloud Architect",
  url: "https://marcio.dev",
  knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "Python", "Cloud Computing", "AWS", "Docker", "Kubernetes"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${josefin.variable} ${openSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <CustomCursor />
          <Navbar />
          <ThreeBackground />
          {children}
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
