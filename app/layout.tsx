import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  // Browser Tab & Share Title
  title: "Enterprise Transformation Summit 2026 | SYSTEMS: The Goldmine",
  
  // The "Preview Text" for Search Engines and Social Media
  description: "Build a business that works with or without you. Shift from owner-dependency to structured excellence at Astro Halls, Port Harcourt.",
  
  metadataBase: new URL("https://enterprisetransformationsummit.org.ng"),

  // Favicons & Tab Icons
  icons: {
    icon: "/ets-logo.png",
    apple: "/ets-logo.png",
  },

  // Open Graph (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "Enterprise Transformation Summit 2026",
    description: "Stop the hustle. Build the structure. Join us March 26, 2026, to transform your business into a system-driven operation.",
    url: "https://enterprisetransformationsummit.org.ng",
    siteName: "ETS Summit 2026",
    images: [
      {
        url: "/ets-logo.png", // Next.js looks in the public folder automatically
        width: 800,
        height: 800,
        alt: "Enterprise Transformation Summit Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "SYSTEMS: The Goldmine | ETS 2026",
    description: "Equipping SME leaders with the systems and leadership required to build scalable organizations.",
    images: ["/ets-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}