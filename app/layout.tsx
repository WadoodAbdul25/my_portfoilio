import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wadood Abdul — AI/Web Developer",
  description:
    "Portfolio of Wadood Abdul — AI/Web Developer specializing in multi-agent systems, full-stack web apps, and intelligent developer tools.",
  keywords: ["Wadood Abdul", "AI Developer", "Web Developer", "Portfolio", "Next.js", "React", "Python"],
  openGraph: {
    title: "Wadood Abdul — AI/Web Developer",
    description: "AI/Web Developer · Multi-Agent Systems · Full-Stack Engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-slate-100">{children}</body>
    </html>
  );
}
