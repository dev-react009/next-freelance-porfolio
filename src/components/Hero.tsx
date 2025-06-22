"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[80vh] flex items-center justify-center text-center px-4 bg-gradient-to-b from-white to-blue-50"
        >
            <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Hi, I’m <span className="text-blue-600">Sree</span> —
                    <br className="hidden md:inline" />
                    I build full-stack apps that scale.
                </h1>

                <p className="text-gray-600 text-lg md:text-xl">
                    Expert in <strong className="text-gray-800 font-semibold">Next.js, React, Node.js</strong> & Tailwind —
                    I help startups ship fast and look great.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="text-base px-6 py-4">
                        Hire Me <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" className="text-base px-6 py-4">
                        View Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
