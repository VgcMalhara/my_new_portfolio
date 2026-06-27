import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chiran Vidanagamage | Portfolio",
  description: "Crafting Scalable Code - Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`} // 'scroll-smooth' එක අනිවාර්යයෙන් දාන්න
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#060608] text-white">
        {/* 
          මචං, Navbar එකේ Z-Index සහ Animation හරියට වැඩ කරන්න 
          body එක ඇතුලේ කිසිම අමතර margin/padding එකක් එන්න බැහැ. 
          ඔයාගේ globals.css එකෙත් html, body { margin: 0; padding: 0; } තියෙනවාද බලන්න.
        */}
        {children}
      </body>
    </html>
  );
}