import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {Anek_Telugu} from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({subsets: ["latin"],
  variable : "--font-caption"
});

export const metadata: Metadata = {
  title: "Martin Ouedraogo ⸱ Software Engineer",
  description: "My Portfolio develop with React , Tailwind, Next.js, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
    <body className={cn(GeistSans.variable,GeistMono.variable, AnekTelugu.className,"font-sans h-full bg-background text-foreground" )}>{children}</body>
  </html>
  );
}
