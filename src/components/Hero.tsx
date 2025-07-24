"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
            
            {/* Simplified floating elements - removed mix-blend-multiply */}
            <div 
                className="absolute -top-40 left-1 w-72 h-72 bg-purple-600/20 rounded-full filter blur-xl"
            />
             <div 
                className="absolute top-64 left-10 w-48 h-48 bg-purple-600/20 rounded-full filter blur-xl"
            />
            <div 
            
                className="absolute top-40 right-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-xl"
            />
            <div 
                className="absolute -bottom-28 left-20 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-xl"
            />

            <motion.div 
                className="relative z-10 max-w-3xl mx-auto px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Badge */}
                <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/90 border border-gray-700/50 shadow-lg mb-8 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-gray-200">Available for freelance work</span>
                </motion.div>

                {/* Main heading */}
                <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                    variants={itemVariants}
                >
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Full-Stack
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Developer
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
                    variants={itemVariants}
                >
                    Building scalable web applications with{" "}
                    <span className="font-semibold text-white">Next.js</span>,{" "}
                    <span className="font-semibold text-white">React</span>, and{" "}
                    <span className="font-semibold text-white">TypeScript</span>
                    <br />
                    <span className="text-gray-400">3+ years enterprise experience • Ready for your project</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    variants={itemVariants}
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        
                        <Button 
                            size="lg" 
                            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            Start Project
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.a>
                    
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button 
                            variant="outline" 
                            size="lg"
                            className="px-8 py-3 text-base font-semibold border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-800 text-gray-200 transition-all duration-300 cursor-pointer"
                        >
                            View Work
                        </Button>
                    </motion.a>
                </motion.div>

                {/* Tech stack */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 opacity-70"
                    variants={itemVariants}
                >
                    {[
                        { icon: <Code className="w-4 h-4 text-blue-400" />, name: "Next.js" },
                        { icon: <Zap className="w-4 h-4 text-yellow-400" />, name: "React" },
                        { icon: <Code className="w-4 h-4 text-green-400" />, name: "TypeScript" },
                        { icon: <Zap className="w-4 h-4 text-purple-400" />, name: "Tailwind" }
                    ].map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-800/90 rounded-full border border-gray-700/50 cursor-pointer"
                            whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "rgba(31, 41, 55, 0.95)",
                                transition: { duration: 0.2 }
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 0.7, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                        >
                            {tech.icon}
                            <span className="text-sm font-medium text-gray-200">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
