import type { Metadata } from "next";
import { Archivo, Cinzel, IBM_Plex_Mono } from "next/font/google";
import { site } from "@shared/config";
import { ThemeProvider } from "@features/toggle-theme";
import { HeaderWidget } from "@widgets/header";
import { FooterWidget } from "@widgets/footer";
import "./globals.css";

const title = `${site.name} — ${site.kicker}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domainHref),
  title,
  description: site.description,
  authors: [{ name: site.name, url: site.domainHref }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title,
    description: site.description,
  },
};

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${cinzel.variable} ${archivo.variable} ${ibmPlexMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <HeaderWidget />
          {children}
          <FooterWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
