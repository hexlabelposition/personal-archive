import { Archivo, Cinzel, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@features/toggle-theme";
import { HeaderWidget } from "@widgets/header";
import { FooterWidget } from "@widgets/footer";
import "./globals.css";

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
