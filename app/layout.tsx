import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DesignRead — AI Design Analysis",
  description:
    "Upload any design reference and get a structured analysis, a ready-to-use AI prompt, and an education layer explaining why the design works.",
  keywords: ["design analysis", "AI prompt", "design patterns", "UI design", "design education"],
  openGraph: {
    title: "DesignRead — AI Design Analysis",
    description: "Reverse-engineer professional interfaces, understand why they work, and recreate them using AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
