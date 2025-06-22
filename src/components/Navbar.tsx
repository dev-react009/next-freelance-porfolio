"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-800">
          Sriram <span className="text-blue-600"> Garapati</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 pb-4">
          <ul className="space-y-3 text-sm text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
