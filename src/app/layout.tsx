import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; 
import { Inter } from "next/font/google";
// import StarryParticles from "@/components/StarryParticles";
// import ShootingStars from "@/components/ShootingStars";
// import localFont from "next/font/local";

// const geist = localFont({
//   src: "../fonts/GeistVariable.woff2",
//   variable: "--font-geist",
//   display: "swap",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sriram Garapati - Full-Stack Developer",
  description: "Professional portfolio of Sriram Garapati, a full-stack developer specializing in React, Next.js, and TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* Main Content */}
        <div>
          <Navbar /> 
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
