import type { Metadata } from "next";
import { Libre_Caslon_Text, Inter } from "next/font/google";
import "./globals.css";

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The F Lab - Wedding & Events Planner",
  description: "Wedding & Events Planner",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${libreCaslonText.variable} ${inter.variable}`}>
      <body className="font-sans text-brand-text bg-white antialiased">{children}</body>
    </html>
  );
}
