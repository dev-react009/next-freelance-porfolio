import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; 
import { Inter } from "next/font/google";
// import localFont from "next/font/local";

// const geist = localFont({
//   src: "../fonts/GeistVariable.woff2",
//   variable: "--font-geist",
//   display: "swap",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sree | Freelance Developer",
  description: "I build modern websites and web apps using Next.js, React, and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> 
        <main className="mt-24">{children}</main>
      </body>
    </html>
  );
}
